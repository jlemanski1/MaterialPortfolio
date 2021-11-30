import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
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
            generation of consumer-facing companies. I'm a third year computer science major
            who loves to build digital products and games in my spare time. Striving to join 
            a team working on amazing software, I hope to be able to contribute with both 
            programming and communication skills, all the while gaining more experience with 
            advanced data structures and algorithms in large codebases.
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
                Tex is a minimalist text editor for bash terminals, written in C, with zero dependencies.
                I started this project after having to write a memory allocator and blockchain in C for a
                course, and wanted to create something more usable in real world scenarios. Tex features 
                all the typical features one expects from a text editor, with the addition of filetype 
                detection with language based syntax highlighting, and robust searching all in a small 
                opensource editor.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">March - June 2019</span>
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
                An app created with Flutter &amp; Dart to track the current location of the International 
                Space Station (ISS), the next time in passes over the user, current crew information, as 
                well as history about its creation, assembly, and some other facts. The app fetches the latest 
                information about the crew and continuous location data for the tracking &amp; next pass features,
                through one of NASA's API and presents it in a easy-to-digest manner for the user.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">July - October 2019</span>
              <ul className="list-inline project-icons">
                <li className="list-inline-item">
                  <a href="https://github.com/jlemanski1/ISS-Tracker" className="fab fa-github"></a>
                  <a href="https://play.google.com/store/apps/details?id=tech.jlemanski.iss_tracker_v2" className="fab fa-google-play"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Social Beacon</h3>
              <div className="subheading mb-3">Instantly scaleable and fully featured, crossplatform social networking app</div>
              <p>
                Fully featured, secure, and scaleable, crossplatform social networking app. Implements all the features of 
                large social networks such as Instagram, built on top of an intuitive, responsive UI. Leveraging Google Cloud 
                Platform for user authentication, Cloud Firestore for image &amp; file storage, and Firebase for user accounts, and
                databases, the app can be instantly scaled to millions of users.
              </p>
            </div>
            <div className="resume-date text-md-right flex-column">
              <span className="text-primary">Nov - January 2020</span>
              <ul className="list-inline project-icons">
                <li className="list-inline-item">
                  <a href="https://github.com/jlemanski1/Social_Beacon" className="fab fa-github"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">RNN Text &amp; Code Generator</h3>
              <div className="subheading mb-3">Smart text generation using a recurrent neural network</div>
              <p>
                Leveraging the power of Keras and Tensorflow, this script generates text using a recurrent
                neural network. I designed this to be very flexible, working on any text source, ranging from scraped data,
                sonnets, a novel, or even code. I've personally trained this network and generated text based on Shakespearan
                sonnets, Star Wars movie scripts, and the linux kernel with great results.
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
              BMI &amp; BMR calculator with a beautifully simple design, to easily check up on your health, and/or 
              calculate your daily caloric intake. Users can feel safe knowing the app is noninvasive, collecting no user data,
              and being fully opensource. This responsive, crossplatform app was created in Flutter with Dart, as an exercise to
              implement a different style of design.
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
      
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">mkd-Editor</h3>
            <div className="subheading mb-3">Realtime Collaborative Markdown Editor</div>
            <p>
              Realtime collaborative editor that aims to assist writing content in Markdown. From pretty-ing
              up Github readmes, to writing copy for a JAMstack site, or simply your latest blog post, this project
              makes it dead simple to spruce up your content. This project was realized using NodeJS for the backend,
              Redis for in-memory database storage, and ShareJS to facilitate collaborative editing. 
            </p>
          </div>
          <div className="resume-date text-md-right flex-column">
            <span className="text-primary">May - June 2020</span>
            <ul className="list-inline project-icons">
              <li className="list-inline-item">
                <a href="https://github.com/jlemanski1/MarkdownEditor" className="fab fa-github"></a>
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
              <h3 className="mb-0">Swift Ventures Inc.</h3>
              <div className="subheading mb-3">Flutter Developer</div>
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
              <span className="text-primary">September 2019 - Present</span>
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

export default IndexPage;
