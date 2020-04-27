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
          at MacEwan University who loves to build digital products and games
          in my spare time. Striving to join a team working on amazing software, I hope to be
          able to contribute with both programming and communication skills, all the while gaining
          more experience with advanced data structures and algorithms.
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
                An app created with Flutter &amp; Dart to track the current location of the International 
                Space Station (ISS), the next time in passes over the user, current crew information, as 
                well as history about its creation, assembly, and some other facts. The app fetches the latest 
                information about the crew and continuous location data for the tracking &amp; next pass features,
                through one of NASA's API and presents it in a easy-to-digest manner for the user.
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
                Fully featured, secure, and scaleable, crossplatform social networking app. Implements all the features of 
                large social networks such as Instagram, built on top of an intuitive, responsive UI. Leveraging Google Cloud 
                Platform for user authentication, Cloud Firestore for image &amp; file storage, and Firebase for user accounts, and
                databases, the app can be instantly scaled to millions of users.
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
                implement a design I found online.
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
              <div>Computer Science - Networks &amp; Security Track<br/>Minor in Psychology</div>
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
              <p className="mt-3">
                Due to a shortage of professors and increasingly smaller class sizes, I transferred universities
                to maintain the quality of educaion and to avoid delaying my graduation timeline.
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
          
          <div className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum diam, 
            malesuada a semper id, vehicula quis massa. Fusce ultrices malesuada varius. Fusce 
            volutpat mauris at varius pulvinar. Curabitur porta sodales lectus, eu sodales risus 
            aliquet ut. Pellentesque lacinia facilisis libero, vel tincidunt nunc ullamcorper eu. 
            Etiam pharetra tellus at laoreet consequat. Fusce quis tincidunt tortor. Morbi maximus 
            lobortis dolor, et sollicitudin leo tincidunt eu. Sed sit amet pretium ex, a blandit magna.
            Phasellus quam elit, vehicula ut quam ac, feugiat dictum tortor. Aenean sapien nulla,
            tincidunt eget maximus venenatis, accumsan vel libero. Sed sit amet orci ac mauris tempus
            tincidunt. Nunc efficitur dapibus velit quis ullamcorper. Curabitur ultricies feugiat lacus
            et facilisis.
          </div>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div className="subheading">Web/PWA:</div>
            </li>
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
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
          </ul>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div className="subheading">Mobile Apps:</div>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-apple"></i>
            </li>
          </ul>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div className="subheading">Game Dev:</div>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive, &amp; Accessible Design
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
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Contact Me</h2>

          <div className="subheading mb-3">Enter all that apply:</div>
          
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>

        </div>
      </section>
      
    </div>
  </Layout>
);

export default IndexPage;
