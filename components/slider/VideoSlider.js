"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


const VideoSlider = () => {
  const swiperRef = useRef(null);
  // Put your files in /public/videos and reference with leading slash
  const videos = [
    { id: 1, src: "/videos/video1.mp4" },
    { id: 2, src: "/videos/video2.mp4" },
    { id: 3, src: "/videos/video3.mp4" },
  ];
  // When a video ends → go to next slide
  const handleVideoEnd = () => {
    const swiper = swiperRef.current;
    if (swiper) swiper.slideNext();
  };
  // Play only the active slide's video; pause/reset others
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    const syncVideos = () => {
      swiper.slides.forEach((slide, i) => {
        const vid = slide.querySelector("video");
        if (!vid) return;
        if (i === swiper.activeIndex) {
          vid.muted = true; // keep autoplay reliable
          const p = vid.play?.();
          if (p?.catch) p.catch(() => {});
        } else {
          vid.pause?.();
          try { vid.currentTime = 0; } catch (_) {}
        }
      });
    };
    // initial sync once swiper is ready
    syncVideos();
    swiper.on("slideChange", syncVideos);
    return () => swiper.off("slideChange", syncVideos);
  }, []);
  return (
    <div className="video-slider-shell">
      <div className="video-frame">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          slidesPerView={1}
          onSwiper={(s) => (swiperRef.current = s)}
          className="video-swiper"
        >
          {videos.map((v) => (
            <SwiperSlide key={v.id}>
              <div className="video-container">
                <video
                  src={v.src}
                  className="video-el"
                  playsInline
                  autoPlay
                  muted
                  controls={false}
                  onEnded={handleVideoEnd}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Component-scoped styles (styled-jsx) */}
      <style jsx>{`
        .video-slider-shell {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 16px; /* space around like HeroSlider sections */
          background: #F6F7FB; /* subtle section bg */
        }
        .video-frame {
          position: relative;
          width: 90%; /* large but not full-width width: min(100%, 1000px); */
          height:  900px; /* big, responsive clamp(340px, 60vh, 620px); */
          border-radius: 20px;
          box-shadow: 0 16px 40px rgba(17, 24, 39, 0.2);
          background: #000;
          overflow: hidden;
        }
        .video-container,
        :global(.video-swiper),
        :global(.swiper),
        :global(.swiper-wrapper),
        :global(.swiper-slide) {
          width: 100%;
          height: 100%;
        }
        .video-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }
        .video-el {
          width: 100%;
          height: 100%;
          object-fit: cover; /* cinematic fill */
        }
        /* Position Swiper default arrows at left/right, vertically centered */
        .video-frame :global(.swiper-button-prev),
        .video-frame :global(.swiper-button-next) {
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          backdrop-filter: blur(2px);
          transition: background 0.2s ease;
        }
        .video-frame :global(.swiper-button-prev:hover),
        .video-frame :global(.swiper-button-next:hover) {
          background: rgba(0, 0, 0, 0.9);
        }
        .video-frame :global(.swiper-button-prev),
        .video-frame :global(.swiper-button-next) {
          top: 50%;
          transform: translateY(-50%);
        }
        .video-frame :global(.swiper-button-prev) {
          left: 12px;
        }
        .video-frame :global(.swiper-button-next) {
          right: 12px;
        }
        /* Make default arrow icons a bit bolder */
        .video-frame :global(.swiper-button-prev::after),
        .video-frame :global(.swiper-button-next::after) {
          font-size: 18px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};
export default VideoSlider;
