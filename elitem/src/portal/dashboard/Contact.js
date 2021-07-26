import React, { useState } from 'react';
import './Contact.css';
import { auth, db } from '../../firebase.js';

const raw_date = new Date().toDateString();
const raw_time = new Date().getTime();

function Contact() {
    const [subject, setSubject] = useState('');
    const [reason, setReason] = useState('')
    const [message, setMessage] = useState('');

    const [loader, setLoader] = useState('form_active');
    const [counter, setCounter] = useState(0);
    const present =  raw_date + ' ' + raw_time + ' ' + counter;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader('form_inactive');

        db.collection('users').doc(auth.currentUser.uid).collection('messages').doc(present).set({
            subject:subject, 
            reason:reason,
            message:message
        }).then(() => {
            setSubject("");
            setReason("");
            setMessage("");
            setCounter(1 + counter);
            setLoader('form_active');
        }).catch((error) => {
            alert(error.message);
            setLoader('form_active');
        }) 
    }
    return (
        <form className='contact' onSubmit={handleSubmit}>
            <h1>Email Us</h1>
            <label>subject</label>
            <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <label>reason</label>
            <input
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            />
            <label>body</label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className={loader}>send</button>
        </form>
    )
}

export default Contact;
