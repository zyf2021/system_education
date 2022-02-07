import React, { useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom'
import axios from "axios";


export const ForumListPage = () => {
    const navigate = useNavigate()
    const [forums, setForum] = useState([])
    const [currentForum, setCurrentForum] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)

    useEffect(() => {
      retrieveForums()
    }, [])

    const retrieveForums = async () => {
        try{
          const data = await  axios.get('/forums/list', JSON.stringify({...forums}), {headers:{ 'Content-Type': 'application/json',
          'Accept': 'application/json'}})
          console.log(data)
          setForum(data.data)
        }
        catch(e){
          console.log(e)
        }
    }
  
 
    const setActiveForum = (forums, index) => {
      setCurrentForum(forums);
      setCurrentIndex(index);
    }

    const joinHandler = async () => {
      //navigate(`/forums/${forum.id}`,{ replace: true })
    }

  return (
      <>Список форумов</>
  );

}

