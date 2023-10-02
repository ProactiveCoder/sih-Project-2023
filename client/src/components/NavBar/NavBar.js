import React from 'react';
import './NavBar.css';
import logo from './images/logo.png'
import sign from './images/sign In.png'
import call from './images/call.png';
import email from './images/email.png';
// import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <div className="container-fluid con">
                <div className="row navbar ">
                    <div className="col-2 logoName1 ">
                        <img src={logo} alt="logo" width={40} />
                        <span > Resilience</span>
                    </div>
                    <div className="col-8 logoName2 ">
                        <div>
                            <img src={call} alt="call" width={20} />
                            <span>9999-999-999</span>
                        </div>
                        <div>
                            <img src={email} alt="email" width={20} />
                            <span>resilience@xyz.com</span>
                        </div>
                    </div>
                    <div className="col-2 logoName3 ">
                        <span> Sign In</span>
                        <img src={sign} alt="logo" width={40} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar;