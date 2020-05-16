import React from 'react'

import Logo from '../../Images/logo.png'
import Carousel10 from '../../Images/Gallery/10.jpg'
import Carousel12 from '../../Images/Gallery/12.jpg'
import Carousel1 from '../../Images/Gallery/1.jpg'

import './CarouselStyles.scss'

import CarouselNavigtion from './CarouselNavigtion'
import CarouselItem from './CarouselItem'


let carouselList = [
    {
        caption: "StudioKalasangamAG",
        logo: Logo,
        style: {
            background: `linear-gradient(to right bottom, rgba(45, 224, 125, 0.4), rgba(222, 23, 23, 0.4)), url(${Carousel10})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    },
    {
        caption: "Feel Your Movement",
        logo: Logo,
        style: {
            background: `linear-gradient(to right bottom, rgba(45, 224, 125, 0.4), rgba(222, 23, 23, 0.4)), url(${Carousel12})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    },
    {
        caption: "Enjoy Your Every Movement",
        logo: Logo,
        style: {
            background: `linear-gradient(to right bottom, rgba(45, 224, 125, 0.4), rgba(222, 23, 23, 0.4)), url(${Carousel1})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    }
]

function CarouselComponent() {
    return (
        <section id="home" className="home">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {carouselList.map(({caption, logo, style},index) => <CarouselItem key={index} active={index===0?"true":null} caption={caption} logo={logo} style={style} />)}
                </div>
                <CarouselNavigtion text="Previous" direction="prev" />
                <CarouselNavigtion text="Next" direction="next" />
            </div>
        </section>
    )
}

export default CarouselComponent
