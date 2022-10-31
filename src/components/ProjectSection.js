import * as React from 'react';
import Project from './Project';

const ProjectSection = (props) => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flexgrow justify-content-center"
            id={props.fields.scroll_anchor_id}>
            <div className="w-100">
                <h2 className="mb-5">{props.fields.section_title}</h2>
                {props.fields.section_subtitle.length !== 0 && <div className="subheading mb-3">{props.fields.section_subtitle}</div>}
                {props.fields.project_items.map(project => <Project key={project.project_title} {...project}/>)}
            </div>
        </section>
    );
}

export default ProjectSection;