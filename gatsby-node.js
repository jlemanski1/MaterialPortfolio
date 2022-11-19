const butterCmsApiKey = process.env.BUTTER_CMS_API_KEY
const butterSdk = require('buttercms')(butterCmsApiKey);

exports.onPreBootstrap = async () => {
  try {
    await butterSdk.category.list()
  } catch (e) {
    if (butterCmsApiKey) throw new Error('Your Butter token is set to an invalid value. Please verify your token is correct.');
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions

  if (page.path === '/dev-404-page/') {
    deletePage(page);
  } else if (page.path === '/404/') {
    deletePage(page);
    if (!butterCmsApiKey) {
      createPage({ ...page, component: require.resolve(`./src/404.js`)});
    } else {
      createPage(page);
    }
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;    

//   const resume = await graphql(`
//    query {
//     butterPage(slug: {eq: "resume"}) {
//         id
//         about_section {
//           about
//           scroll_anchor_id
//           email
//           first_name
//           last_name
//           location
//         }
//         project_section {
//           scroll_anchor_id
//           section_subtitle
//           section_title
//           project_items {
//                 project_date_range
//                 project_description
//                 project_github_url
//                 project_live_url
//                 project_playstore_url
//                 project_appstore_url
//                 project_subtitle
//                 project_title
//             }
//         }
//         experience_section {
//             scroll_anchor_id
//             section_subtitle
//             section_title
//             experience_items {
//               company_name
//               company_url
//               date_range
//               job_description
//               job_title
//             }
//         }
//         education_section {
//             section_title
//             section_subtitle
//             scroll_anchor_id
//             education_items {
//               education_item_certificate
//               education_item_date_range
//               education_item_description
//               education_item_title
//             }
//           }
//         skill_section {
//             skills_title
//             skills_subtitle
//             skill_type {
//                 skill_title
//                 skill_list
//             }
//             scroll_anchor_id
//         }
//         contact_form {
//             contact_subtitle
//             contact_title
//             form_field_email_help
//             form_field_email_title
//             form_field_message_help
//             form_field_message_title
//             form_field_name_help
//             form_field_name_title
//             scroll_anchor_id
//           }
//         }
//     }
//   `);


  const menuItems = await graphql(`
  query {
    butterCollection(key: {eq: "blog_navigation_menu"}, id: {}) {
      value {
        menu_items {
          label
          url
        }
      }
    }
  }
`);

const blogPosts = await graphql(`
  allButterPost(
    limit: 2
    sort: {order: DESC, fields: published}
  ) {
    nodes {
      title
      summary 
      url
      featured_image
      featured_image_alt
    }
  }
`
);

const allBlogPosts = async (category, tag) => await graphql(`
query {
  allButterPost(
    sort: {order: DESC, fields: published}
    filter: {
      ${category ? `categories: {elemMatch: {slug: {eq: \"${category}\"}}},` : ""}
      ${tag ? `tags: {elemMatch: {slug: {eq: \"${tag}\"}}},` : ""}
    }
  ) {
    nodes {
      title
      author {
        last_name
        first_name
        profile_image
      }
      summary
      body
      meta_description
      published(formatString: "ddd DD MMM YYYY")
      tags {
        name
        slug
      }
      url
      featured_image
      featured_image_alt
      slug
      categories {
        name
        slug
      }
    }
  }
}
`)


  // index
  createPage({
    path: `/`,
    component: require.resolve(`./src/templates/index.js`),
    context: {
      pageData: resume.data.butterPage,
      menuData: menuItems,
      allBlogPosts: allBlogPosts(),
    },
  });
}