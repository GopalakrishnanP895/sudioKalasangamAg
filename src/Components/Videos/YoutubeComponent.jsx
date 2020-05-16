import React from 'react'
import YouTube from 'react-youtube';

function YoutubeComponent({videoId}) {
    const opts = {
        playerVars: {
          autoplay: 0,
          fs: 0,
          disablekb: 1,
          controls: 1,
          modestbranding: 1
        },
    };

    return (
        <div className="video-card-item">
            <YouTube videoId={videoId} opts={opts} className="youtube-cust" />;
        </div>
    )
}

export default YoutubeComponent
