import React, {useState} from 'react';
import {Typography, Grid, Box, Button, List, ListItem, Card, CardContent, TextField, createTheme, ThemeProvider} from "@mui/material";
import Axios from "axios";

const ContactForm = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e:any) => {
        if (firstName != "" && lastName != "" && email.includes("@") && message != "") {
            Axios.post("http://localhost:3001/api/mail", {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    message: message
                }
            )
            alert("bericht is verzonden!")

        }



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
            <Box sx={{borderRight:{xs:"none", md:"2px solid white"}}}>
                <Card className={"contactform"}>
                    <form>
                        <CardContent>
                            <Typography fontWeight={10}>contacteer ons</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField required label="Voornaam" value={firstName}
                                               onChange={e => setFirstName(e.target.value)} fullWidth



                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField required label="Achternaam" value={lastName}
                                               onChange={e => setLastName(e.target.value)} fullWidth
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required label="Email" value={email}
                                               onChange={e => setEmail(e.target.value)} type="email"
                                               fullWidth />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required
                                               label="bericht"
                                               multiline
                                               rows={4}
                                               sx={{width: "100%"}}
                                               value={message}
                                               onChange={e => setMessage(e.target.value)}


                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" fullWidth
                                            onClick={handleSubmit}>verstuur</Button>
                                </Grid>


                            </Grid>
                        </CardContent>
                    </form>
                </Card>

            </Box>
        </ThemeProvider>

    );
};

export default ContactForm;