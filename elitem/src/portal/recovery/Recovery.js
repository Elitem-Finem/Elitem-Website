import React, { useRef, useState } from 'react';
import './Recovery.css';
import Navbar from '../Navbar.js';
import { useAuth } from '../../contexts/AuthContext.js';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function Recovery() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('check your inbox for further instructions')
        } catch {
            setMessage('failed to reset password')
        }

        setLoading(false)
    }

    return (
        <div className='recovery'>
            <Navbar/>
            <form onSubmit={handleSubmit} className='recovery_form'>
                <LockOpenIcon className='recovery_icon'/>
                <h1>Password Reset</h1>
                <h2>{message}</h2>
                <label>Email</label>
                <input 
                    type='email'
                    ref={emailRef}
                    required
                />
                <button type='submit' disabled={loading}>Reset Password</button>
            </form>    
        </div>
    )
}

export default Recovery;
