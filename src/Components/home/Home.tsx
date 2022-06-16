import React, {useEffect, useState} from 'react';
import {Typography, Grid, Box, ThemeProvider, createTheme, Paper, Card, CardMedia, CardContent} from "@mui/material"
import reactImg from "../../media/reactjs.webp"
import node from "../../media/nodejs.png"
import EndCard from "./EndCard";
import Packages from "./Packages";
import Faq from "./Faq";
import Axios, {AxiosResponse} from "axios";

const theme = createTheme({
    typography: {
        h4: {
            fontFamily: 'Montserrat',
            textTransform: 'none',
            fontSize: 24,
            textAlign: "center",
        },
        body1: {
            marginLeft: "auto",


        },


    },
});

type props = {
    light:boolean,
}

const Home = (props:props) => {

    const [packages, setPackages] = useState([])
    const [faq, setFaq] = useState([])

    function getData() {
        Axios.get('http://localhost:3001/api/getpackages').then((response: AxiosResponse) => {
            console.log(response.data)
            setPackages(response.data)
        })
        Axios.get('http://localhost:3001/api/getfaq').then((response: AxiosResponse) => {
            console.log(response.data)
            setFaq(response.data)
        })

    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: "flex", justifyContent: "center", pt: "20px"}}>
                <Typography variant="h4">Van persoonlijk portfolio tot grote buissiness wij maken een website voor jouw
                    op maat.</Typography>
            </Box>
            <Box paddingTop={4}>
                <Typography variant="h4">jouw website</Typography>

                <Paper sx={{
                    backgroundColor: "transparent",
                    width: "95%",
                    margin: "auto",
                    mt: "20px",
                }} className="paperSmall">
                    <Grid container spacing={1}
                          sx={{width: "95%", margin: "auto", height: "470px", alignContent: "center"}}>
                        <Grid item xs={12} md={6}>
                            <EndCard img={reactImg} text="front-end" width="100%" height="300px" id={0}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <EndCard img={node} text="back-end" width="auto" height="300px" id={1}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Box paddingTop="20px" paddingBottom="30px">
                <Typography variant="h4">onze pakketten</Typography>
            </Box>
            <Paper sx={{
                backgroundColor: "transparent",
                width: "95%",
                margin: "auto",
                mt: "20px",
            }} className="pakketPaper">
                <Packages packages={packages} light={props.light}/>
            </Paper>
            <Box paddingTop="30px" paddingBottom="30px">
                <Typography variant="h4">FAQ</Typography>
            </Box>
            <Paper sx={{
                backgroundColor: "transparent",
                width: "95%",
                margin: "auto",
                mt: "20px",
            }}>

                <Faq faq={faq}/></Paper>


        </ThemeProvider>

    );
};

export default Home;
