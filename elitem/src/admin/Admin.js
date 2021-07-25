import React, { useState, useEffect } from 'react';
import Header from '../landing/Header.js';
import Signup from './Signup.js';
import Option from './Option.js';
import Consumer from './Consumer.js';
import './Admin.css';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from "react-router-dom";
import { db } from '../firebase.js';

function Admin() {
    const [error, setError] = useState('');
    const [list, setList] = useState([]);
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

    useEffect(() => {
        db.collection('users').where('admin','==', false).onSnapshot((snapshot) => 
            setList(snapshot.docs.map((doc) => ({data: doc.data()})))
        );
    }, []);

    return (
        <div className='admin'>
            <Header/>
            <h1>Administrator Console</h1>
            <div className='admin_console'>
                <div>
                    <Signup/>
                </div>
                <div className='admin_users'>
                    <div className='admin_consumer'>
                        <h1>Consumers</h1>
                        {list.map((user) => (
                                <Consumer 
                                    name = {user.data.name}
                                    plan = {user.data.plan}
                                />
                        ))}
                    </div>
                    <form>
                        <input list='admin_select'/>
                        <datalist id='admin_select'>
                            {list.map((user) => (
                                <Option 
                                    name = {user.data.name}
                                />
                            ))}
                        </datalist>
                        <button>Edit</button>
                    </form>
                </div>
            </div>
            <button onClick={handleLogout}>Logout</button>
            <h3>{error}</h3>
        </div>
    )
}

export default Admin;
