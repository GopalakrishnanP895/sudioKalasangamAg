import React from 'react'

function SecondaryButton({link, name}) {
    return (
        <div className="secondary-button">
            <a className="btn btn-primary" href={link}>{name}</a>
        </div>
    )
}

export default SecondaryButton
