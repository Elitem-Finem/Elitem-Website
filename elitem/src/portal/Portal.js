import React from 'react';
import './Portal.css';
import Navbar from './Navbar.js';
import Login from './Login.js';
import { Link } from 'react-router-dom';

function Portal() {
    return (
        <div className='portal'>
            <Navbar/>
            <Login/>
            <Link to='/password-recovery'><h1 className='portal_recovery'>Forgot your password?</h1></Link>
        </div>
    )
}

export default Portal;
