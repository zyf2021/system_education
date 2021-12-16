import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import Card from '../components/Card/Card'
import CardBody from "../components/Card/CardBody.js";
import Button from "../components/CustomButtons/Button.js";
import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.js";
import image from "../assets/img/bg.jpg";
import { cardTitle } from "../assets/jss/material-kit-react.js";
import SectionCarousel from '../views/Components/Sections/SectionCarousel'
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from '../components/Grid/GridContainer';
const styles = {
    ...imagesStyles,
    cardTitle,
  };
const useStyles = makeStyles(styles);  

export const MainPage = () => {
    const classes = useStyles();
    return( 
        <div className = "center">
        <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={6} lg={4}>
            <Card style={{width: "30rem"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={image}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={10} sm={10} md={6} lg={4}> 
            <Card style={{width: "30rem"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={image}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        
        </GridContainer> 
        <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={6} lg={4}>
            <Card style={{width: "30rem"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={image}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={10} sm={10} md={6} lg={4}> 
            <Card style={{width: "30rem"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={image}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        
        </GridContainer> 
        </div> 
    )
}