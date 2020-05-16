import React from 'react'

function GalleryLightbox({picture, id}) {
    return (
        <figure className="gallery-item">
            <a href={picture} data-lightbox={id}><img src={picture} alt="Gallery" className="gallery-img"/></a>
        </figure>
    )
}

export default GalleryLightbox
