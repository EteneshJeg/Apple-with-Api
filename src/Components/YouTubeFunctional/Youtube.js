import React, { useState, useEffect } from "react";
import "./Youtube.css";

const ApiKey = process.env.REACT_APP_API_KEY;



function Youtube() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  // or starts 

  // useEffect(() => {
  //   fetch(
  //    ApiKey
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setYoutubeVideos(data.items);
  //     })
  //     .catch((err)=> {
  //       console.log(err.message)
  //     })
  // }, []);


  // or ends and another starts

async function fetchData() {
  try{
    const res = await fetch(ApiKey);
    const data = await res.json();

    setYoutubeVideos(data.items);
  } catch(error) {
    console.log(error)
  }
}

useEffect(()=> {
  fetchData();
},[]);

// or ends



  

  return (
  <section className='youtubeVideosWrapper'>
    <div className="allVideosWrapper">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                <div className="title-wrapper">
                    <br />
                    <h1>Latest Videos</h1>
                    <br />
                    
                </div>
            </div>
        {youtubeVideos?.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img src={singleVideo.snippet.thumbnails.high.url} alt="thumbnails" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
            )
              return videoWrapper;
        })}
           </div>
        </div>
    </div>
  </section>
  )
}

export default Youtube;
