"use client";

import { useRef } from "react";

export default function VideoPlayer() {
    const videoOverlayRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleOverlayClick = () => {
        if (videoOverlayRef.current) {
            videoOverlayRef.current.style.display = "none";
        }
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="relative overflow-hidden rounded-xl border bg-white shadow-lg">
            <div className="aspect-video relative">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/video-placeholder.jpg"
                    controls
                >
                    <source src="/chilling.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div
                    ref={videoOverlayRef}
                    className="absolute inset-0 flex items-center justify-center bg-gray-100/80 hover:bg-gray-100/60 transition-colors cursor-pointer"
                    onClick={handleOverlayClick}
                >
                    <div className="text-center">
                        <div className="mb-4 flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-16 w-16 text-indigo-300 transition-colors"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg>
                        </div>
                        <p className="text-xl font-medium text-gray-900">Watch me use the app</p>
                        <p className="mt-2 text-gray-500">See how I slack off professionally with this AI tool</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
