import React from 'react';
import './Footer.css';
import Logo from '../images/Antibody.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <img src={Logo} alt='Elitem Logo'/>
            </div>
            <div className='footer_right'>
                <h1>Elitem</h1>
                <h1>2021 All Rights Reserved</h1>
            </div>
        </div>
    )
}

export default Footer;
