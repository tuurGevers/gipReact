import React, {useEffect, useState} from 'react';
import Axios, {AxiosResponse} from 'axios';
import {Typography, Grid, Box, ThemeProvider, createTheme, Paper, Card, CardMedia, CardContent} from "@mui/material"

type props = {
    packages:any,
    light:boolean,
}
const Packages = (props:props) => {


    return (
        <Grid container spacing={1} sx={{width: "95%", marginLeft: "auto", marginRight: "auto", height:"420px",display:"flex",alignContent:"center", marginTop:{md:"-30px",sx:"500px"}}}
              className="pakketten"
        >
            {props.packages.map((result:any) =>{
                return(
                    <Grid item xs={12} md={4} className="pakket" >
                        <Card sx={{height:"280px", color:props.light?"#272727":"black"}}>
                            <CardContent>
                                <Typography sx={{textAlign:"center"}}>{result.naam}</Typography>
                            </CardContent>
                            <CardContent sx={{height:"120px"}}>
                                <Typography variant="body1">{result.omschrijving}</Typography>
                            </CardContent>
                            <CardContent>
                                <Typography sx={{alignItems:"bottom", textAlign:"center"}}>{result.prijs}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )

            })}
        </Grid>
    );
};

export default Packages;
