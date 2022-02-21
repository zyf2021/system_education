import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Button, Card, CardHeader, CardContent, CardActionArea, Grid,IconButton, Box, Container, Link, Typography, CardActions, CardMedia, Slider} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Menu from '@material-ui/icons/Menu'
import Questions from '@material-ui/icons/QuestionAnswerOutlined'
import Bookmark from '@material-ui/icons/Bookmark'
import Setting from '@material-ui/icons/Settings'
import ArrowRight from '@material-ui/icons/ArrowRight'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import file from '../assets/docs/js.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    
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
    
    return(   
        <Container maxWidth="lg" justify="center">
            <Grid justify="center" sm ={12} md = {10} lg ={8}>
                <Card>
                    <CardActions disableSpacing>
                    <IconButton aria-label="questions">
                        <Questions />
                    </IconButton>
                    <IconButton aria-label="menu">
                        <Menu />
                    </IconButton>
                    <IconButton aria-label="Bookmark">
                        <Bookmark />
                    </IconButton>
                    <IconButton aria-label="Setting">
                        <Setting />
                    </IconButton>
                    </CardActions>
                    <CardMedia>
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </CardMedia>
                    <CardActionArea>
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
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                            <div>
                            <p>
                            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                            </p>
                        </div>
                    </CardActionArea>
                </Card>
            </Grid>
        </Container>
    )
}