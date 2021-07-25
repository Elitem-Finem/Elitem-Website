import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar.js';
import { auth, db } from '../../firebase.js';


function Dashboard() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await db.collection('users').doc(auth.currentUser.uid).get();
                let data = { title: 'not found'}
                if (response.exists) {
                    data = response.data();
                }
                setUser(data);
                setLoading(false);
            } catch (err) {
                console.log('async error')
            }
        };
        fetchData();
    }, []);

    return (
        <div className='dashboard'>
            <Navbar />
            <h1>{!loading && user.name}</h1>
            {/* Stripe Payments */}
            
        </div>
    )
}

export default Dashboard;
