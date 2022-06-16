import React, {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Components/home/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Contact from "./Components/contact/Contact";
import OverOns from "./Components/overons/OverOns";
import Login from "./Components/login/Login";
import {Link} from "react-router-dom";
import {Typography, Box} from "@mui/material"
import RouteGuard from "./Components/login/RouteGuard";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
    const [darkMode, setdarkMode] = useState(false);
    function handleAdmin(){
        cookies.set('logged', true);
        console.log(cookies.get('logged'));
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [darkMode]);

    const toggleMode = () => {
        setdarkMode(!darkMode)
        console.log(darkMode)
    }

    return (
        <div className="App">
            <Nav isLight={darkMode} toggleMode={toggleMode}/>
            <Routes>
                <Route path="/" element={<Home light={darkMode}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/overons" element={<OverOns/>}/>
                <Route path="/login" element={<Login handleAdmin={handleAdmin}/>}/>
                <Route
                    path="/master"
                    element={
                        <RouteGuard />
                    }
                />


            </Routes>
            <div style={{marginBottom: "100px"}}>
                <Footer/>
            </div>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Link to="/login">
                    <Typography>login</Typography>
                </Link>
            </Box>


        </div>
    );
}

export default App;
