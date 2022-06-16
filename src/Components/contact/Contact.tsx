import React from 'react';
import {Typography, Grid, Box, Stack, ButtonGroup, IconButton, List, ListItem} from "@mui/material"
import mapboxgl from "mapbox-gl";
import Map, {Source, Layer} from "react-map-gl";
import ContactForm from "./ContactForm";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

mapboxgl.accessToken = "pk.eyJ1IjoiZG10NDIwIiwiYSI6ImNsMHY3OWhtMzAwajYzbHFrY3Z5bjZnMnEifQ.UOVp_05H7CQphXFvCjbmeQ";

const geojson: any = {
    type: 'FeatureCollection',
    features: [
        {type: 'Feature', geometry: {type: 'Point', coordinates: [4.940712027032401, 51.319818810639376]}}
    ]
};

const layerStyle: any = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
    }
};

let icons = {
    color: "white",
    "&:hover": {
        color: "#e2b402"
    }

}

const Contact = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} >
                    <Map
                        initialViewState={{
                            longitude: 4.940712027032401,
                            latitude: 51.319818810639376,
                            zoom: 14
                        }}
                        style={{width: "97%", height: "500px", margin: "1.5%", boxShadow: "1px 1px 5px #555 "}}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    >
                        <Source id="my-data" type="geojson" data={geojson}>
                            <Layer {...layerStyle} />
                        </Source>
                    </Map>
                </Grid>
            </Grid>

            <Stack direction={{md:"row", xs:"column"}}>
                <Box sx={{mt: "50px", width: {md:"50%", xs:"95%"}, ml:"auto", mr:"auto"}}>
                    <ContactForm/>

                </Box>

                <Box sx={{width: "50%" , margin:"auto", }}>
                    <Typography
                        sx={{textAlign: "center", borderBottom: "2px solid white", width: "60%", margin: "auto",mt:{xs:"50px", md:"0"}}}>Tuur
                        Gevers</Typography>
                    <ButtonGroup sx={{justifyContent: "center", display: "flex", pt: "20px"}}>
                        <IconButton className="icon">
                            <a href="https://github.com/tuurGevers">
                            <GitHubIcon sx={icons}/>
                            </a>
                        </IconButton>
                        <IconButton className="icon item1">
                            <a href="https://www.facebook.com/tuur.gevers/">
                                <FacebookIcon sx={icons}/>
                            </a>
                        </IconButton>
                        <IconButton className="icon item2">
                            <a href="https://www.instagram.com/tuurgevers/">
                                <InstagramIcon sx={icons}/>
                            </a>

                        </IconButton>

                    </ButtonGroup>

                    <Typography
                        sx={{textAlign: "center",pt:{md:"100px", xs:"20px"}, borderBottom: "2px solid white", width: "60%", margin: "auto"}}>Dimitri
                        Gevers</Typography>
                    <ButtonGroup sx={{justifyContent: "center", display: "flex", pt: "20px"}}>
                        <IconButton>
                            <a href="https://github.com/dmtwood">
                                <GitHubIcon  sx={icons} className="icon"/>
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://www.facebook.com/dimitri.gevers">
                                <FacebookIcon sx={icons} className="icon item1"/>
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://be.linkedin.com/in/dimigevers/">
                                <LinkedInIcon sx={icons} className="icon item2"/>
                            </a>

                        </IconButton>

                    </ButtonGroup>


                </Box>
            </Stack>


        </Box>

    );
};

export default Contact;