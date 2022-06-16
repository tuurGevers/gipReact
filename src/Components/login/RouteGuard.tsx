import React, {useEffect, useState} from 'react';
import {Navigate} from "react-router-dom"
import Master from "./master"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const RouteGuard = () => {
    if (cookies.get("logged")) {
        return <Master/>

    } else {
        return <Navigate to="/" replace/>
    }

};

export default RouteGuard;