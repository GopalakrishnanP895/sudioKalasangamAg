import React, { useState } from 'react';

import NavbarComponent from '../NavBar/NavbarComponent';
import SidebarComponent from '../SideBar/SidebarComponent';

const HeaderComponent = () => {

    const [ isSideBarActive, setIsSideBarActive ] = useState(true);

    const changeSidebarStatus = () => {
        
        if(isSideBarActive === true){
            setIsSideBarActive(false);
            return;
        }

        setIsSideBarActive(true);
    }

    return(
        <div className="header">
            <NavbarComponent changeSidebarStatus={changeSidebarStatus}/>
            <SidebarComponent isSideBarActive={isSideBarActive} />
        </div>
    );
}

export default HeaderComponent;