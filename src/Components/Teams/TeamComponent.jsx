import React from 'react'

import './TeamStyles.scss'

import TeamCard from './TeamCard'
import HeadingComponent from '../Heading/HeadingComponent'

import TeamCover from '../../Images/Gallery/7-edit.jpg'
import User1 from '../../Images/Teams/user1.jpg'
import User2 from '../../Images/Teams/user2.jpg'
import User3 from '../../Images/Teams/user3.jpg'
import User4 from '../../Images/Teams/user4.jpg'

function TeamComponent() {
    let teams = [
        {
            name: "Preethi Kala Balasubramanian",
            role: "Core team Members",
            link: "https://www.facebook.com/preethibalan",
            image: User1
        },
        {
            name: "Sangeetha Shivaprasad",
            role: "Core team Members",
            link: "https://www.facebook.com/",
            image: User2
        },
        {
            name: "Arpitha Ravi",
            role: "Core team Members",
            link: "https://www.facebook.com/arpita.ravi",
            image: User3
        },
        {
            name: "Ishita Tomer",
            role: "Core team Members",
            link: "https://www.facebook.com/ishita.tomer",
            image: User4
        }
    ]
    return (
        <section id="team" className="team" style={{backgroundImage: `linear-gradient(to right bottom, rgba(64, 68, 70, 0.45), rgba(63, 81, 181, 0.17)), url(${TeamCover})`}}>
            <HeadingComponent title="Teams" />
            <div className="container">
                <div className="row mx-0">
                    <div className="col-md-12">
                        <div className="team-wrapper">
                            {teams.map(({name, role, link, image},index) => <TeamCard key={index} image={image} name={name} role={role} link={link} /> )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamComponent
