import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
   faPython,
  faGit,
  faBitbucket,
  faJira,
  faFigma,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
const Skills = (props) => {
  const mySkills = (
    <div>
      {props.skills.map((skll) =>
        <div key={skll.name}>
          <li>{skll.name}</li>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <h2>SKILLS</h2>
      {mySkills}

      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faHtml5} /> 
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faCss3} /> 
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faJs} />
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faNodeJs}/>
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faReact} />
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faPython} />
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faGit} />
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faBitbucket} />
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faJira} />
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faFigma} />
      <FontAwesomeIcon  style = {{fontSize: '3em',marginLeft: '2rem'}} icon = {faSass} />

    </div>
  )
};

export default Skills;
