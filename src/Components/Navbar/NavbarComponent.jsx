import React from 'react'

import './NavbarStyles.scss'

function NavbarComponent() {
    let navigationList = ['Home','About','Founder','Faculty','Gallery','Videos','Contact'];
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-transparent" id="main-nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav text-center mx-auto mt-2 mt-lg-0">
                    { navigationList.map((list,index) => (
                        <li key={index} className="nav-item my-2">
                            <a className={`nav-link nav-link--${index}`} href={`#${list}`}>{list}</a>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
    )
}

export default NavbarComponent
