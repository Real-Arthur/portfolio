import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Link, Typography } from "@material-ui/core";
import arthur from "../../Media/ArthurCarson.jpg";

function NavBio(props) {

  const [heading, setHeading] = useState('Nav');

  return (
    <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
            <Typography>Arthur Carson</Typography>
        </Grid>
        <Grid item><Typography>Full Stack Software Developer</Typography></Grid>
        <Grid item><img className="me" src={arthur} /></Grid>
      </Grid>
      
  );
}

export default NavBio;