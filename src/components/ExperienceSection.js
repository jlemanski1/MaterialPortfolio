import * as React from 'react';
import Experience from './Experience';

const ExperienceSection = (props) => {

    return (
        <section className="resume-section p-3 p-lg-5 d-flexgrow align-items-center" id={props.fields.scroll_anchor_id}>
        <div className="w-100">
            <h2 className="mb-5">{props.fields.section_title}</h2>
            {props.fields.section_subtitle.length !== 0 && <div className="subheading mb-3">{props.fields.section_subtitle}</div>}
            {props.fields.experience_items.map(experience => <Experience key={experience.company_name} {...experience}/>)}
          </div>
        </section>
    );
}

export default ExperienceSection;