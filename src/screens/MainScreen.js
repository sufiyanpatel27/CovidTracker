import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";


//firebse
import firebase from 'firebase'


export default function MainScreen() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.username)
    })

    return (
        <div>
            <h1>main screen</h1>
            <h6>{location.username}</h6>
        </div>
    )
}
