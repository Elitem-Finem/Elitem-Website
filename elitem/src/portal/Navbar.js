import React from 'react';
import './Navbar.css';
import Logo from '../images/Antibody.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <Link to='/'><IconButton><img src={Logo} alt='Elitem Logo'/></IconButton></Link>
            </div>
            <h1>Elitem</h1>
            <div className='navbar_icon'>
                <Link to= '/portal'><IconButton><MenuRoundedIcon className='navbar_iconInner'/></IconButton></Link>
            </div>
        </div>
    )
}

export default Header;