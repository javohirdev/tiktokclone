import React, { useState, useEffect } from 'react';
import './tiktok/styles/style.css';
import NavSec from './tiktok/NavSec';
import VideoMain from './tiktok/VideoMain';
import db from './tiktok/firebase/config';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
  return (
    <>
      <NavSec />
      <div className="tiktokVideos">
          {videos.map(
            ({ page, description, music, likes, comments, shares, url }) => (
              <VideoMain
                page={page}
                description={description}
                music={music}
                likes={likes}
                comments={comments}
                shares={shares}
                url={url}
              />
            )
          )}
      </div>
    </>
  );
}

export default App;
