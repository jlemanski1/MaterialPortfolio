import * as React from 'react';

const Skill = (props) => {
    return (
        <ul className="list-inline">
          <li className="list-inline-item">
              <div className="subheading">{props.skill_title}:</div>
            </li>
            <li className="list-inline-item">
              <p>{props.skill_list}</p>
            </li>
          </ul>
    );
}

export default Skill;