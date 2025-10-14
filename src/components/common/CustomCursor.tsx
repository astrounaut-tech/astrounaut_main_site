'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop)
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    const interactive = () =>
      document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );

    const addHover = () => {
      interactive().forEach((el) => {
        el.addEventListener('mouseenter', hoverOn);
        el.addEventListener('mouseleave', hoverOff);
      });
    };
    const removeHover = () => {
      interactive().forEach((el) => {
        el.removeEventListener('mouseenter', hoverOn);
        el.removeEventListener('mouseleave', hoverOff);
      });
    };
    const hoverOn = () => setIsHovering(true);
    const hoverOff = () => setIsHovering(false);

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addHover, { once: true });
    } else {
      addHover();
    }

    // RAF loop for smooth, cross-browser transforms
    let rafId: number;
    const tick = () => {
      // trail easing
      trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 8}px, ${
          pos.current.y - 8
        }px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x - 16}px, ${
          trailPos.current.y - 16
        }px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      removeHover();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 border-primary-600 transition-transform duration-150 ${
            isHovering ? 'scale-150 bg-primary-600/20' : 'scale-100'
          }`}
        />
      </div>

      <div
        ref={trailRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full border border-primary-600/30 transition-transform duration-300 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>

      <style jsx global>{`
        /* Hide native cursor (set explicitly on html/body for Firefox/Safari) */
        html,
        body {
          cursor: none !important;
        }

        /* Keep text cursor where needed */
        input[type='text'],
        input[type='email'],
        input[type='password'],
        textarea,
        [contenteditable='true'] {
          cursor: text !important;
        }

        /* On touch devices keep default cursor */
        @media (pointer: coarse) {
          html,
          body {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}