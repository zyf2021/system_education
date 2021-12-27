import React, { useState, useEffect, useContext } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";
import Button from "../components/CustomButtons/Button.js";
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

import { cardTitle } from "../assets/jss/material-kit-react.js";
import { TextField } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';
import axios from "axios";



const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: "#6c757d"
  },
};

const useStyles = makeStyles(styles);

export const MessagesList = () => {
    const {userId} = useContext(AuthContext)
    const forumId = useParams().id

    const [messages, setMessages] = useState([])
    const [currentMessages, setCurrentMessages] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)

    const [userName, setUserName] = useState()
    //

    useEffect(() => {
        retrieveMessages()
        getUserName()
      }, [])
    
    const getUserName = async () =>{
        try{
            const data = await axios.get(`/users/${userId}`, JSON.stringify({...userName}), {headers:{ 'Content-Type': 'application/json',
                'Accept': 'application/json'}})
            setUserName(data.data.first_name)
            console.log(data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    const retrieveMessages = async () => {
        try {
            const data = await axios.get(`/forums/${forumId}/listmessages`, JSON.stringify({...messages}), {headers:{ 'Content-Type': 'application/json',
                'Accept': 'application/json'}})
            console.log(data.data)
            setMessages(data.data)
            //console.log("Success")
        } catch (e) {
            console.log(e)
        }
    }

    const refreshList = () => {
        retrieveMessages()
        setCurrentMessages(null)
        setCurrentIndex(-1)
    }



    const classes = useStyles();
  return (
    <>
    <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={6} lg={5}>
            {messages && messages.map((message,index)=>(
                <Card className={classes.textRight + (index === currentIndex ? "active" : "")} 
                      style={{width: "45rem"}}
                      //onClick={() => setActiveMessage(message, index)}
                      key={index}>
                    <CardBody>
                    <h4 className={classes.cardTitle, classes.textRight}>{userName}</h4>
                    <p>
                        {message.text}
                    </p>
                    <Button justIcon round color="primary"><Favorite/></Button>
                    </CardBody>
                    <CardFooter>
                        {message.createdAt}
                    </CardFooter>
            </Card>
            ))}
        </GridItem>
    </GridContainer>
</>
  )
}