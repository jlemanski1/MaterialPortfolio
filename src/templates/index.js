import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import ProjectSection from '../components/ProjectSection';
import ContactForm from '../components/ContactForm';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';


const IndexPage = ({pageContext: { pageData, menuData } }) => {
  const menuItems = menuData.data.butterCollection.value[0].menu_items;

  return (
  <Layout>
    <Sidebar menuItems={menuItems}/>
    <div className="container-fluid p-0">

      <About fields={pageData.about_section}/>

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
    </div>
  </Layout>
);
};
export default IndexPage;