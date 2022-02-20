import React from 'react';
import {Grid,Box,Container, Link, Typography} from '@material-ui/core'

var style = {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "10%",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
 }



export const Footer = () => {
  return (
    <footer>
      <div style={phantom}/>
      <Container  style = {style}>
        <Grid container spacing={5} >
            <Grid items xs={12} sm={4} >
                
            </Grid>
            <Grid items xs={12} sm={4} >
                <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>Система обучения</Typography>
            </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
