import React from 'react';
import './Client.css';

function Client({ img, title, description, url }) {
    return (
        <a href={url} target="_blank">
            <div style={{ backgroundImage: `url(${img})`}} className='client'>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>
        </a>
    )
}

export default Client;