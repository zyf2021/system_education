import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
//import { Document, Page} from 'react-pdf'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Card from '../components/Card/Card'
import CardBody from '../components/Card/CardBody'
import CardHeader from '../components/Card/CardHeader'
import CardFooter from "../components/Card/CardFooter.js";
import Star from '@material-ui/icons/Star';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Button from '../components/CustomButtons/Button.js';
import { cardTitle, cardLink, cardSubtitle } from "../assets/jss/material-kit-react.js";
import file from '../assets/docs/kp.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
import styles from "../assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

import { makeStyles } from "@material-ui/core/styles"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const card_styles = {
    cardTitle,
    cardLink,
    cardSubtitle
  };
const useCardStyles = makeStyles(card_styles)

export const DocumentViewPage = () => {
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
    return(   
        <div>
            <GridContainer justify="center">
                    <GridItem xs={10} sm={10} md={10} lg ={5}>
                    <Card>
                        <CardHeader>
                            <h3 className={card_classes.cardTitle}>Название документа</h3>
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
    )
}