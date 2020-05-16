import React from 'react'

function CarouselNavigtion({text, direction }) {
    return (
        <div>
            <a className={`carousel-control-${direction}`} href="#carouselExampleControls" role="button" data-slide={`${direction}`}>
                <span className={`carousel-control-${direction}-icon`}></span>
                <span className="sr-only">{text}</span>
            </a>
        </div>
    )
}

export default CarouselNavigtion
