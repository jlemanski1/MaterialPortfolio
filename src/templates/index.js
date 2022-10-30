import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import ProjectSection from '../components/ProjectSection';


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

      <section
        className="resume-section p-3 p-lg-5 d-flexgrow align-items-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0"><a href="https://www.base1.com">BASE1</a></h3>
              <div className="subheading mb-3">Mobile Developer</div>
              <div>
                BASE1 brought me on as a mobile developer to assist in the development of their main client's
                enterprise Flutter mobile app with over 1 million monthly users. Alongside responsonsibilities developing the mobile product and services,
                I also delved into developing and extending the Hybris backend along with various microservices.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"> Feb 2022 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Swift Ventures Inc.</h3>
              <div className="subheading mb-3">Mobile Developer</div>
              <div>
                I was contracted by Swift Ventures to assist in the development of an upcoming mobile app 
                (Name protected by NDA). Originally brought on to upgrade and port the app to a web app, 
                they were quickly impressed and kept me on to assist with the development of the cross platform 
                mobile application. I was responsible for everything from programming a web socket handler to 
                implement push notifications and real time data streaming to the app, writing services to 
                interact with Firebase and AWS server, to fine tuning and implementing UI elements. Working remotely, 
                I took advantage of Slack, weekly standup meetings, and the agile development paradigm to ensure consistent 
                and efficient communication with the rest of the team.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"> May 2021 - August 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ZLK group</h3>
              <div className="subheading mb-3">Cofounder &amp; Lead Developer</div>
              <div>
                Development, design, and marketing agency leveraging the latest tech and design trends 
                to bring digital products to life. Alongside leading the development charge on all our
                mobile apps &amp; websites, I'm responsible for onboarding new contractors, writing 
                support documentation and userguides for clients, as well as aiding in design.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2019 - August 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">GADEC</h3>
              <div className="subheading mb-3">MacEwan University Game Development Club</div>
              <div>
                I worked with various teams consisting of writers, producers, designers, composers,
                artists, and fellow developers to bring a randomly selected constraint and theme to 
                life, in a video game format (although we did occasionaly create board games). 
                Working in bi-weekly sprints, we would come together to form an idea with what's provided,
                and produce a demo or MVP of sorts to present to the other teams.
                <br/><br/>
                The following semester of each year consisted of taking the team's favourite project, further
                fleshing it out with new features, art, QA, and general polish all around. The respective games
                each year were then presented and demoed at the Press A to Start conference/convention.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2018 - January 2020</span>
            </div>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Freelance Web Development &amp; Design</h3>
              <div>
                Leveraging my skills and spare time to commission bespoke web sites for customers across the globe.
                Starting with a design tailored to suit the needs of the customer/end user, I then use the appropriate
                technologies to bring that design to life, in a responsive, performant manner.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2019 - Feb 2022</span>
            </div>
          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">MacEwan University</h3>
              <div className="subheading mb-3">Bachelor of Arts</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2017 - 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Athabasca University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Networks &amp; Security Track<br/>Minor in Psychology</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2020 - 2021</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          
          <div className="mb-5">
            Having gained experience working with a variety of teams with a varying tech stack, I've learned the importance
            of having a well rounded soft skillset to compliment technical skills. Proper production and planning is instrumental
            to work effectively with a team, stay organized, and keep a sharp attention on the details. In my eyes, developping these
            skills is essential for efficient development and meaningful collaboration.
          </div>

          <ul className="list-inline">
          <li className="list-inline-item">
              <div className="subheading">Programming Languages:</div>
            </li>
            <li className="list-inline-item">
              <p>C, C++, Dart, Bash, Perl, PHP, Python, JavaScript</p>
            </li>
          </ul>

          <ul className="list-inline">
          <li className="list-inline-item">
              <div className="subheading">Software Engineering:</div>
            </li>
            <li className="list-inline-item">
              <p>Agile development, Database architecture, Data strctures, Algorithmn optimization, Technical writing</p>
            </li>
          </ul>

          <ul className="list-inline">
          <li className="list-inline-item">
              <div className="subheading">Linux/Unix:</div>
            </li>
            <li className="list-inline-item">
              <p>Network Security, Bash &amp; Perl scripting, Unix server administration, LAMP</p>
            </li>
          </ul>
          
          <ul className="list-inline">
            <li className="list-inline-item">
              <div className="subheading">Web technologies &amp; Frameworks:</div>
            </li>
            <li className="list-inline-item">
              <p>HTML5, CSS3.0, JS, GatsbyJS, React, Wordpress, PWA, JAM Stack</p>
            </li>
          </ul>

          <ul className="list-inline">
          <li className="list-inline-item">
              <div className="subheading">Mobile Apps:</div>
            </li>
            <li className="list-inline-item">
              <p>Flutter, Native android &amp; iOS</p>
            </li>
          </ul>
          
          <ul className="list-inline">
          <li className="list-inline-item">
              <div className="subheading">Source Control &amp; Deployment:</div>
            </li>
            <li className="list-inline-item">
              <p>Git, Perforce, Travis CI, Docker, Kubernetes</p>
            </li>
          </ul>

          
        </div>
      </section>

      <hr className="m-0" />
      
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Contact Me</h2>

          <div className="subheading mb-3">Let me know about your company and/or project today!</div>

          <form id="fs-frm" accept-charset="utf-8" action="https://formspree.io/mwkrpjwz" method="POST">
            <fieldset id="fs-frm-inputs">
              <label for="full-name">Full Name</label>
              <input type="text" name="name" id="full-name" placeholder="First and Last" required=""></input>
              <label for="email-address">Email Address</label>
              <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""></input>
              <label for="message">Message</label>
              <textarea rows="5" name="message" id="message" placeholder="Let me know how I can assist in the design and development of your next or current project. Thanks!" required=""></textarea>
              <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
            </fieldset>
            <input type="submit" value="Submit"></input>
          </form>

        </div>
      </section>
      
    </div>
  </Layout>
);
};
export default IndexPage;