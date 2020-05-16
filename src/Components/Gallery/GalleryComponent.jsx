import React from 'react'

import Pic1 from '../../Images/Gallery/1.jpg'
import Pic2 from '../../Images/Gallery/2.jpg'
import Pic3 from '../../Images/Gallery/3.jpg'
import Pic4 from '../../Images/Gallery/4.jpg'
import Pic8 from '../../Images/Gallery/8.jpg'
import Pic10 from '../../Images/Gallery/10.jpg'
import Pic28 from '../../Images/Gallery/28.jpg'
import Pic21 from '../../Images/Gallery/21.jpg'
import Pic17 from '../../Images/Gallery/17.jpg'
import Pic12 from '../../Images/Gallery/12.jpg'
import Pic13 from '../../Images/Gallery/13.jpg'
import Pic16 from '../../Images/Gallery/16.jpg'
import Pic29 from '../../Images/Gallery/29.jpg'
import Pic18 from '../../Images/Gallery/18.jpg'
import Pic19 from '../../Images/Gallery/19.jpg'
import Pic14 from '../../Images/Gallery/14.jpg'
import Pic15 from '../../Images/Gallery/15.jpg'
import Pic23 from '../../Images/Gallery/23.jpg'

import './GalleryStyles.scss'
import GalleryLightbox from './GalleryLightbox'
import HeadingComponent from '../Heading/HeadingComponent'
import SecondaryHeading from '../Heading/SecondaryHeading'

let galleryImages = [Pic1,Pic2,Pic3,Pic4,Pic8,Pic10,Pic28,Pic21,Pic17,Pic12,Pic13,Pic16,Pic29,Pic18,Pic19,Pic14,Pic15,Pic23]

function GalleryComponent() {
    return (
        <section id="album" className="album">
            <HeadingComponent title="Gallery" />
            <SecondaryHeading content="They say a picture speaks a thousand words. Take a scroll through our memory lane." />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="gallery">
                            {galleryImages.map((image,idx) => <GalleryLightbox key={idx} id={idx} picture={image} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GalleryComponent
