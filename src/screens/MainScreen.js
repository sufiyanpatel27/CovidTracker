import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";


//firebse
import firebase from 'firebase'

//assets
import home from '../assets/home.png'
import calendar from '../assets/calendar.png'
import chat from '../assets/chat.png'
import user from '../assets/user.png'
import settings from '../assets/settings.png'
import healthcare from '../assets/healthcare.png'
import no_beds from '../assets/no_beds.png'
import no_oxygen from '../assets/no_oxygen.png'
import no_vaccines from '../assets/no_vaccines.png'

export default function MainScreen() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.username)
    })

    return (
        <div className="Application">
            <div className="navbar">
                <div className='logo_container'>
                    <img src={healthcare} alt='home' />
                </div>
                <div className="navbar_container">
                    <img src={home} alt='home' className='small_icons' />
                    <img src={calendar} alt='home' />
                    <img src={chat} alt='home' />
                    <img src={user} alt='home' />
                    <img src={settings} alt='home' />
                </div>
            </div>
            <div className="covidcare_container">
                <div className="mainscreen_upperbar">
                    <h1 style={{ color: '#585858' }}>Hello, There</h1>
                    <h6 style={{ color: '#B5B5B6' }}>Stay Home, Stay Safe</h6>
                </div>
                <div className="mainscreen_main_content">
                    <img src={no_beds} alt='no_beds' />
                    <img src={no_oxygen} alt='no_beds' />
                    <img src={no_vaccines} alt='no_beds' />
                </div>
                <div className="mainscreen_main_graph">

                </div>
            </div>
            <div className="covidcare_container2">
                second
            </div>
        </div>
    )
}
