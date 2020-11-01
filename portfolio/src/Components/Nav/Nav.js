import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Link, Typography } from "@material-ui/core";

function NavRow(props) {

  const [heading, setHeading] = useState('Nav');

  return (
    <Grid container direction="row" justify="flex-end" alignItems="stretch">
      <Typography>Arthur Carson
                  Full Stack Software Developer
      </Typography>
      <Grid item>
        <Link href="/"><Button variant="contained" color="primary">Home Button</Button></Link>
      </Grid>   
      <Grid item>
      <Link href="/resume"><Button variant="contained" color="primary">Resume Button</Button></Link>
      </Grid>  
    </Grid>
  );
}

export default NavRow;
