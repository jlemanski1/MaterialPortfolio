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

  const resume = await graphql(`
   query {
    butterPage(slug: {eq: "resume"}) {
        id
        about_section {
          about
          scroll_anchor_id
          email
          first_name
          last_name
          location
        }
        project_section {
          scroll_anchor_id
          section_subtitle
          section_title
          project_items {
                project_date_range
                project_description
                project_github_url
                project_live_url
                project_playstore_url
                project_appstore_url
                project_subtitle
                project_title
            }
        }
        experience_section {
            scroll_anchor_id
            section_subtitle
            section_title
            experience_items {
              company_name
              company_url
              date_range
              job_description
              job_title
            }
        }
        skill_section {
            skills_title
            skills_subtitle
            skill_type {
                skill_title
                skill_list
            }
            scroll_anchor_id
        }
        contact_form {
            contact_subtitle
            contact_title
            form_field_email_help
            form_field_email_title
            form_field_message_help
            form_field_message_title
            form_field_name_help
            form_field_name_title
            scroll_anchor_id
          }
        }
    }
  `);

  const menuItems = await graphql(`
  query {
    butterCollection(key: {eq: "navigation_menu"}) {
      value {
        menu_items {
          label
          url
        }
      }
    }
  }
`);

  // index
  createPage({
    path: `/`,
    component: require.resolve(`./src/templates/index.js`),
    context: {
      pageData: resume.data.butterPage,
      menuData: menuItems
    },
  });
}