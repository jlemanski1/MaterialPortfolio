import * as React from 'react';

const Project = (props) => {
    
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">{props.project_title}</h3>
          {props.project_subtitle.length === 0 || <div className="subheading mb-3">{props.project_subtitle}</div>}
          <p>
            {props.project_description}
          </p>
        </div>
        <div className="resume-date text-md-right flex-column">
          <span className="text-primary">{props.project_date_range}</span>
          <ul className="list-inline project-icons">
            <li className="list-inline-item">
              {props.project_github_url.length === 0 || <a href={props.project_github_url} className="fab fa-github"/>}
              {props.project_live_url.length === 0 || <a href={props.project_live_url} className="fa-duotone fa-browser"/>}
              {props.project_playstore_url.length === 0 || <a href={props.project_playstore_url} className="fab fa-google-play"/>}
              {props.project_appstore_url.length === 0 || <a href={props.project_appstore_url} className="fab fa-app-store-ios"/>}
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Project;