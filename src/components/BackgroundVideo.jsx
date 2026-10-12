import React, { useRef, useState, useEffect } from 'react';

export const BackgroundVideo = () => {
  const videoA = useRef(null);
  const videoB = useRef(null);
  const [activeLayer, setActiveLayer] = useState('A');
  const isTransitioning = useRef(false);

  useEffect(() => {
    const vA = videoA.current;
    const vB = videoB.current;
    if (!vA || !vB) return;

    vA.muted = true;
    vB.muted = true;

    // Start primary video layer
    const startPlayback = () => {
      vA.play().catch((err) => {
        console.warn('Video A autoplay handled:', err);
      });
    };

    startPlayback();

    const crossfadeDuration = 0.8; // 800ms natural crossfade

    const handleTimeUpdateA = () => {
      if (
        !isTransitioning.current &&
        vA.duration &&
        vA.currentTime >= vA.duration - crossfadeDuration
      ) {
        isTransitioning.current = true;
        vB.currentTime = 0;
        vB.play()
          .then(() => {
            setActiveLayer('B');
            setTimeout(() => {
              vA.pause();
              vA.currentTime = 0;
              isTransitioning.current = false;
            }, crossfadeDuration * 1000);
          })
          .catch(() => {
            isTransitioning.current = false;
          });
      }
    };

    const handleTimeUpdateB = () => {
      if (
        !isTransitioning.current &&
        vB.duration &&
        vB.currentTime >= vB.duration - crossfadeDuration
      ) {
        isTransitioning.current = true;
        vA.currentTime = 0;
        vA.play()
          .then(() => {
            setActiveLayer('A');
            setTimeout(() => {
              vB.pause();
              vB.currentTime = 0;
              isTransitioning.current = false;
            }, crossfadeDuration * 1000);
          })
          .catch(() => {
            isTransitioning.current = false;
          });
      }
    };

    vA.addEventListener('timeupdate', handleTimeUpdateA);
    vB.addEventListener('timeupdate', handleTimeUpdateB);

    // Fallback: If ended fires before crossfade
    vA.addEventListener('ended', () => {
      if (activeLayer === 'A') {
        vB.currentTime = 0;
        vB.play().then(() => setActiveLayer('B'));
      }
    });

    vB.addEventListener('ended', () => {
      if (activeLayer === 'B') {
        vA.currentTime = 0;
        vA.play().then(() => setActiveLayer('A'));
      }
    });

    return () => {
      vA.removeEventListener('timeupdate', handleTimeUpdateA);
      vB.removeEventListener('timeupdate', handleTimeUpdateB);
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoA}
        className={`bg-video bg-video-layer ${activeLayer === 'A' ? 'active' : ''}`}
        muted
        playsInline
        preload="auto"
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={videoB}
        className={`bg-video bg-video-layer ${activeLayer === 'B' ? 'active' : ''}`}
        muted
        playsInline
        preload="auto"
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay" />
    </div>
  );
};
