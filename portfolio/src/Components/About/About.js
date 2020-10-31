import React, { useState } from 'react';
import { connect } from 'react-redux';


function About(props) {

  const [heading, setHeading] = useState('About');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default About;
