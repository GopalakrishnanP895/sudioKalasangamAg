import React, { useState } from 'react';

import SidebarComponent from '../Components/SideBar/SidebarComponent';
import NavbarComponent from '../Components/NavBar/NavbarComponent';


const Dashboard = () => {

    const [ isSideBarActive, setIsSideBarActive ] = useState(true);

    const changeSidebarStatus = () => {
        
        if(isSideBarActive === true){
            setIsSideBarActive(false);
            return;
        }

        setIsSideBarActive(true);
    }

    return(
        <div className="main">
            <SidebarComponent isSideBarActive={isSideBarActive} />
            <div className={"right-side" + isSideBarActive === true ? "w-80" : "w-100"}>
                <NavbarComponent changeSidebarStatus={changeSidebarStatus}/>
                <div className="page-content">

                </div>
            </div>
        </div>
    );
}

export default Dashboard;