import React from 'react'

import './VideosStyles.scss'

import YoutubeComponent from './YoutubeComponent'
import HeadingComponent from '../Heading/HeadingComponent'
import SecondaryHeading from '../Heading/SecondaryHeading'

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SecondaryButton from '../Heading/SecondaryButton'

let videosList = [
    "GgQYAPetFsE",
    "jsyj-bwGlDg",
    "Pag5wEslkYU"
]

function VideosComponent() {
    return (
        <section id="video" className="video">
            <HeadingComponent title="Videos" />
            <SecondaryHeading content="What better way to introduce ourselves than to let our work do the talking. Here's the team setting stage on fire with panache." />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="video-card">
                            <OwlCarousel items={1}
                                        className="owl-theme"  
                                        nav
                                        dots={false}
                                        video={true}
                                        margin={50}
                                        navClass={['owl-prev','owl-next']}
                                        navText={['<i style="font-size:3rem;padding:10px;background-color:#a2d9ff;color:#fff;box-shadow:20px 20px 60px #8ab8d9,-20px -20px 60px #bafaff;" class="fa fa-arrow-left" aria-hidden="true"></i>','<i style="font-size:3rem;padding:10px;background-color:#a2d9ff;color:#fff;box-shadow:20px 20px 60px #8ab8d9,-20px -20px 60px #bafaff;" class="fa fa-arrow-right" aria-hidden="true"></i>']}
                                        autoplayTimeout={3000} 
                                        autoplayHoverPause={true} 
                                        loop >  
                                {videosList.map((video,idx)=> <YoutubeComponent key={idx} videoId={video} />)}
                            </OwlCarousel>
                        </div>
                        <SecondaryButton name="View More on Youtube" link="https://www.youtube.com" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideosComponent
