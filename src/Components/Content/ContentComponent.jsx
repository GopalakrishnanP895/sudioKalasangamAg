import React from 'react'

import './ContentStyles.scss'

function ContentComponent({content}) {
    return (
        <div className="wrapper--content">
            <p>{content}</p>
        </div>
    )
}

export default ContentComponent
