import React from 'react';
import './Header.css';
import Logo from '../images/Antibody.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={Logo} alt='Elitem Logo'/>
            </div>
            <h1>Elitem</h1>
            <div className='header_icon'>
                <MenuRoundedIcon className='header_iconInner'/>
            </div>
        </div>
    )
}

export default Header;
