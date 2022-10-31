import * as React from 'react';


const Experience = (props) => {
    let linkUrl = props.company_url.length !== 0;
    console.log(`linkUrl: ${linkUrl}, url: ${props.company_url}`);
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
            <h3 className="mb-0">
            {linkUrl ? <a href={props.company_url}>{props.company_name}</a> : <>{props.company_name}</>}
            </h3>

              <div className="subheading mb-3">{props.job_title}</div>
              <div>{props.job_description}</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{props.date_range}</span>
            </div>
          </div>
    );
}

export default Experience;