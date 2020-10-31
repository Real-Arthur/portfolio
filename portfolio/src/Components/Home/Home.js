import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
    BrowserRouter as Router,
    Route, 
    Switch,
    Link
  } from "react-router-dom";
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects'

function Home(props) {

  const [heading, setHeading] = useState('Home');

  return (
      <Switch>
      <Route exact path="/">
        <Projects />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
    </Switch>
  );
}

export default Home;
