
import React from 'react'

export const VideoBackground = () => {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline poster="/videos/marvel_intro.mp4">
          <source src="/videos/marvel_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-overlay"></div>
    </>
  )
}
