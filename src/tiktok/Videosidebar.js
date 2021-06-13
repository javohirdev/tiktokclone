import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function Videosidebar({ likes, comments, shares }) {
    return(
        <div className="videoSidebar">
            <div className="buttons">
                <FavoriteIcon className="icon" />
                <p>{likes}</p>
            </div>
            <div className="buttons">
                <MessageIcon className="icon" />
                <p>{comments}</p>
            </div>
            <div className="buttons">
                <ShareIcon className="icon" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default Videosidebar;