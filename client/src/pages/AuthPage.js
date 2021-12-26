import React, {useState, useContext} from 'react'
import {useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";
import TextField from "@material-ui/core/TextField"
import axios from 'axios'

import styles from "../assets/jss/material-kit-react/views/loginPage.js";
import image from "../assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export function AuthPage(props) {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const classes = useStyles()


  const [form, setForm] = useState({
    email:'', password:''
  })

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  
  
  const changeHandler = event =>{
    setForm({ ...form, [event.target.name]: event.target.value})
  }

  const loginHandler = async () => {
    try {
      const data = await axios.post('/auth/login', JSON.stringify({...form}), {headers:{ 'Content-Type': 'application/json',
      'Accept': 'application/json'}})
      console.log('Data', {...form})
      auth.login(data.data.token, data.data.userId)
      
      alert(data.data.message + ' ' + data.data.userId)
      navigate('/main',{ replace: true })
    } catch (e) {
      alert(e.response.data.message)     
    }
  }

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
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Авторизация</h3>                     
                  </CardHeader>
                  <CardBody>
                  <label>Email</label>
                    <TextField
                      labelText="Email"
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
                      color="primary" 
                      size="lg" 
                      onClick = {loginHandler}>
                      Войти
                    </Button>
                    <Button 
                      href = "/regis"
                      color="transparent">Регистрация</Button>
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
