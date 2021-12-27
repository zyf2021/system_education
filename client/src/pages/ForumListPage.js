import React, { useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom'
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";
import Button from "../components/CustomButtons/Button.js";
import GridItem from "../components/Grid/GridItem.js";
import { cardTitle } from "../assets/jss/material-kit-react.js";
import GridContainer from "../components/Grid/GridContainer.js";
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

    const classes = useStyles();
  return (
    <GridContainer justify="center">
    {forums && forums.map((forum, index) => (
      <GridItem xs={10} sm={10} md={6} lg={8} style = {{marginTop:"3rem"}}>
        <Card className={classes.textCenter + (index === currentIndex ? "active" : "")} 
              onClick={() => setActiveForum(forum, index)}
              key={index} 
        >
            <CardHeader color="info">Обсуждение</CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>{forum.name}</h4>
              <p>
                {forum.description}
              </p>
              <Button color="primary"
                      onClick = {() => {
                        navigate(`/forums/${forum.id}`,{ replace: true })
                      }} 
              >
                Подробнее
              </Button>
            </CardBody>
            <CardFooter className={classes.textMuted}>
              {forum.updatedAt}
            </CardFooter>
        </Card>
      </GridItem>
    ))}
    </GridContainer>    
  );

}
/**/
/*<div className="col-md-6">
        <h4>Tutorials List</h4>

        <ul >
          {forums &&
            forums.map((forum, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                //onClick={() => setActiveTutorial(forum, index)}
                key={index}
              >
                {forum.name}
              </li>
            ))}
        </ul>

       
      </div>*/
