import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Card, CardHeader, CardContent, CardActions, Button} from "@material-ui/core";
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
    <Container maxWidth='md'>
      <Grid container spacing={2} maxWidth='100%'>
        <Grid item xs={12} md={12} lg={12}>
          <Box>Заголовок</Box>
        </Grid>
        <Grid item xs = {12}>
          <Card>
            <CardHeader
            title="Название форума"
            subheader="dd/mm/yyyy"
            />
            <CardContent>Описание</CardContent>
            <CardActions>
              <Button size="large">Перейти</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs = {12}>
          <Card>
            <CardHeader
            title="Название форума"
            subheader="dd/mm/yyyy"
            />
            <CardContent>Описание</CardContent>
            <CardActions>
              <Button size="large">Перейти</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>

  );

}

