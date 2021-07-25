import TrendingFlatRounded from '@material-ui/icons/TrendingFlatRounded';
import React from 'react';
import './Consumer.css';

function Consumer({ name, plan, createDate , payDate }) {
    return (
        <div className='consumer'>
            <h1>{name}</h1>
            <h2 className={plan}>Current Plan: <b>{plan}</b></h2>
        </div>
    )
}

export default Consumer;
