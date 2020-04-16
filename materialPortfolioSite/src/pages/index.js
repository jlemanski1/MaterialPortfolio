import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary d-flex">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I aim to create beautiful web &amp; mobile experiences for the next 
          generation of consumer-facing companies. I'm a third year Computer Science major
          at MacEwan University who loves to build digital products and software solutions
          in my spare time. Striving to join a team working on amazing software, I hope to be
          able to contribute with my skills and ideas, while learning from the atmosphere &amp;
          fellow team members. 
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flexgrow justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Personal Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Tex</h3>
              <div className="subheading mb-3">Lightweight minimalist unix text editor</div>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">March 2019 - June 2019</span>
              <ul className="list-inline project-icons">
                <li className="list-inline-item">
                  <a href="https://github.com/jlemanski1/Tex" className="fab fa-github"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ISS Tracker</h3>
              <div className="subheading mb-3">Crossplatform ISS Tracking &amp; educational app</div>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">July 2019 - Oct 2019</span>
              <ul className="list-inline project-icons">
                <li className="list-inline-item">
                  <a href="https://github.com/jlemanski1/ISS-Tracker" className="fab fa-github"></a>
                  <a href="https://play.google.com/store/apps/details?id=tech.jlemanski.iss_tracker" className="fab fa-google-play"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Social Beacon</h3>
              <div className="subheading mb-3">Instantly scaleable and fully featured, crossplatform social networking app</div>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">Nov 2019 - Jan 2020</span>
              <ul className="list-inline project-icons">
                <li className="list-inline-item">
                  <a href="https://github.com/jlemanski1/Social_Beacon" className="fab fa-github"></a>
                  <a href="#" className="fab fa-google-play"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">RNN Text &amp; Code Generator</h3>
              <div className="subheading mb-3">Smart text generation using a recurrent neural network</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">March 2020</span>
              <ul className="list-inline project-icons">
                <li className="list-inline-item">
                  <a href="https://github.com/jlemanski1/RNN_TextGenerator" className="fab fa-github"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ezBMI</h3>
              <div className="subheading mb-3">Crossplatform BMI &amp; BMR calculator app</div>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">Nov 2019 - Feb 2020</span>
              <ul className="list-inline project-icons">
                <li className="list-inline-item">
                  <a href="https://github.com/jlemanski1/BMI-Calculator" className="fab fa-github"></a>
                  <a href="https://play.google.com/store/apps/details?id=tech.jlemanski.bmi_calculator" className="fab fa-google-play"></a>
                </li>
              </ul>
            </div>
          </div>

      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flexgrow align-items-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ZLK group</h3>
              <div className="subheading mb-3">Cofounder &amp; Lead Developer</div>
              <div>Development, design, and marketing agency leveraging the latest tech and design trends to bring digital products to life.</div>
              <p><b>Responsibilities:</b></p>
              <ul>
                <p>Lorem</p>
                <p>List em</p>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">GADEC</h3>
              <div className="subheading mb-3">MacEwan University Game Development Club</div>
              <div>
                Worked with various teams consisting of writers, producers, designers, composers,
                artists, and fellow developers to bring to life a new MVP bi-weekly, in a game jam-
                like fashion, later choosing the best to flesh out over the following semester. 
                <br/><br/>
                I worked with different teams over the years to bring these projects starting with a
                theme and constraint to life, before polishing and then presenting a demo of the 
                respective games, at the Press A to Start conference/convention.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fall 2018 - Present</span>
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
              <p><b>Sites:</b></p>
              <ul>
                <p>One</p>
                <p>Two</p>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2019 - Present</span>
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
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Networks &amp; Security Track</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2017 - 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Athabasca University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Networks &amp; Security Track</div>
              <p className="mt-3">
                The Covid-19 pandemic led to a degraded quality of education from lectures to labs.
                This pushed me to transfer to an online focused University to maintain the quality of
                my education despite the ongoing global crisis.
              </p>
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

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from developing and , I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I'm an aspiring chef, and I spend a
            large amount of my free time building PCs exploring the latest tech trends &amp;
            hardware releases.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
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
          
        </div>
      </section>
      
    </div>
  </Layout>
);

export default IndexPage;
