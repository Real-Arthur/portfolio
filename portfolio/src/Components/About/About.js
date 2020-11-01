import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import liverpool from "../../Images/liverpool.jpg";
import mnufc from "../../Images/mnufc.jpg";
import harrysally from "../../Images/harrysally.jpg";
import johnwick3 from "../../Images/johnwick3.jpg";
import pulpfiction from "../../Images/pulpfiction.jpg";
import burningwhite from "../../Images/burningwhite.jpg";
import dance from "../../Images/dance.jpg";
import notw from "../../Images/notw.jpg";
import wheel13 from "../../Images/wheel13.jpg";

import "./About.css"

function About(props) {

  const [heading, setHeading] = useState('About');

  return (
    <Grid container container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>A BIT ABOUT ME</Typography>
      </Grid>
      <Grid item>
        <Typography>When I'm not scoping, coding, and styling you can find me:</Typography>
      </Grid>
      <Grid item>
        <Typography>watching movies</Typography>
        <img src={harrysally} />
        <img src={johnwick3} />
        <img src={pulpfiction} />
      </Grid>
      <Grid item>
        <Typography>cheering my favorite soccers teams</Typography>
        <Typography> Liverpool FC and Minnesota United</Typography>
        <img src={liverpool} />
        <img src={mnufc} />
      </Grid>
      <Grid item>
        <Typography>or reading something weird</Typography>
        <img src={burningwhite} /> 
        <img src={dance} /> 
        <img src={notw} /> 
        <img src={wheel13} /> 
      </Grid>
    </Grid>
  );
}

export default About;
