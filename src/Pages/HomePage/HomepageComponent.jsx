import React from 'react'

import NavbarComponent from '../../Components/Navbar/NavbarComponent'
import CarouselComponent from '../../Components/Carousel/CarouselComponent'
import AboutComponent from '../../Components/About/AboutComponent'
import FounderComponent from '../../Components/Founder/FounderComponent'
import TeamComponent from '../../Components/Teams/TeamComponent'
import ContactComponent from '../../Components/Contact/ContactComponent'
import FooterComponent from '../../Components/Footer/FooterComponent'
import VideosComponent from '../../Components/Videos/VideosComponent'
import GalleryComponent from '../../Components/Gallery/GalleryComponent'
import EventsComponent from '../../Components/Events/EventsComponent'

function HomepageComponent() {
    return (
        <div>
            <NavbarComponent />
            <main>
                <CarouselComponent />
                <AboutComponent />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#a2d9ff" fill-opacity="1" d="M0,256L30,224C60,192,120,128,180,117.3C240,107,300,149,360,170.7C420,192,480,192,540,160C600,128,660,64,720,64C780,64,840,128,900,176C960,224,1020,256,1080,240C1140,224,1200,160,1260,160C1320,160,1380,224,1410,256L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                </svg>
                <FounderComponent />
                <TeamComponent />
                <GalleryComponent />
                <EventsComponent />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#a2d9ff" fill-opacity="1" d="M0,256L30,234.7C60,213,120,171,180,170.7C240,171,300,213,360,218.7C420,224,480,192,540,160C600,128,660,96,720,74.7C780,53,840,43,900,64C960,85,1020,139,1080,170.7C1140,203,1200,213,1260,234.7C1320,256,1380,288,1410,304L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
                <VideosComponent />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,101.3C384,128,480,160,576,192C672,224,768,256,864,240C960,224,1056,160,1152,112C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <ContactComponent />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#a2d9ff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,122.7C672,149,768,235,864,245.3C960,256,1056,192,1152,160C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                
                <FooterComponent />
            </main>
        </div>
    )
}

export default HomepageComponent
