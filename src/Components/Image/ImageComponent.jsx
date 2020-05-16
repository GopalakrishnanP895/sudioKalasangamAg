import React from 'react'

import './ImageStyles.scss'
import SocialMediaComponent from '../Social/SocialMediaComponent'

function ImageComponent({img,alt}) {
    return (
        <div className="wrapper--img">
            <img src={img} alt={alt} className="img-fluid img-resp"/>
            <SocialMediaComponent />
        </div>
    )
}

export default ImageComponent
