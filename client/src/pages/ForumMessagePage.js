import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'
// material-ui components
import { makeStyles } from "@material-ui/core/styles"
// core components
import Card from "../components/Card/Card.js"
import CardBody from "../components/Card/CardBody.js"
import CardHeader from "../components/Card/CardHeader.js"
import CardFooter from "../components/Card/CardFooter.js"
import Button from "../components/CustomButtons/Button.js"
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import { AddMessage } from "../components/AddMessage.js"
import { MessagesList } from "../components/MessagesList.js";

import { cardTitle } from "../assets/jss/material-kit-react.js";
import { TextField } from "@material-ui/core";
import axios from "axios"

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

export const ForumMessagePage = () => {
    const forumId = useParams().id
    const [forum, setForum] = useState([])

    const classes = useStyles();

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
        <GridContainer justify="center">
            <Card className={classes.textCenter} style={{width: "100rem"}}>
            <CardHeader color="info"></CardHeader>
                <CardBody>
                        <h4 className={classes.cardTitle}>{forum.name}</h4>
                        <p>
                          {forum.description}
                        </p>
                        <Button round color="primary">Присоединиться</Button>
                        <Button round color="warning" style = {{marginLeft:"3rem"}}>Подписаться на обновления</Button>
                        
                </CardBody>
            <CardFooter className={classes.textMuted}>
                Последнее сообщение 2 days ago
            </CardFooter>
            </Card>
        </GridContainer>
        <GridContainer>
          <GridItem xs={10} sm={10} md={6} lg={5}>
            <MessagesList/>
          </GridItem>
          <GridItem xs={10} sm={10} md={6} lg={5}>
            <AddMessage/>
          </GridItem>
        </GridContainer>    
    </>
  );
}
/*<MessagesList/>
        <AddMessage/>*/