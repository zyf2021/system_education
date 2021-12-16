import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import Card from '../components/Card/Card'
import CardBody from "../components/Card/CardBody.js";
import Button from "../components/CustomButtons/Button.js";
import Paginations from "../components/Pagination/Pagination.js";
import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.js";
import image from "../assets/img/bg.jpg";
import image1 from "../assets/img/bg.jpg";
import image2 from "../assets/img/bg2.jpg";
import image3 from "../assets/img/bg3.jpg";
import { cardTitle } from "../assets/jss/material-kit-react.js";
import SectionCarousel from '../views/Components/Sections/SectionCarousel'
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from '../components/Grid/GridContainer';
const styles = {
    ...imagesStyles,
    cardTitle,
  };
const useStyles = makeStyles(styles); 
export const DocumentsPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 12200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    const classes = useStyles();
    return(   
        <>
        <div >
        <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={6} lg={8}>
            <Card>
                <h2>Документы</h2>
            </Card>
            </GridItem>
        </GridContainer> 
        <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={6} lg={3}> 
                <Card style={{width: "20rem", marginLeft:'5rem'}}>
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
            <GridItem xs={10} sm={10} md={6} lg={3}> 
                <Card style={{width: "20rem", marginLeft:'3rem'}}>
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
            <GridItem xs={10} sm={10} md={6} lg={3}> 
                <Card style={{width: "20rem", marginLeft:'2rem'}}>
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
            <GridItem xs={10} sm={10} md={6} lg={3}> 
                <Card style={{width: "20rem", marginLeft:'5rem'}}>
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
            <GridItem xs={10} sm={10} md={6} lg={3}> 
                <Card style={{width: "20rem", marginLeft:'3rem'}}>
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
            <GridItem xs={10} sm={10} md={6} lg={3}> 
                <Card style={{width: "20rem", marginLeft:'2rem'}}>
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
            <Paginations 
                pages={[
                    { text: "PREV" },
                    { text: 1 },
                    { text: 2 },
                    { active: true, text: 3 },
                    { text: 4 },
                    { text: 5 },
                    { text: "NEXT" }
                    ]}
                color="info"            
             />
        </GridContainer>

        </div> 
        </>
    )
}