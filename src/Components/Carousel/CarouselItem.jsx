import React from 'react'

import CarouselCaption from './CarouselCaption'

function CarouselItem({active, caption, logo, style}) {
    return (
        <div className={active ?"carousel-item active" : "carousel-item"} style={style}>
            <CarouselCaption logo={logo} caption={caption} />
        </div>
    )
}

export default CarouselItem
