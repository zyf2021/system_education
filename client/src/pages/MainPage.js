import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Button, Card, CardMedia, CardContent, Container, Typography, CardActions} from '@mui/material'
import {Stepper} from '../components/Stepper'
import {SearchBar} from '../components/SerachBar'
import { Grid } from '@mui/material'
export const MainPage = () => {

    return(
        <>
        <Container maxWidth="md" justify="center">
            <Grid container justify="center" spacing={2}>
                <Grid item md = {12} xl = {12}>
                    <Stepper/>
                </Grid>
                <Grid item sm = {12} md = {12} xl = {12} >       
                    <SearchBar/>
                </Grid>
                <Grid item sm ={12} md = {12} xl = {12} >       
                    <Typography variant='h6' margin={'20px'}>
                        Рекомендованные курсы
                    </Typography>
                </Grid>
                <Grid item sm ={4} md = {4} xl = {4} >       
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image = "https://source.unsplash.com/random"
                            alt="image"
                        />
                        <Typography variant="h5" component="div">
                            Веб-разработчик
                        </Typography>
                        <CardContent>Незаменимый специалист, который создает сайты и продумывает их логику</CardContent>
                        <CardActions>
                            <Button sx={{color:"blue"}} size="small">Узнать больше</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm ={4} md = {4} xl = {4} >       
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image = "https://source.unsplash.com/random"
                            alt="image"
                        />
                        <Typography variant="h5" component="div">
                            Веб-разработчик
                        </Typography>
                        <CardContent>Незаменимый специалист, который создает сайты и продумывает их логику</CardContent>
                        <CardActions>
                            <Button sx={{color:"blue"}} size="small">Узнать больше</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm ={4} md = {4} xl = {4} >       
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image = "https://source.unsplash.com/random"
                            alt="image"
                        />
                        <Typography variant="h5" component="div">
                            Веб-разработчик
                        </Typography>
                        <CardContent>Незаменимый специалист, который создает сайты и продумывает их логику</CardContent>
                        <CardActions>
                            <Button sx={{color:"blue"}} size="small">Узнать больше</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <>Главная страница</> 
        </> 
    )
}