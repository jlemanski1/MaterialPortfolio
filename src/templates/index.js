import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import BlogPostList from '../components/BlogPostList';


const IndexPage = ({pageContext: { menuData, blogPosts } }) => {
  const menuItems = menuData.data.butterCollection.value[0].menu_items;
  const posts = blogPosts.allButterPosts.nodes;

  console.log(`blogPosts: ${blogPosts}`)

  return (
  <Layout>
    <Sidebar menuItems={menuItems}/>
    <div className="container-fluid p-0">

      {
      <BlogPostList fields={posts}/>
      
      /* <About fields={pageData.about_section}/>
      
      <hr className="m-0" />

      <ProjectSection fields={pageData.project_section}/>

      <hr className="m-0" />

      <ExperienceSection fields={pageData.experience_section}/>

      <hr className="m-0" />

      <EducationSection fields={pageData.education_section}/>

      <hr className="m-0" />

      <SkillSection fields={pageData.skill_section}/>

      <hr className="m-0" />
      
      <ContactForm fields={pageData.contact_form}/>
       
      <Footer/>
      */
      }
    </div>
  </Layout>
);
};

export default IndexPage;