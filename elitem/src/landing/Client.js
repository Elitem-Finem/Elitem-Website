import React from 'react';
import './Client.css';

function Client({ img }) {
    return (
        <div className='client'>
            <div className='client_image'>
                <img alt='previous_client' src={img}/>
            </div>
            <h1>Title</h1>
            <h2>Description</h2>
        </div>
    )
}

export default Client;