import React, { useRef, useState } from 'react';
import './Login.css';
import { useAuth } from '../contexts/AuthContext.js';
import { useHistory } from 'react-router-dom';
import FingerprintIcon from '@material-ui/icons/Fingerprint';


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, checkAdmin } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value)
            let priority = await checkAdmin()
            priority ? priority = '/admin-portal' : priority = '/user-portal'
            history.push(priority)
        } catch {
            setError('failed to sign in');
        }
        setLoading(false);
    }

    return (
        <form className='login' onSubmit={handleSubmit}>
            <FingerprintIcon className='login_icon'/>
            <h1>Customer Login</h1>
            <h2>{error}</h2>
            <label>Email</label>
            <input 
                type='email'
                ref={emailRef}
                required
            />
            <label>Password</label>
            <input
                type='password'
                ref={passwordRef}
                required
            />
            <button type='submit' disabled={loading}>Login</button>
        </form>
    )
}

export default Login;
