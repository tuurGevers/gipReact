import React, {useState} from 'react';

import {AppBar, Grid, Toolbar, Typography, IconButton, Drawer, Box} from "@mui/material"
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Light from '@mui/icons-material/EmojiObjects';

let navlinks = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
}

type navProps  = {
    isLight: boolean,
    toggleMode : any
}
let navlinksSmall = {
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    "&:hover": {
        color: "#e2b402",
    },
}



let link = {
    borderRadius: 0,
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    display: {xs: 'none', sm: 'block',},
    "&:hover": {
        borderBottom: "1px solid white",
    },
}



const Nav = (props:navProps) => {
    const [open, setState] = useState(false);
    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };
    return (
        <AppBar position="sticky" sx={{backgroundColor: props.isLight?"#6b6060":"#272727"}}>
            <Toolbar>
                <Grid container>
                    <Grid item md={11} sx={navlinks}>
                        <IconButton
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                            sx={{mr: 2, display: {xs: 'block', sm: 'none',},}}>
                            <MenuIcon/>
                        </IconButton>
                        <Drawer
                            anchor="top"
                            variant="temporary"
                            open={open}
                            onClose={toggleDrawer(false)}

                        >
                            <Box sx={{backgroundColor: "#272727", color: "white"}}>
                                <Link to="/">
                                    <Typography onClick={toggleDrawer(false)} sx={navlinksSmall}>Home</Typography>
                                </Link>
                                <Link to="/contact">
                                    <Typography onClick={toggleDrawer(false)} sx={navlinksSmall}>contact</Typography>
                                </Link>
                                <Link to="/overons">
                                    <Typography onClick={toggleDrawer(false)} sx={navlinksSmall}>over
                                        ons</Typography></Link>
                            </Box>
                        </Drawer>


                        <Link to="/">
                            <Typography sx={link}>Home</Typography>
                        </Link>
                        <Link to="/contact">
                            <Typography sx={link}>contact</Typography>
                        </Link>
                        <Link to="/overons">
                            <Typography sx={link}>over ons</Typography>
                        </Link>
                    </Grid>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width:"5%",

                    }}
                    >
                        <IconButton onClick={props.toggleMode}>
                            <Light className={props.isLight?"yellow":"white"}/>
                        </IconButton>
                    </Box>


                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;