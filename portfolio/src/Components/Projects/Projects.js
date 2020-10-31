import React, { useState } from 'react';
import { connect } from 'react-redux';

function Projects(props) {

  const [heading, setHeading] = useState('Projects');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default Projects;