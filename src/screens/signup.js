import React, { useState, useEffect } from 'react'

//assets
import login_background from '../assets/login_background.png'
import login_know_more from '../assets/login_know_more.png'

import { Link } from 'react-router-dom';

//firebase
import firebase from 'firebase'


export default function LoginScreen() {
    const [username, setusername] = useState()
    const [Password, setpassword] = useState()

    const login = () => {
        const data = firebase.database().ref(username)
        data.set({
            name: username
        })
    }
    return (
        <div className="login_screen">
            <div className='welcome_container'>
                <div className='welcome'>
                    <h1>Welcome to CovidCare</h1>
                </div>
                <div className='welcome_text'>
                    <h6>CovidCare let you know the situtation outside your home<br />in just some clicks.</h6>
                    <h5>Stay Home, Stay Safe</h5>
                </div>
                <div className='know_button'>
                    <img src={login_know_more} alt='know_more' />
                </div>
            </div>
            <div className='login_container'>
                <div className='signin_container'>
                    <h1>SignUp</h1>
                </div>
                <div className='login_username'>
                    <input type="text" name="name" className='input_username' placeholder='Enter Hospital Name ...' onChange={item => setusername(item.target.value)} />
                </div>
                <div className='login_password'>
                    <input type="text" name="name" className='input_username' placeholder='Create Password ...' />
                </div>
                <div className='login_click_button'>
                    <Link to={{
                        pathname: "/dashboard",
                        username: username
                    }} style={{ textDecoration: 'none' }}>
                        <div className="login_click_design" onClick={() => login()}>
                            Register
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
