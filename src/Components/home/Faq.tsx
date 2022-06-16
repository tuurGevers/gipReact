import React, {useEffect, useState} from 'react';
import Axios, {AxiosResponse} from "axios"
import {Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Box} from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


type props = {
    faq: any,
}
const Faq = (props: props) => {


    return (
        <Grid container sx={{mt: "20px", p: "35px"}}>
            {
                props.faq.map((q: any) => {
                        if (q.visible == "1") {
                            return (
                                <Grid item xs={12}>
                                    <Box sx={{width: "90%", margin: "auto", mb: "10px", overflow: "auto"}}>
                                        <Accordion>
                                            <AccordionSummary
                                                sx={{borderBottom: "3px solid #565656"}}
                                                expandIcon={<ArrowDropDownIcon/>}

                                            >
                                                {q.vraag}
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {q.antwoord}
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                </Grid>
                            )
                        }


                    }
                )
            }

        </Grid>
    );
};

export default Faq;