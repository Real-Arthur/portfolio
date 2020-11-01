import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, List, ListItem, Typography } from "@material-ui/core";
import liverpool from "../../Media/liverpool.jpg";
import mnufc from "../../Media/mnufc.jpg";
import harrysally from "../../Media/harrysally.jpg";
import johnwick3 from "../../Media/johnwick3.jpg";
import pulpfiction from "../../Media/pulpfiction.jpg";
import burningwhite from "../../Media/burningwhite.jpg";
import dance from "../../Media/dance.jpg";
import notw from "../../Media/notw.jpg";
import wheel13 from "../../Media/wheel13.jpg";

import "./About.css"

function About(props) {

  const [heading, setHeading] = useState('About');

  return (
    <Grid id="aboutMe" className="aboutMeArea" container direction="column" justify="space-between" alignItems="center">
      <Grid container direction="row" justify="center">
        <Grid item>
          <Typography variant="h2">A BIT ABOUT ME</Typography>
        <Grid item>
          <Typography variant="h5">When I'm not scoping, coding, and styling you can find me:</Typography>
        </Grid>
      </Grid>
      </Grid>

      <Grid container direction="row" justify="space-around">
      
      <Grid item>
        <Typography variant="h6">Catching A Flick</Typography>
        <img src={harrysally} />
        <img src={johnwick3} />
        <img src={pulpfiction} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Cheering my favorite soccers teams</Typography>
        <Typography variant="h6"> Liverpool FC and Minnesota United</Typography>
        <img src={liverpool} />
        <img src={mnufc} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Reading something nerdy</Typography>
        <img src={burningwhite} /> 
        <img src={dance} /> 
        <img src={notw} /> 
        <img src={wheel13} /> 
      </Grid>
      </Grid>

      <Grid container justify="center">
       <Grid item>
      <Button href="#top" variant="outlined">Back to Top</Button>
      </Grid> 
      </Grid>

    </Grid>
  );
}

export default About;
