import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

//chart js
import MultiAxisLine from './multipleline'
import DoughnutChart from './donut'
import MyApp from './calender'

//firebse
import firebase from 'firebase'


import FlatList from 'flatlist-react';


import { Link } from 'react-router-dom';



//assets
import home from '../assets/home.png'
import calendar from '../assets/calendar.png'
import chat from '../assets/chat.png'
import user from '../assets/user.png'
import settings from '../assets/settings.png'
import healthcare from '../assets/healthcare.png'
import no_beds from '../assets/no_beds.png'
import oxygen_cylinder from '../assets/oxygen_tank.png'
import bed_cylinder from '../assets/bed_cylinder.png'
import vaccine_cylinder from '../assets/vaccine_cylinder.png'
import no_vaccines from '../assets/no_vaccines.png'
import patients from '../assets/patients.png'
import dots from '../assets/dots.png'


export default function MainScreen() {
    const location = useLocation();
    const [beds, setBeds] = useState()
    const [oxygen, setOxygen] = useState()
    const [vaccine, setVaccine] = useState()
    const [no_patients, setPatients] = useState()

    const [doctorsData, setdoctorsData] = useState()

    useEffect(() => {
        const data = firebase.database().ref(location.username)
        data.on('value', snapshot => {
            setBeds(snapshot.val().beds)
            setOxygen(snapshot.val().oxygen)
            setVaccine(snapshot.val().vaccines)
            setPatients(snapshot.val().patients)
        })

        const datas = firebase.database().ref(location.username + '/doctors')
        datas.on('value', snp => {
            var l = []
            snp.forEach(datas1 => {
                const datas2 = firebase.database().ref(location.username + '/doctors/' + datas1.key)
                datas2.on('value', snp2 => {
                    l.push({
                        name: datas1.key,
                        gender: snp2.val().gender,
                        disease: snp2.val().disease,
                        status: snp2.val().status,
                        date: snp2.val().date,
                    })
                })
            })
            setdoctorsData(l)
        })
        return () => datas
    }, [])

    console.log(doctorsData)

    return (
        <div className="Application">
            <div className="navbar">
                <div className='logo_container'>
                    <img src={healthcare} alt='home' className='logo_size' />
                </div>
                <div className="navbar_container">
                    <img src={home} alt='home' className='navbar_icons' />
                    <img src={calendar} alt='home' className='navbar_icons' />
                    <img src={chat} alt='home' className='navbar_icons' />
                    <img src={user} alt='home' className='navbar_icons' />
                    <img src={settings} alt='home' className='navbar_icons' />
                </div>
            </div>
            <div className="covidcare_container">
                <div className="mainscreen_upperbar">
                    <h1 style={{ color: '#585858' }}>Hello, There</h1>
                    <h6 style={{ color: '#B5B5B6' }}>Stay Home, Stay Safe</h6>
                </div>
                <div className="mainscreen_main_content">
                    {/*oxygen cylinder**/}
                    <div className='oxygen_container'>
                        <div className="dots_container">
                            <img src={dots} alt='dots' />
                        </div>
                        <div className='oxygen_tank_container'>
                            <img src={bed_cylinder} alt='oxygen' className='oxygen_cylinder_size' />
                        </div>
                        <div className='oxygen_count'>
                            <h3>beds</h3>
                            {beds}
                        </div>
                    </div>

                    {/*oxygen cylinder**/}
                    <div className='oxygen_container'>
                        <div className="dots_container">
                            <img src={dots} alt='dots' />
                        </div>
                        <div className='oxygen_tank_container'>
                            <img src={bed_cylinder} alt='oxygen' className='oxygen_cylinder_size' />
                        </div>
                        <div className='oxygen_count'>
                            <h3>Oxygen</h3>
                            {oxygen}
                        </div>
                    </div>

                    {/*oxygen cylinder**/}
                    <div className='oxygen_container'>
                        <div className="dots_container">
                            <img src={dots} alt='dots' />
                        </div>
                        <div className='oxygen_tank_container'>
                            <img src={vaccine_cylinder} alt='oxygen' className='oxygen_cylinder_size' />
                        </div>
                        <div className='oxygen_count'>
                            <h3>Remdevsivir</h3>
                            {vaccine}
                        </div>
                    </div>
                </div>
                <div className="mainscreen_main_graph">
                    <div className='multiple_container'>
                        <MultiAxisLine />
                    </div>
                </div>
                <div className='doctors_name'>
                    <h3 style={{ marginLeft: '100px' }}>Doctors</h3>
                </div>
                <div className='doctors_labels'>
                    <Link to={{
                        pathname: "/mainscreen",
                    }} className="users3" style={{ textDecoration: 'none' }}>
                        <div className="name1">Name</div>
                        <div className='name_container'>
                            <div className="info1">Gender</div>
                        </div>
                        <div className='name_container'>
                            <div className="info1">Disease</div>
                        </div>
                        <div className='name_container'>
                            <div className="info1">Date</div>
                        </div>
                        <div className='name_container'>
                            <div className="info1">Status</div>
                        </div>
                    </Link>
                </div>
                <div className='doctors_container'>
                    <FlatList
                        list={doctorsData}
                        renderItem={(item) => (
                            <div className="usercontainer2">
                                <div className="maincontainer">
                                    <Link to={{
                                        pathname: "/mainscreen",
                                    }} className="users2" style={{ textDecoration: 'none' }}>
                                        <div className="name1">{item.name}</div>
                                        <div className='name_container'>
                                            <div className="info1">{item.gender}</div>
                                        </div>
                                        <div className='name_container'>
                                            <div className="info1">{item.disease}</div>
                                        </div>
                                        <div className='name_container'>
                                            <div className="info1">{item.date}</div>
                                        </div>
                                        <div className='name_container'>
                                            <div className="info1">{item.status}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                        renderWhenEmpty={() => <div>no users</div>}
                        sortBy={["name"]}
                    />
                </div>
            </div>
            <div className="covidcare_container2">
                <div className="patients_container">
                    {/*oxygen cylinder**/}
                    <div className='patients_container_image'>
                        <div className="dots_container">
                            <img src={dots} alt='dots' />
                        </div>
                        <div className='oxygen_tank_container'>
                            <img src={patients} alt='oxygen' className='oxygen_cylinder_size' />
                        </div>
                        <div className='oxygen_count'>
                            <h3>Patients</h3>
                            {no_patients}
                        </div>
                    </div>
                </div>
                <div className="piechart">
                    <div className="piechart_container">
                        <div className='inner_piechart_container'>
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
                <div className='calender'>
                    <div className='calender_container'>
                        <MyApp />
                    </div>
                </div>
            </div>
        </div>
    )
}
