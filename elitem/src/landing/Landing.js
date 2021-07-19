import React from 'react';
import Header from './Header.js';
import Client from './Client.js';
import Form from './Form.js';
import Support from './Messenger.js';
import Footer from './Footer.js';
import Social from './Social.js';
import './Landing.css';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';
import Covibes from '../images/Covibes.png';
import Messenger from '../images/Messenger.png';
import UCSDCircleK from '../images/UCSDCircleK.png';

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
                    <Client img={Covibes} title='Covibes' description='plots Covid vaccine reviews' url='https://covibes-client.herokuapp.com/'/>
                    <div className='landing_exampleClient2'>
                        <Client img={UCSDCircleK} title='UCSD Circle K' description='the current UCSD Circle K service organization website' url='https://ucsdcirclek.com/'/>
                    </div>
                    <div className='landing_exampleClient3'>
                    <Client img={Messenger} title='Messenger Clone' description='a simplified copy of Facebook messenger' url='https://facebook-messenger-clone-74a06.web.app/'/>
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
                <Support/>
            </div>
            {/* Footer */}
            <Footer/>
            {/* Social */}
            <Social/>
        </div>
    )
}

export default Landing;
