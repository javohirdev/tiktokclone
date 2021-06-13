import React, { useRef, useState } from 'react';
import Videosidebar from './Videosidebar';
import Videofooter from './Videofooter';

function VideoMain({ page, description, music, likes, comments, shares, url }) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const videoPlay = () => {
        if(play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return(
        <div className="videoMain">
            <div className="videos">
                <video
                    className="video__player"
                    loop
                    src={url}
                    ref={videoRef}
                    onClick={videoPlay}
                />
                <Videosidebar likes={likes} comments={comments} shares={shares} />
                <Videofooter page={page} description={description} music={music} />
            </div>
        </div>
    )
}

export default VideoMain;