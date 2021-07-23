import React, { useState } from 'react';
import Header from '../landing/Header.js';
import Signup from './Signup.js';
import './Admin.css';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from "react-router-dom";

function Admin() {
    const [error, setError] = useState('');
    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/portal')
        } catch {
            setError('failed to log out')
        }
    }


    return (
        <div className='admin'>
            <Header/>
            <h1>Administrator Console</h1>
            <Signup/>
            <button onClick={handleLogout} >Logout</button>
            <h3>{error}</h3>
        </div>
    )
}

export default Admin;
