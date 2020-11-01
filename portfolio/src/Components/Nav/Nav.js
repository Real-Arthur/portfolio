import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Link, Typography } from "@material-ui/core";
import NavBio from "../NavBio/NavBio"

function NavRow(props) {
  const [heading, setHeading] = useState('Nav');

  return (
    <Grid className="navArea" container direction="row" justify="flex-end" alignItems="stretch">
      <Grid item>
        <Link href="/"><Button variant="contained" color="primary">Projects</Button></Link>
      </Grid>   
      <Grid item>
      <Link href="/resume"><Button variant="contained" color="primary">Resume</Button></Link>
      </Grid>
      <Grid item>
      <Button href="#aboutMe">About Me</Button>
      </Grid>
      <NavBio />
    </Grid>
  );
}

export default NavRow;
