import React from 'react';
import {Typography, Stack, Box, IconButton, List, ListItem} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {Link} from "react-router-dom";

const footer = {
    position:"sticky",
    left:0,
    bottom:0,
    width: "100%",
    mt: "50px",
    borderTop: "2px solid black",
    pt: "1em",
    height: "0px",
    display: "flex",
    flexDirection: "row",
}
const Footer = () => {
    return (
        <>
            <Box sx={footer}>
                <List>
                    <ListItem>
                        <a style={{display: "flex", flexDirection: "row"}}
                           href="mailto:tuur.gevers@hotmail.com"><MailIcon/> <Typography
                            sx={{ml: "20px"}}>tuur.gevers@hotmail.com</Typography></a>
                    </ListItem>
                    <ListItem>
                        <a style={{display: "flex", flexDirection: "row"}} href="tel:+32468289221"><PhoneAndroidIcon/>
                            <Typography sx={{ml: "20px"}}>+32468289221</Typography></a>
                    </ListItem>
                </List>

                <Box sx={{ml: "auto", textAlign: "center", mr: "20px", width: "15%",}}>
                    <List sx={{boxShadow: "1px 1px 5px #000 inset"}}>
                        <Link to="/">
                            <Typography className="menuHover">Home</Typography>
                        </Link>
                        <Link to="/contact">
                            <Typography className="menuHover">contact</Typography>
                        </Link>
                        <Link to="/overons">
                            <Typography className="menuHover">over ons</Typography>
                        </Link>
                    </List>
                </Box>


            </Box>
        </>

    );
};

export default Footer;