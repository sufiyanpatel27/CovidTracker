import React from 'react'

//assets
import website from '../assets/website.png'
import contact from '../assets/contact.png'
import gmail from '../assets/gmail.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import Flat from '../assets/Flat.png'
import CovidCare from '../assets/CovidCare.png'
import buttons from '..//assets/buttons.png'
import main from '../assets/main.png'
import back from '../assets/back.png'
import urgentcare from '../assets/urgentcare.png'
import primarycare from '../assets/primarycare.png'
import vaccines from '../assets/vaccines.png'


//firebase




export default function HomeScreen() {
    return (
        <div className='container'>
            <img src={back} alt='alt' className='back' />
            <div className='upper_bar'>
                <div className='left_content'>
                    <div className='website_container'>
                        <img src={website} alt="web" />
                    </div>
                    <div className='contact_container'>
                        <img src={contact} alt="web" />
                    </div>
                    <div className='gmail_container'>
                        <img src={gmail} alt="web" />
                    </div>
                </div>
                <div className='right_content'>
                    <div className='facebook_container'>
                        <img src={facebook} alt="web" />
                    </div>
                    <div className='twitter_container'>
                        <img src={twitter} alt="web" />
                    </div>
                    <div className='youtube_container'>
                        <img src={youtube} alt="web" />
                    </div>
                </div>
            </div>


            <div className='main_bar'>
                <div className='left_content'>
                    <div className='logo_container'>
                        <img src={Flat} alt='covidcare' />
                    </div>
                    <div className='name_container'>
                        <img src={CovidCare} alt='covidcare' />
                    </div>
                </div>
                <div className='right_main_content'>
                    <div className='positive_container'>
                        POSITIVE
                    </div>
                    <div className='cured_container'>
                        CURED
                    </div>
                    <div className='newcases_container'>
                        NEW CASES
                    </div>
                    <div className='reports_container'>
                        REPORTS
                    </div>
                    <div className='button_container'>
                        <img src={buttons} alt='log in' />
                    </div>
                </div>
            </div>


            <div className='main_content'>
                <div className='main_image_container'>
                    <img src={main} alt='main' className='main' />
                </div>
            </div>
            <div className='lower_content'>
                <img src={urgentcare} alt="urgentcare" className="cards" />
                <img src={primarycare} alt="primarycare" className="cards" />
                <img src={vaccines} alt="vaccines" className="cards" />
            </div>


        </div>
    )
}
