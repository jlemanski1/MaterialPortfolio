import * as React from 'react';


const Education = (props) => {
    return (
<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">{props.education_item_title}</h3>
              <div className="subheading mb-3">{props.education_item_certificate}</div>
              {props.education_item_description !== 0 && <div>{props.education_item_description}</div>}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{props.education_item_date_range}</span>
            </div>
          </div>
    );
}

export default Education;