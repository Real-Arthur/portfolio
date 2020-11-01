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
    <Grid id="aboutMe" className="aboutMeArea" container container direction="column" justify="center" alignItems="center">
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
      <Grid item>
      <Button href="#top" variant="outlined">Back to Top</Button>
      </Grid>
    </Grid>
  );
}

export default About;
