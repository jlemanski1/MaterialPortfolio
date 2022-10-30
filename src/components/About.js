import * as React from "react"
import config from '../../config';

const About = (props) => {

    return(
        <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">
            {props.fields.first_name}
            <span className="text-primary d-flex">{props.fields.last_name}</span>
          </h1>
          <div className="subheading mb-5">
            {props.fields.location} · <a href={`mailto:${props.fields.email}`}>{props.fields.email}</a>
          </div>
          <p className="lead mb-5">{props.fields.about}</p>
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
    );
}

export default About;