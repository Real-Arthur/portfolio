import React, { useState } from 'react';
import { connect } from 'react-redux';


function Nav(props) {

  const [heading, setHeading] = useState('Nav');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default Nav;
