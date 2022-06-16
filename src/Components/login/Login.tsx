import React, {useState} from 'react';
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
import Axios from "axios";

type props = {
    handleAdmin: any
}

const Login = (props:props) => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleSubmit = (e: any) => {
        if (name != "" && password != "") {
            Axios.post("http://localhost:3001/api/users/login", {
                    name: name,
                    password: password
                },{ withCredentials: true }
            ).then(
                (response)=>{
                    if(response.data.length>0){
                        props.handleAdmin()
                        window.location.href = "/master";
                    }
                }


            )
        }
        e.preventDefault();



    }

    const theme = createTheme({
        palette: {
            primary: {
                main: "#272727"
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{borderRight: {xs: "none", md: "2px solid white"}, mt:"75px", pb:"25px"}}>
                <Card className={"contactform"} sx={{minHeight:"300px", maxWidth:{md:"30%", xs:"60%"}}}>
                    <form>
                        <CardContent>
                            <Grid container spacing={4} sx={{mr:"10%",mt:"auto"}}>
                                <Grid item xs={12}>
                                    <TextField required label="naam" value={name}
                                               onChange={e => setName(e.target.value)} fullWidth


                                    />
                                </Grid>
                                <Grid item xs={12} sx={{mb:"20px"}} >
                                    <TextField required label="password" value={password}
                                               onChange={e => setPassword(e.target.value)} fullWidth type="password"

                                    />

                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" fullWidth
                                        onClick={handleSubmit}>login</Button>
                            </Grid>
                    </CardContent>
                </form>
            </Card>

        </Box>
</ThemeProvider>
);
};

export default Login;