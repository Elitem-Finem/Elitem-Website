import React, { useState, useEffect } from 'react';
import './History.css';
import { auth, db } from '../../firebase.js';

function History() {
    const [transaction, setTransaction] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        db.collection('users').doc(auth.currentUser.uid).collection('payment').onSnapshot((snapshot) => 
            setTransaction(snapshot.docs.map((doc) => ({data: doc.data()})))
        );
    }, []);

    return (
        <div className='history'>
            <h1>Transaction Details</h1>
            <div className='history_transactions'>
                <h2>Time</h2>
                <h2>Description</h2>
                <h2>Amount (USD)</h2>
                <h2>Actions</h2>  
            </div>
            {transaction.map((document) => (
                <div className='history_documents'>
                <h1>{document.data.time}</h1>
                <h1>{document.data.description}</h1>
                <h1>{document.data.amount}</h1>
                <h1>more details</h1>
                </div>
            ))}
            
        </div>
    )
}

export default History;
