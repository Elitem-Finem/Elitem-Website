import React, { useState } from 'react';
import './Form.css';
import { db } from '../firebase.js';

const raw_date = new Date().toDateString();
const raw_time = new Date().getTime();

function Form() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState('form_active');
    const [counter, setCounter] = useState(0);
    const present =  raw_date + ' ' + raw_time + ' ' + counter;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader('form_inactive');

        db.collection('contacts').doc(present).set({
            subject:subject, 
            email:email,
            message:message
        }).then(() => {
            setEmail("");
            setSubject("");
            setMessage("");
            setCounter(1 + counter);
            setLoader('form_active');
        }).catch((error) => {
            alert(error.message);
            setLoader('form_active');
        }) 
    } 


    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1>send us an email</h1>
            <label>email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
            />
            <label>subject</label>
            <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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

export default Form;
