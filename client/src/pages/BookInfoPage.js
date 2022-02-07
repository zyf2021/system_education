import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
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
        <>
            Читалка
        </>
    )
}