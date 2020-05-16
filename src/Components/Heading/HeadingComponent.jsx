import React from 'react'

import './HeadingStyles.scss'

function HeadingComponent({title}) {
    return (
        <div className="primary--heading">
            <h2>{title}</h2>
        </div>
    )
}

export default HeadingComponent
