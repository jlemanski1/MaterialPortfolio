import * as React from 'react';
import Skill from './Skill';


const SkillSection = (props) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={props.fields.scroll_anchor_id}>
        <div className="w-100">
          <h2 className="mb-5">{props.fields.skills_title}</h2>
          <div className="mb-5">{props.fields.skills_subtitle}</div>
            {props.fields.skill_type.map(skill => <Skill key={skill.skill_title} {...skill}/>)}
          </div>
          </section>

    );
}

export default SkillSection;