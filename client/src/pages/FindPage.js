import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import Card from '../components/Card/Card'
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import Button from "../components/CustomButtons/Button.js";
import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.js";
import image from "../assets/img/bg.jpg";
import { cardTitle, cardLink, cardSubtitle } from "../assets/jss/material-kit-react.js";
import SectionCarousel from '../views/Components/Sections/SectionCarousel'
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from '../components/Grid/GridContainer';
import Paginations from "../components/Pagination/Pagination.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import CustomDropdown from '../components/CustomDropdown/CustomDropdown.js';
import Badge from '../components/Badge/Badge.js';
import { GridList } from '@material-ui/core';
import classNames from "classnames";
// material-ui components

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import styles from "../assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const useStyles = makeStyles(styles);


   

export const FindPage = () => {
    const [checked, setChecked] = React.useState([24, 22]);
    const classes = useStyles();
    const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
    const styles = {
        ...imagesStyles,
        cardTitle,
        cardLink,
        cardSubtitle
    };

    
    return(   
        <>
        <div className={classes.section}>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>
                <Card>
                    <CardBody>
                        
                        <CardHeader color="warning">Фильтр поиска книг</CardHeader>
                        <p>
                            <CustomInput
                                id="regular"
                                name = "name"
                                inputProps={{
                                    placeholder: "Название"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </p>
                        <p>                       
                            <CustomInput
                                id="regular"
                                name = "author"
                                inputProps={{
                                    placeholder: "Автор"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </p>
                        <p>                      
                            <CustomInput
                                id="regular"
                                name = "year"
                                inputProps={{
                                    placeholder: "Год издания"
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </p>
                        <p>
                            <CustomDropdown
                                buttonProps={{
                                    default: true,
                                    color: "primary"
                                }}
                                buttonText="Рейтинг"
                                dropdownList={[
                                "5",
                                "4",
                                "3",
                                "2",
                                "1",
                                {divider: true},
                                "Не важно",
                                ]}
                            />
                        </p>
                        <h6 className={classes.cardTitle}>Жанр</h6>
                        <div className={wrapperDiv}>
                            <FormControlLabel
                            control={
                                <Checkbox
                                name="fiction"
                                tabIndex={-1}
                                onClick={() => handleToggle(21)}
                                checkedIcon={<Check className={classes.checkedIcon} />}
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{ checked: classes.checked }}
                                />
                            }
                            classes={{ label: classes.label }}
                            label="Фантастика"
                            />
                        </div>
                        <div className={wrapperDiv}>
                            <FormControlLabel
                            control={
                                <Checkbox
                                name="roman"
                                tabIndex={-1}
                                onClick={() => handleToggle(21)}
                                checkedIcon={<Check className={classes.checkedIcon} />}
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{ checked: classes.checked }}
                                />
                            }
                            classes={{ label: classes.label }}
                            label="Роман"
                            />
                        </div>

                        <Button color="primary"
                                width="10rem">Найти</Button>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <GridContainer justify="center">
                    <GridItem xs={6} sm={6} md={6} justify = "center">
                        <Card style={{width: "25rem"}}
                        >
                            <CardBody>
                                <h6 className={classes.cardTitle}>Название книги</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Button color="primary">Просмотр</Button>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                         <Card style={{width: "25rem"}}
                        >
                            <CardBody>
                                <h6 className={classes.cardTitle}>Название книги</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Button color="primary">Просмотр</Button>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                         <Card style={{width: "25rem"}}
                        >
                            <CardBody>
                                <h6 className={classes.cardTitle}>Название книги</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Button color="primary">Просмотр</Button>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                         <Card style={{width: "25rem"}}
                        >
                            <CardBody>
                                <h6 className={classes.cardTitle}>Название книги</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Button color="primary">Просмотр</Button>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}> 
                        <Card style={{width: "25rem"}}
                        >
                            <CardBody>
                                <h6 className={classes.cardTitle}>Название книги</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Button color="primary">Просмотр</Button>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem></GridItem>
                    <Paginations 
                        pages={[
                            { text: "PREV" },
                            { text: 1 },
                            { text: 2 },
                            { active: true, text: 3 },
                            { text: 4 },
                            { text: 5 },
                            { text: "NEXT" }
                        ]}
                        color="info"
                    />
                </GridContainer>
            </GridItem>
        </GridContainer>

        </div>
            FindPage
        </>
    )
}