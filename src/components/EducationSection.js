import * as React from 'react';
import Education from './Education';

const EducationSection = (props) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={props.fields.scroll_anchor_id}>
            <div className="w-100">
            <h2 className="mb-5">{props.fields.section_title}</h2>
            {props.fields.section_subtitle.length !== 0 && <div className="subheading mb-3">{props.fields.section_subtitle}</div>}
                {props.fields.education_items.map(education => <Education key={education.education_item_title} {...education}/>)}
            </div>
        </section>
    );
}

export default EducationSection;