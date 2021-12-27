import React, {useContext}  from "react"
import {AuthContext} from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Header from "../../../components/Header/Header.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../../components/CustomButtons/Button.js";

import image from "../../../assets/img/bg0.jpg";
import profileImage from "../../../assets/img/faces/avatar.jpg";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export function SectionNavbars() {
  const classes = useStyles()
  const history = useNavigate()

  const auth = useContext(AuthContext)

  
  const isAuthenticated = auth.isAuthenticated

  const alertHandler = () => {
    alert(auth.isAuthenticated)
  }

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history('/auth')
  }
  return (
    <div className={classes.section}>
       <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
          
        >
          <Header
            brand="Электронная библиотека"
            color="rose"
            fixed
            leftLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/main"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Главная
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/news"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Новости
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/documents"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Документы
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/bookinfo"
                    className={classes.navLink}
                   // onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Книги
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/forums"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Обсуждения
                  </Button>
                </ListItem>
              </List>
            }
            rightLinks={
              <div>          
                <ListItem className={classes.listItem} onClick={alertHandler}> 
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    dropdownHeader="Dropdown Header"
                    buttonText={
                      <>
                        <Button color="transparent" >Профиль</Button>
                        <img
                        src={profileImage}
                        className={classes.img}
                        alt="profile"
                      />
                        
                      </>
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent",
                    }}
                    dropdownList={[
                      "Me",
                      "Settings and other stuff"
                    ]}
                  />
                </ListItem>
                { !auth.isAuthenticated && <ListItem className={classes.listItem}>
                  <Button
                    href="/auth"
                    className={classes.navLink}
                    color="transparent"
                  >
                    Вход
                  </Button>
                </ListItem>}
                <ListItem className={classes.listItem}>
                  <Button
                    href="/"
                    className={classes.navLink}
                    onClick={logoutHandler}
                    color="transparent"
                  >
                    Выход
                  </Button>
                </ListItem>
              </div>
            }
          />
          
          <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={6}>
                <div style={{
                      marginTop: '10rem'
                      }} >
                  <h1 className={classes.title} style={{color:"#DC143C"}}>Библиотека</h1>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify = "center">
            <GridItem xs={12} sm={12} md={4} lg={10} >
              <CustomInput
                    rose
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControl,
                    }}
                    inputProps={{                      
                      placeholder: "Поиск",                     
                      inputProps: {
                        "aria-label": "Search",
                        className: classes.searchInput,
                      },
                    }}
                    
              /></GridItem>
              <GridItem xs={12} sm={12} md={4} lg={2} >
                  <Button justIcon round color="rose"
                          href="/find"
                  >
                    <Search className={classes.searchIcon} />
                  </Button>
              </GridItem>
            </GridContainer>
            
            </div>
        </div>
      </div>
    </div>
  );
}
