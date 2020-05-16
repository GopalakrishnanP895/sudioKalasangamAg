import React from 'react'

function EventsSlide({image,name,time,location,description,link}) {
    return (
        <div className="events-wrapper" style={{backgroundImage: `linear-gradient(to right bottom, rgba(161, 168, 173, 0), rgba(21, 22, 23, 0.32)), url(${image})`}}>
            <div className="events-wrapper--name">
                <h4>{name}</h4>
            </div>
            <div className="events-wrapper--time">
                <p><i className="fa fa-calendar-times-o mr-3"></i>{time}</p>
            </div>
            <div className="events-wrapper--location">
                <p><i class="fa fa-map-marker mr-3"></i>{location}</p>
            </div>
            <div className="events-wrapper--description">
                <p>{description}</p>
            </div>
            <div className="events-wrapper--join">
                <button className="btn btn-success">Add to your calendar</button>
            </div>
        </div>
    )
}

export default EventsSlide
