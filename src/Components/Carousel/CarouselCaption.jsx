import React from 'react'

function CarouselCaption({logo, caption}) {
    return (
        <div>
            <div className="carousel-caption d-block d-md-none">
                <img src={logo} alt="Logo" width="100%" />
                {/* <div className="mobile">
                    <h6><span className="mobile_heading">{caption}</span></h6>
                </div> */}
            </div>
            <div className="carousel-caption d-none d-md-block">
                <img src={logo} alt="Logo" width="360px" />
                <h5>{caption}</h5>
            </div>
        </div>
    )
}

export default CarouselCaption
