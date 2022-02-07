import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'
// material-ui components
import { TextField } from "@material-ui/core";
import axios from "axios"




export const ForumMessagePage = () => {
    const forumId = useParams().id
    const [forum, setForum] = useState([])



    useEffect(() => {
      getForum()
    }, [])

    const getForum = async () => {
      try{
        const data = await  axios.get(`/forums/${forumId}`, JSON.stringify({...forum}), {headers:{ 'Content-Type': 'application/json',
        'Accept': 'application/json'}})
        console.log(data)
        setForum(data.data)
      }
      catch(e){
        console.log(e)
      }
  }



  return (
    <>
       Форум
    </>
  );
}
