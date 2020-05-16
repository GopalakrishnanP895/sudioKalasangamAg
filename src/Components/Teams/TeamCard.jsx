import React from 'react'


function TeamCard({link, name, role,image }) {
    return (
        <div className="team-card">
            <div className="team-card--img">
                <a href={link}>
                    <img src={image} alt={name}/>
                </a>
            </div>
            <div className="team-card--name">
                <a href={link}>
                    <h2>{name}</h2>
                </a>
            </div>
            <div className="team-card--role">
                <p>{role}</p>
            </div>
        </div>
    )
}

export default TeamCard
