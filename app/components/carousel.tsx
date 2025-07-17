// app/components/carousel.tsx

"use client";
import CustomVideoPlayer from "@/app/components/CustomVideoPlayer";
import { useState, useRef, useEffect } from "react";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // FIX: Add the required props to the video players in this array
    const items = [
        <CustomVideoPlayer
            src="https://video.gabrielebattimelli.com/LinkedInvideo%201.mp4"
            poster="https://video.gabrielebattimelli.com/Screenshot1.png"
            name="Professional Reel Video 1"
            description="A short professional video clip."
            uploadDate="2025-07-16T09:00:00+00:00"
        />,
        <CustomVideoPlayer
            src="https://video.gabrielebattimelli.com/LinkedInvideo.mp4"
            poster="https://video.gabrielebattimelli.com/Screenshot.png"
            name="Professional Reel Video 2"
            description="A second short professional video clip."
            uploadDate="2025-07-17T09:00:00+00:00"
        />,
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth);
                setActiveIndex(index);
            }
        };

        const ref = carouselRef.current;
        ref?.addEventListener("scroll", handleScroll);
        return () => ref?.removeEventListener("scroll", handleScroll);
    }, []);

    // FIX: Ensure this return statement exists and is correct
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div
                ref={carouselRef}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full flex items-center justify-center snap-start">
                        {item}
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? "bg-gray-600 scale-125" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
