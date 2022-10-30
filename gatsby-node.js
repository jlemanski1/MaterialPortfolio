const butterCmsApiKey = process.env.BUTTER_CMS_API_KEY
const butterCmsPreview = !(process.env.BUTTER_CMS_PREVIEW === "false" || process.env.BUTTER_CMS_PREVIEW === "0")
const butterSdk = require('buttercms')(butterCmsApiKey);

exports.onPreBootstrap = async () => {
  try {
    await butterSdk.category.list()
  } catch (e) {
    if (butterCmsApiKey) throw new Error("Your Butter token is set to an invalid value. Please verify your token is correct.")
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions

  if (page.path === '/dev-404-page/') {
    deletePage(page)
  } else if (page.path === '/404/') {
    deletePage(page)
    if (!butterCmsApiKey) {
      createPage({ ...page, component: require.resolve(`./src/404.js`)})
    } else {
      createPage(page)
    }
  }
}






exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //let categories = (await butter.category.list()).data.data;
  //let tags = (await butter.tag.list()).data.data;

    

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
            project_subtitle
            project_title
          }
        }
      }
    }
  `);

  /*
  const blogPageDataQuery = async (category, tag) => await graphql(`
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
*/
/*
const menuItemsData = await graphql(`
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
  `)
*/
//  const allBlogPosts = await blogPageDataQuery()


  // index
  createPage({
    path: `/`,
    component: require.resolve(`./src/templates/index.js`),
    context: {
      pageData: resume.data.butterPage,
      //blogPosts: landingPage.data.allButterPost.nodes,
      //menuData: menuItemsData
    },
  });

  /*
  // all pages for preview mode
  const allPages = landingPage.data.allButterPage.nodes
  allPages.filter(p => p.page_type !== "*").map(page => {
      return createPage({
        path: `${page.page_type}/${page.slug}`,
        component: require.resolve(`./src/pages/index.js`),
        context: {
          pageData: page,
          //blogPosts: landingPage.data.allButterPost.nodes,
          //menuData: menuItemsData
        },
      });
  })
  */


  /*

  // blog index
  createPage({
    path: `/blog`,
    component: require.resolve(`./src/templates/blog.js`),
    context: {
      pageData: allBlogPosts,
      menuData: menuItemsData,
      categories,
      pageType: "blog"
    },
  });

  // search
  createPage({
    path: `/blog/search`,
    component: require.resolve(`./src/templates/blog.js`),
    context: {
      pageData: allBlogPosts,
      menuData: menuItemsData,
      categories,
      pageType: "search",
    },
  });

  // categories
  for (const category of categories) {
    const categoryPosts = await blogPageDataQuery(category.slug, null)
    createPage({
      path: `/blog/category/${category.slug}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: {
        pageData: categoryPosts,
        menuData: menuItemsData,
        categories,
        pageType: "category",
        mainEntityName: category.name
      },
    });
  }

  // tags
  for (const tag of tags) {
    createPage({
      path: `/blog/tag/${tag.slug}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: {
        pageData: await blogPageDataQuery(null, tag.slug),
        menuData: menuItemsData,
        categories,
        pageType: "tag",
        mainEntityName: tag.name
      },
    });
  }

  // blog posts
  allBlogPosts.data.allButterPost.nodes.map(article => {
    createPage({
      path: `/blog/${article.slug}`,
      component: require.resolve(`./src/templates/article.js`),
      context: {
        pageData: article,
        menuData: menuItemsData,
        categories
      },
    });
  })
  */
}
