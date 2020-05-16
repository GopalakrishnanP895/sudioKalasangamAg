import React from 'react'

import Pattern from '../../Images/pattern.svg'

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './EventsStyles.scss'
import SecondaryHeading from '../Heading/SecondaryHeading'
import EventsSlide from './EventsSlide';

let eventsList = [
    {
        name: "Chritmas Party",
        time: "Thursday, 21 April 2020",
        location: "United Kingdom",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde adipisci aliquid libero inventore quos error eligendi placeat quidem tempore doloremque.",
        link: "www.facebook.com"
    },
    {
        name: "Black Friday",
        time: "Thursday, 21 April 2020",
        location: "United Kingdom",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde adipisci aliquid libero inventore quos error eligendi placeat quidem tempore doloremque.",
        link: "www.facebook.com"
    }
]

function EventsComponent() {
    return (
        <section className="events">
            <SecondaryHeading content="Upcomming Events" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel items={1}
                                        className="owl-theme"  
                                        nav
                                        dots={false}
                                        margin={50}
                                        navClass={['owl-prev','owl-next']}
                                        navText={['<i style="border-radius:50%;font-size:3rem;padding:10px;background-color:#000;color:#fff;" class="fa fa-arrow-left"></i>','<i style="border-radius:50%;font-size:3rem;padding:10px;background-color:#000;color:#fff;" class="fa fa-arrow-right"></i>']}
                                         >  
                            {eventsList.map(({name, time, location, description, link}) => (
                                <EventsSlide 
                                    image={Pattern} 
                                    name={name}
                                    time={time}
                                    location={location}
                                    description={description}
                                    link={link} />
                            ) )}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsComponent
