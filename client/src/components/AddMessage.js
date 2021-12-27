import React, { useState, useContext, useEffect } from "react"
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

export const AddMessage = () => {
    const {userId} = useContext(AuthContext)
    const forumId = useParams().id
    const initialMessageState = {
        id:null,
        userId:userId,
        forumId:forumId,
        text: "",
    }

    const [message, setMessage] = useState({
        id:null,
        userId:userId,
        forumId:forumId,
        text: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const changeHandler = event => {
        //setMessage({ ...message, [event.target.name]: event.target.value})
        const {name, value} = event.target
        setMessage({ ...message, [name]:value})
      }

    const saveMessage = async () => {
        /*var data = {
            text:message.text
        }*/
        const data = await axios.post('/forums/createmessage', JSON.stringify({...message}), {headers:{ 'Content-Type': 'application/json',
        'Accept': 'application/json'}})
        console.log(data)
        setSubmitted(true)
    }

    const newMessage = () => {
        setMessage(initialMessageState);
        setSubmitted(false);
    }

    const classes = useStyles();
  return (
    <>
    <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={6} lg={5}>
        <form className={classes.form}>
        {submitted? (
            <Card className={classes.textRight} style={{width: "45rem"}}>
                <CardBody>
                <h4 className={classes.cardTitle, classes.textRight}>You submitted successfully!</h4>
                <Button onClick={newMessage}>
                    Добавить
                </Button>
                </CardBody>
            </Card>
        ) : (
            <Card className={classes.textRight} style={{width: "45rem"}}>
                    <CardBody>
                    <h4 className={classes.cardTitle, classes.textRight}>Ваше сообщение</h4>
                    <TextField 
                        fullWidth 
                        label="Текст сообщения"
                        //value={message.text}
                        onChange={changeHandler}
                        type="text"
                        id="title"
                        name="title"
                    >   
                    </TextField>
                    <Button 
                        round 
                        color="primary"
                        onClick={saveMessage}
                    >Отправить</Button>
                    </CardBody>
            </Card>
        )   
        } </form>  
        </GridItem>
    </GridContainer>
</>
  );

}