import React from 'react'

import Dance from '../../Images/Gallery/25.jpg'

import './AboutStyles.scss'
import ImageComponent from '../Image/ImageComponent'
import ContentComponent from '../Content/ContentComponent'
import HeadingComponent from '../Heading/HeadingComponent'

function AboutComponent() {
    let contents = [
        "StudioKalasangamAG is a group of vivacious individuals from Erlangen, Germany bonded closely together by their common love for dancing. The group spearheaded by Anushree Gour started making its presence felt in 2017. Three years since its inception, we have now grown to a dream team consisting of dancers, choreographers and editors. We started spreading our wings by performing in cities close to Erlangen and gradually moving on to setting footprints all across Germany.",
        "StudioKalasangamAG functions on the cornerstone principle of constantly exploring different dance forms - from Bollywood to Hip Hop, all the while staying true to our roots. We strive to bring various Indian folk forms to the center stage, performing Bhangra, Dandiya, Ghumar and many more for the German audience and introducing them to the wide and kaleidoscopic world of Indian dancing.",
        "The team takes a lot of pride in sharing their hard work and welcoming everyone who wishes to dance with open arms. To that end, we conduct workshops for all age groups on all the dance forms we work on, thus throwing the door wide open for anyone who has ever dreamt of dancing. For a quick sneak peek into our workshops and the crazy fun during our rehearsals"
    ]
    return (
        <section id="about" className="about">
            <HeadingComponent title="About Us" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-wrapper">
                            <ImageComponent img={Dance} alt="Kalasangam-dance" />
                            {contents.map( (content,idx) => <ContentComponent key={idx} content={content} /> )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent
