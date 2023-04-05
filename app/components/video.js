'use client'
import React from "react";
import YouTube from "react-youtube";


export default function YoutubeVideo () {
   
    const opts = {
      height: "500",
      width: "560",
      playerVars: {
      autoplay: 0,
      },
    };
  
    return (
    
      <div className="flex flex-col items-center justify-between w-full max-w-2xl mx-auto bg-purple-600 px-7 py-7 lg:px-14 lg:py-14 rounded-xl">
        <YouTube
        className="flex flex-wrap items-center justify-between"
        videoId="nbRqT09HBJo" 
            opts={opts}  />
      </div>

    );
  }
  

