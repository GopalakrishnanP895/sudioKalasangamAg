import React from 'react';

import Logo from '../../Images/logo.png';
import './NavbarStyle.css';

const NavbarComponent = ({changeSidebarStatus}) => {

    return(
            <nav className="navbar nav-cs">
                <div className="hamburger-menu">
                    <i onClick={changeSidebarStatus} className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Logo" width="80px" />
                </a>
                <div className="my-account">
                    <p>Gopala Krishnan</p>
                </div>
            </nav>
    );
}


export default NavbarComponent;