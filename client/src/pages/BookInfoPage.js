import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Card from '../components/Card/Card'
import CardBody from '../components/Card/CardBody'
import CardHeader from '../components/Card/CardHeader'
import CardFooter from "../components/Card/CardFooter.js";
import { cardTitle, cardLink, cardSubtitle } from "../assets/jss/material-kit-react.js";
import CustomDropdown from '../components/CustomDropdown/CustomDropdown.js';
import Star from '@material-ui/icons/Star';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Button from '../components/CustomButtons/Button.js';
import file from '../assets/docs/js.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
import styles from "../assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

import { makeStyles } from "@material-ui/core/styles"

import image from "../assets/img/examples/clem-onojegaw.jpg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    
const useStyles = makeStyles(styles);
const card_styles = {
    cardTitle,
    cardLink,
    cardSubtitle
  };
const useCardStyles = makeStyles(card_styles)


export const BookInfoPage = () => {
    const [numPages, setNumPages] = useState()
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({numPages}) =>{
        setNumPages(numPages)
        setPageNumber(1)
    }
    
    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    const previousPage = () => {
        changePage(-1)
    }

    const nextPage = () => {
        changePage(1);
      }
    const card_classes = useCardStyles();
    const classes = useStyles();
    return(   
        <>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={4} sm={3} md={2} lg={1}>
                        <CustomDropdown
                                drodowm
                                dropdownHeader="Dropdown header"
                                buttonText="Цвет фона"
                                buttonProps={{
                                    round: true,
                                    color: "info"
                                }}
                                dropdownList={[
                                    "Action",
                                    "Another action",
                                    "Something else here",
                                    {divider: true},
                                    "Separated link",
                                    {divider: true},
                                    "One more separated link",
                                ]} 
                        />  
                    </GridItem>
                    <GridItem xs={4} sm={3} md={2} lg={1}>
                        <Button color="primary" round><Star /> Закладка</Button>
                    </GridItem>
                    </GridContainer>
                <GridContainer justify="center">
                    <GridItem xs={10} sm={10} md={10} lg ={5}>
                    <Card>
                        <CardHeader>
                            <h3 className={card_classes.cardTitle}>Современный JS для нетерпеливых</h3>
                            
                        </CardHeader>
                        <CardBody>
                            <Document
                                file={file}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={pageNumber} />
                            </Document>
                        
                        </CardBody>
                        <CardFooter>
                            <Button 
                                justIcon 
                                round 
                                color="primary" 
                                size = "lg" 
                                disabled={pageNumber <= 1}
                                onClick={previousPage}
                            >
                                <ArrowLeft/> 
                            </Button>
                            <Button 
                                justIcon 
                                round 
                                color="primary" 
                                size = "lg"
                                disabled={pageNumber >= numPages}
                                onClick={nextPage}
                            >
                                <ArrowRight/> 
                            </Button>
                            <div>
                            <p>
                            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                            </p>
                        </div>
                        </CardFooter>
                    </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </>
    )
}