import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Videofooter({ page, description, music }) {
    return(
        <div className="videoFooter">
            <div className="footer__text">
                <h4>@{page}</h4>
                <p>{description}</p>
            </div>
            <div className="footer__music">
                <p><MusicNoteIcon /> {music}</p>
            </div>
        </div>
    )
}

export default Videofooter;