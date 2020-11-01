import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Link, Typography } from "@material-ui/core";

function Resume(props) {

  const [heading, setHeading] = useState('Resume');

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
      <Typography variant="h3">{heading}</Typography>
      </Grid>
      <Typography variant="h5">SKILLS</Typography>
      <Typography variant="subtitle1">
        HTML, CSS, Javascript, React, Redux.js, jQuery, Bootstrap, Material UI, Ajax, Axios, PostgreSQL, Node.js, GitHub
      </Typography>
      <Typography variant="h5">
        EXPERIENCE
      </Typography>
      <Typography variant="subtitle1">
          Prime Digital Academy, Minneapolis, MN - Full Stack Software Development Student
          June 2020 - PRESENT 
      </Typography>
      <Typography>
          Solo Project: Cast Watch
          ● Built an app to make it easier to look up a movie or actor/actress to find out if anyone in the movie has been in anything else the user has seen
          ● Answers that pesky question of “What have I seen them in?” that people get when watching a movie
          ● Built accessing a third-party database to scan the cast of a movie and to scan the filmography of an actor/actress. Comparing that data to a user built personal library to find matches of films and actors/actresses
          ● Technologies Used: PostgresQL, APIs, Redux.js, Axios, React, Node.js, Material UI, Jquery, Javascript, CSS, HTML
      </Typography>
      <Typography>
          Moto-I, Minneapolis, MN - Food Server
          August 2019 - July 2020
      </Typography>
      <Typography>
          ● Delivered a high level of customer service to ensure excellent experience
          ● Collaborated with a diverse group of team members, about 20-25 people, in different departments on a day-to-day basis
          ● Maintained composure and managed time during high volume service while adapting to changing circumstances
      </Typography>
      <Typography>
          Lake & Irving, Minneapolis, MN - Food Server
          August 2018- July 2020
      </Typography>
      <Typography>
          ● Delivered a high level of customer service to ensure excellent experience
          ● Collaborated with a diverse group of team members, about 10-15 people, in different departments on a day-to-day basis
          ● Maintained composure and managed time during high volume service while adapting to changing circumstances
      </Typography>
      <Typography>
          Vagabond, Milwaukee, WI- Food Server/Expo
          August 2015- July 2018
      </Typography>
      <Typography>
          ● Delivered a high level of customer service to ensure excellent experience
          ● Collaborated with a diverse group of team members in different departments on a day-to-day basis
          ● Maintained composure and managed time during high volume service while adapting to changing circumstances
      </Typography>
      <Typography>
        EDUCATION
        Prime Digital Academy, Minneapolis, MN - Degree: Full Stack Software Engineering Certification
        July 2020 - November 2020
      </Typography>
      <Typography>
        Accelerated, immersion full stack software program with highlights of diversity/inclusion education, career development, and public speaking. To change career trajectories and teach the most practical, ubiquitous technology and techniques.
      </Typography>
    </Grid>
  );
}

export default Resume;
