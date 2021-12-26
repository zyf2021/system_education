import React, {useEffect, useState} from 'react'
import { useHttp } from '../hooks/http.hooks'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";
import TextField from "@material-ui/core/TextField";
import styles from "../assets/jss/material-kit-react/views/loginPage.js";

import image from "../assets/img/bg7.jpg";
import axios from 'axios'


const useStyles = makeStyles(styles);

export const RegisPage = () => {
  const [form, setForm] = useState({
      first_name: '', last_name:'', middle_name:'', email:'', password:''
  })
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  

  const changeHandler = event =>{
    setForm({ ...form, [event.target.name]: event.target.value})
  }
    
  const registerHandler = async () => {
    try {
      //const data = await request ('/api/auth/register', 'POST', {...form})
     const data = await axios.post('/auth/register', JSON.stringify({...form}), {headers:{ 'Content-Type': 'application/json',
      'Accept': 'application/json'}})
      console.log('Data', {...form})
      alert(data.data.message)
    } catch (e) {
      alert(e.response.data.message)     
    }
  }
  const classes = useStyles();

  
  return (
    <div>

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Регистрация</h3>                     
                  </CardHeader>
                  <CardBody>
                    <label>Имя</label>
                    <TextField
                      id="first_name"
                      name="first_name"
                      type = "text"
                      fullWidth
                      value = {form.first_name}
                      onChange = {changeHandler}
                    />
                    <label>Фамилия</label>
                    <TextField
                      id="last_name"
                      name="last_name"
                      fullWidth
                  value = {form.last_name}
                      onChange = {changeHandler}
                    />
                    <label>Отчество</label>
                    <TextField
                      id="middle_name"
                      name="middle_name"
                  value = {form.middle_name}
                      onChange = {changeHandler}
                      fullWidth
                    />
                    <label>Email</label>
                    <TextField
                      id="email"
                      name="email"
                      value = {form.email}
                      onChange = {changeHandler}
                      fullWidth
                    />
                    <label>Пароль</label>
                    <TextField
                      labelText="Пароль"
                      id="password"
                      name="password"
                      type="password"
                      value = {form.password}
                      onChange = {changeHandler}
                      fullWidth
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button 
                      simple color="primary" 
                      size="lg"
                      onClick = {registerHandler} 
                    >
                      Зарегистрироваться
                    </Button>
                    <a href = "/auth">Вход</a>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
      </div>
    </div>
  );
}
