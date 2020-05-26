import React from 'react';

import './SidebarStyle.css';

const SidebarComponent = ({ isSideBarActive }) => {
    
    return (
        <div className={ isSideBarActive === true ? "sidebar sidebar-active" : "sidebar sidebar-hide" }>
            <div className="user-info">
                <div className="user-image">
                    <img src = "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "image"  />
                </div>
                <p>Gopala krishnan</p>
                <p>Admin</p>
            </div>
            <div className="menu-list">
                <div className="list-item"><a className="active" href="#"><span>Dashboard</span></a></div>
                <div className="list-item"><a href="#"><span>AboutUs</span></a></div>
                <div className="list-item"><a href="#"><span>Teams</span></a></div>
                <div className="list-item"><a href="#"><span>Gallery</span></a></div>
                <div className="list-item"><a href="#"><span>Events</span></a></div>
            </div>
        </div>
    );
}

export default SidebarComponent;