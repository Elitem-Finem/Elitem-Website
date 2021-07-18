import React from 'react';
import Header from './Header.js';
import Client from './Client.js';
import Form from './Form.js';
import Footer from './Footer.js';
import Social from './Social.js';
import './Landing.css';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';
import Example_Image from '../images/StandIn.png';

function Landing() {
    return (
        <div className='landing'>
            {/* Header */}
            <Header/>
            {/* About */}
            <div className='landing_about'>
                <h1>elitem( ) {'{'}</h1>
                <h2>We build websites.</h2>
                <p>We are a group of UCSD students with the mission to <b>build and maintain websites</b> for 
                <b> small business across San Diego</b> for great prices, and <b>help with advertising and technological
                needs.</b></p>
                <h2>{'}'}</h2>
            </div>
            <div className='landing_transition'>
                <TrendingFlatRoundedIcon className='landing_transitionArrow'/>
            </div>
            {/* Examples */}
            <div className='landing_example'>
                <h1>{'//'} Our Work</h1>
                <div className='landing_exampleClients'>
                    <Client img={Example_Image}/>
                    <div className='landing_exampleClient2'>
                        <Client img={Example_Image} />
                    </div>
                    <div className='landing_exampleClient3'>
                    <Client img={Example_Image} />
                    </div>
                </div>
            </div>
            {/* Contact */}
            <div className='landing_contact'>
                <h1>{'//'} contact us</h1>
                <p>Curious about what we could do for your small business? Contact us <b>@(insert email here /
                messenger)</b> and our UI designers will work with you to create the ideal website until you are 
                satisfied, completely <b>free of charge</b>.</p>
                <p>If you are staisfied with our work and prices, we can build and maintain your website in 
                little to no time. At any point if you feel that you do not require our services any longer you 
                cancel your plans with <b>no penalty</b>!</p>
            </div>
            {/* Forms */}
            <div className='landing_form'>
                <div className='landing_formEmail'>      
                    <Form/>
                </div>
                <h1>Hello World!</h1>
            </div>
            {/* Footer */}
            <Footer/>
            {/* Social */}
            <Social/>
        </div>
    )
}

export default Landing;
