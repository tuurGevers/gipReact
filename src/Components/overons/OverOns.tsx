import React from 'react';
import {
    Typography,
    Grid,
    Box,
    Button,
    List,
    ListItem,
    Card,
    CardContent,
    TextField,
    createTheme,
    ThemeProvider
} from "@mui/material";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import SettingsIcon from '@mui/icons-material/Settings';
import JavascriptIcon from '@mui/icons-material/Javascript';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import kotlinLogo from "../../media/kotlinLogo.png";
import FlaskLogo from "../../media/FlaskLogo.png";
import ReactIcon from "../../media/ReactIcon.png";
import KtorLogo from "../../media/KtorLogo.png";
import nodejs from "../../media/nodejs-icon-1.jpg";
import python from "../../media/python-language_318-1898.webp";
import php from "../../media/php.jpg";


const OverOns = () => {
    return (
        <Box sx={{textAlign: "center", mt: "20px",}}>
            <Typography>Vader & zoon</Typography>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <img/>
                </Grid>
                <Grid item xs={12} md>
                    <Typography variant="body2">

                    </Typography>
                </Grid>
            </Grid>

            <Box>
                <Typography sx={{mb: "30px"}}>Tuur</Typography>
                <Grid container>

                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center"}}>
                        <Card sx={{width: "60%", mb: {xs: "20px", md: "0px"}}}>
                            <CardContent> <Typography>coding talen</Typography></CardContent>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <FreeBreakfastIcon/>
                                        java
                                    </ListItem>
                                    <ListItem>
                                        <img src={kotlinLogo} width="20px"/>
                                        kotlin
                                    </ListItem>
                                    <ListItem>
                                        <SettingsIcon/>
                                        rust
                                    </ListItem>
                                    <ListItem>
                                        <JavascriptIcon/>
                                        javascript/typescript
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid item xs={12} md sx={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                        <Card sx={{width: "60%"}}>
                            <CardContent>
                                <Typography>frameworks</Typography>
                            </CardContent>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <img src={FlaskLogo} width="30px" style={{marginRight: "3px"}}/>
                                        flask(python)
                                    </ListItem>
                                    <ListItem>
                                        <img src={ReactIcon} width="30px" style={{marginRight: "3px"}}/>
                                        react(js/ts)
                                    </ListItem>
                                    <ListItem>
                                        <img src={KtorLogo} width="25px" style={{marginRight: "3px"}}/>
                                        ktor(kotlin)
                                    </ListItem>
                                    <ListItem>
                                        <img src={nodejs} width="25px" style={{marginRight: "3px"}}/>
                                        nodejs(js)
                                    </ListItem>
                                    <ListItem>
                                        <RocketLaunchIcon/>
                                        rocket(rust)
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>

                    </Grid>

                </Grid>


            </Box>

            <Box sx={{mt: "30px"}}>
                <Typography>Dimitri</Typography>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center"}}>
                        <Card sx={{width: "60%", mb: {xs: "20px", md: "0px"}}}>
                            <CardContent> <Typography>coding talen</Typography></CardContent>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <FreeBreakfastIcon/>
                                        java
                                    </ListItem>
                                    <ListItem>
                                        <img src={python} width="25px" height="25px"/>
                                        python
                                    </ListItem>
                                    <ListItem>
                                        <img src={php} width="20px"/>
                                        php
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid item xs={12} md sx={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                        <Card sx={{width: "60%"}}>
                            <CardContent>
                                <Typography>frameworks</Typography>
                            </CardContent>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <img src={FlaskLogo} width="30px" style={{marginRight: "3px"}}/>
                                        flask(python)
                                    </ListItem>
                                    <ListItem>
                                        <img src={ReactIcon} width="30px" style={{marginRight: "3px"}}/>
                                        react(js/ts)
                                    </ListItem>
                                    <ListItem>
                                        <img src={KtorLogo} width="25px" style={{marginRight: "3px"}}/>
                                        ktor(kotlin)
                                    </ListItem>
                                    <ListItem>
                                        <img src={nodejs} width="25px" style={{marginRight: "3px"}}/>
                                        nodejs(js)
                                    </ListItem>
                                    <ListItem>
                                        <RocketLaunchIcon/>
                                        rocket(rust)
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>

                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default OverOns;