import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';
import More from './More'
const About = ({avatar, name, profession, bio, address, social, masinormacion}) => {

  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <Social social={social} />
      
    </div>
  );
};

export default About;
