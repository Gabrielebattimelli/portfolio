"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head"; // Import Head from Next.js

interface CustomVideoPlayerProps {
  src: string;
  poster: string;
  className?: string;
  trackSrc?: string;
  // Add properties for structured data
  name: string;
  description: string;
  uploadDate: string; // ISO 8601 format e.g., "2025-07-17T10:30:00+00:00"
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
                                                               src,
                                                               poster,
                                                               className = "",
                                                               trackSrc,
                                                               name,
                                                               description,
                                                               uploadDate,
                                                             }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // --- Structured Data for Google ---
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": poster,
    "uploadDate": uploadDate,
    "contentUrl": src,
    "embedUrl": src, // You can use the same URL if it's a direct link
  };
  // ------------------------------------

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleVideoClick = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
      <div
          className={`relative flex items-center justify-center bg-black overflow-hidden rounded-2xl shadow-lg aspect-video w-full max-w-xl ${className}`}
      >
        {/* Add the structured data script to the page's head */}
        <Head>
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
          />
        </Head>

        {!isPlaying && (
            <>
              <Image
                  src={poster}
                  alt="Video preview"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                  sizes="100vw"
                  priority
              />
              <button
                  onClick={handlePlay}
                  className="absolute z-10 flex items-center justify-center w-20 h-20 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition"
                  style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                  aria-label="Play video"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.7" />
                  <polygon points="20,16 36,24 20,32" fill="#111" />
                </svg>
              </button>
            </>
        )}
        <video
            ref={videoRef}
            src={src}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl ${isPlaying ? "block" : "hidden"}`}
            controls={false}
            preload="none"
            onEnded={() => setIsPlaying(false)}
            poster={poster}
            onClick={handleVideoClick}
        >
          {trackSrc && (
              <track
                  src={trackSrc}
                  kind="subtitles"
                  srcLang="en"
                  label="English"
              />
          )}
          Your browser does not support the video tag.
        </video>
      </div>
  );
};

export default CustomVideoPlayer;
