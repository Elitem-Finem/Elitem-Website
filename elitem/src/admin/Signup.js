import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext.js';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './Signup.css';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const companyRef = useRef();
    const { signup, createAdmin } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            await createAdmin(companyRef.current.value)
            setError('user successfully created')
        } catch {
            setError('failed to create an account')
        }

        setLoading(false)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <PersonAddIcon className='signup_icon'/>
            <h1>Add a User</h1>
            <h2>{error}</h2>
            <label>Organization</label>
            <input
                type='text'
                ref={companyRef}
                required
            />
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
            <label>Password Confirmation</label>
            <input 
                type='password'
                ref={passwordConfirmRef}
                required
            />
            <button type='submit' disabled={loading}>Add User</button>
        </form>
    )
}

export default Signup;
