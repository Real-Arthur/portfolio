import React from "react"
import './App.css';
import { 
  BrowserRouter as Router,
  Route, 
  Switch,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import About from '../About/About';
import Home from '../Home/Home';
import NavRow from '../Nav/Nav';
import Resume from '../Resume/Resume';
import { Box } from "@material-ui/core";



function App() {
  return (
    <>
    <Box className="navBar">
      <NavRow />
    </Box>
    <Box>
      <Router>
      <Home />
      </Router>
    </Box>
    <Box className="about">
      <About />
    </Box>
    </>
  );
}

export default App;
