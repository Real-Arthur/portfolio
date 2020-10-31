import React, { useState } from 'react';
import { connect } from 'react-redux';

function Resume(props) {

  const [heading, setHeading] = useState('Resume');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default Resume;
