import React from 'react';
import {Grid,Box,Container, Link, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { maxWidth } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  footer:{
    background: "lightblue",
    borderTop: "1px solid #E7E7E7",
    fontcolor: "white",
    marginTop: '1%',
    maxWidth:"100%",
    textAlign: "center",
  }
}))

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container >
        <Typography align="center" gutterBottom>
          Система обучения
        </Typography>
      </Container>
    </footer>
  );
}
