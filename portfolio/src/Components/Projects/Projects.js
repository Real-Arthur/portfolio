import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Link, Typography, Container, Card } from "@material-ui/core";
import MovieSagas from "../../Media/MovieSagas.jpg";
import CastWatch from "../../Media/CastWatch.mp4";


function Projects(props) {

  const [heading, setHeading] = useState(`Projects I've Worked On`);

  return (
    <Grid className="mainArea" container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h5">{heading}</Typography>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <a target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/movie-sagas">
              <Typography variant="h6">Movie Sagas</Typography>
            </a>
            
          <img style={{width: "400px", height: "300px"}} className="projectImage" src={MovieSagas} />
          
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <a target="_blank" rel="noreferrer" href="https://github.com/Real-Arthur/solo-project">
          <Typography variant="h6">Solo Project: Cast Watch</Typography>
        </a>
        <video width="400" controls>
          <source src={CastWatch} type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
}

export default Projects;