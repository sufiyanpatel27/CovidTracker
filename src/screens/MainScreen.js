import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";


//firebse
import firebase from 'firebase'


export default function MainScreen() {
    const location = useLocation();
    const [username, setUsername] = useState()

    useEffect(() => {
        const data = firebase.database().ref(location.username)
        data.on('value', snapshot => {
            setUsername(snapshot.val())
        })
    })
    return (
        <div>
            <h1>main screen</h1>
            <h6>{username}</h6>
        </div>
    )
}
