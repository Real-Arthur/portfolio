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
import Nav from '../Nav/Nav';
import Resume from '../Resume/Resume';



function App() {
  return (
    <>
      <Nav />
      <Router>
      <Home />
      </Router>
      <About />
    </>
  );
}

export default App;
