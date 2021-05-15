import React, { useState, useEffect } from 'react'



//assets
import no_beds from '../assets/bed_cylinder.png'
import no_oxygen from '../assets/oxygen_tank.png'
import vaccine_cylinder from '../assets/vaccine_cylinder.png'
import patients from '../assets/patients.png'


import { useLocation } from "react-router-dom";



//firebase
import firebase from 'firebase';

export default function Dashboard() {
    const location = useLocation();

    const [name, setname] = useState()
    const [no_beds_count, setno_beds] = useState()
    const [no_oxygen_count, setno_oxygen_count] = useState()
    const [no_vaccine_count, setnono_vaccine] = useState()
    const [no_patients_count, setnono_patients] = useState()

    const [newno_beds_count, newsetno_beds] = useState()
    const [newno_oxygen_count, newsetno_oxygen_count] = useState()
    const [newno_vaccine_count, newsetnono_vaccine] = useState()
    const [newno_patients_count, newsetnono_patients] = useState()
    useEffect(() => {
        const data = firebase.database().ref(location.username)
        data.on('value', snapshot => {
            setname(snapshot.val().name)
            setno_beds(snapshot.val().beds)
            setno_oxygen_count(snapshot.val().oxygen)
            setnono_vaccine(snapshot.val().vaccines)
            setnono_patients(snapshot.val().patients)
        })
    })

    const submit1 = () => {
        const data = firebase.database().ref(location.username + '/beds');
        if (newno_beds_count != "") {
            data.set(newno_beds_count)
        }
    }
    const submit2 = () => {
        const data = firebase.database().ref(location.username + '/oxygen');
        if (newno_oxygen_count != "") {
            data.set(newno_oxygen_count)
        }
    }
    const submit3 = () => {
        const data = firebase.database().ref(location.username + '/vaccines');
        if (newno_vaccine_count != "") {
            data.set(newno_vaccine_count)
        }
    }
    const submit4 = () => {
        const data = firebase.database().ref(location.username + '/patients');
        if (newno_patients_count != "") {
            data.set(newno_patients_count)
        }
    }
    return (
        <div className='dashboard'>
            <div className='dashboard_name'>
                <h1 style={{ color: 'white' }}>{name}</h1>
            </div>
            <div className='dashboard_main_content'>
                <div className='blocks'>
                    <img src={no_beds} alt='no_beds' />
                    <h3>Beds</h3>
                    <h4 style={{ marginTop: '-1px' }}>{no_beds_count}</h4>
                    <input style={{ marginTop: '-10px' }} type="text" name="name" className='input_username' placeholder='Edit' onChange={item => newsetno_beds(item.target.value)} />
                    <button style={{ marginTop: '10px', cursor: 'pointer' }} className='submit' onClick={() => submit1()}  >Submit</button>
                </div>
                <div className='blocks'>
                    <img src={no_oxygen} alt='no_beds' />
                    <h3>Oxygen</h3>
                    <h4 style={{ marginTop: '-1px' }}>{no_oxygen_count}</h4>
                    <input style={{ marginTop: '-10px' }} type="text" name="name" className='input_username' placeholder='Edit' onChange={item => newsetno_oxygen_count(item.target.value)} />
                    <button style={{ marginTop: '10px', cursor: 'pointer' }} className='submit' onClick={() => submit2()}  >Submit</button>
                </div>
                <div className='blocks'>
                    <img src={vaccine_cylinder} alt='no_beds' />
                    <h3>Remdevsivir</h3>
                    <h4 style={{ marginTop: '-1px' }}>{no_vaccine_count}</h4>
                    <input style={{ marginTop: '-10px' }} type="text" name="name" className='input_username' placeholder='Edit' onChange={item => newsetnono_vaccine(item.target.value)} />
                    <button style={{ marginTop: '10px', cursor: 'pointer' }} className='submit' onClick={() => submit3()}>Submit</button>
                </div>
                <div className='blocks'>
                    <img src={patients} alt='no_beds' />
                    <h3>Patients</h3>
                    <h4 style={{ marginTop: '-1px' }}>{no_patients_count}</h4>
                    <input style={{ marginTop: '-10px' }} type="text" name="name" className='input_username' placeholder='Edit' onChange={item => newsetnono_patients(item.target.value)} />
                    <button style={{ marginTop: '10px', cursor: 'pointer' }} className='submit' onClick={() => submit4()}  >Submit</button>
                </div>
            </div>
        </div>
    )
}
