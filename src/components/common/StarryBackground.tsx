'use client';

import { useMemo } from 'react';

interface StarryBackgroundProps {
  starCount?: number;
  largeStarCount?: number;
  className?: string;
  constellationMode?: boolean;
}

interface Star {
  id: string;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
  size: 'small' | 'medium' | 'large';
  brightness: 'dim' | 'normal' | 'bright';
}

interface Constellation {
  id: string;
  name: string;
  stars: Array<{
    x: number;
    y: number;
    size: 'small' | 'medium' | 'large';
    brightness: 'dim' | 'normal' | 'bright';
  }>;
  connections: Array<[number, number]>;
  // Animation properties for floating movement
  floatX?: number;
  floatY?: number;
  floatDuration?: number;
  floatDelay?: number;
}

export default function StarryBackground({
  starCount = 35,
  largeStarCount = 10,
  className = '',
  constellationMode = true,
}: StarryBackgroundProps) {
  // All 7 constellations with floating animation properties
  const constellations = useMemo(
    (): Constellation[] => [
      {
        id: 'ursa-major',
        name: 'Ursa Major',
        floatX: 35,
        floatY: 25,
        floatDuration: 16,
        floatDelay: 0,
        stars: [
          { x: 0, y: 0, size: 'small', brightness: 'bright' }, // Base position - will be randomized
          { x: 5, y: -2, size: 'small', brightness: 'normal' },
          { x: 10, y: -4, size: 'small', brightness: 'normal' },
          { x: 15, y: -2, size: 'small', brightness: 'normal' },
          { x: 20, y: 0, size: 'small', brightness: 'bright' },
          { x: 25, y: 2, size: 'small', brightness: 'normal' },
          { x: 30, y: 4, size: 'small', brightness: 'bright' },
        ],
        connections: [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [3, 6],
        ],
      },
      {
        id: 'orion',
        name: 'Orion',
        floatX: -28,
        floatY: 20,
        floatDuration: 18,
        floatDelay: 2,
        stars: [
          { x: 0, y: 0, size: 'small', brightness: 'bright' },
          { x: 3, y: 2, size: 'small', brightness: 'bright' },
          { x: 6, y: 4, size: 'small', brightness: 'bright' },
          { x: 1, y: -3, size: 'small', brightness: 'normal' },
          { x: 4, y: 7, size: 'small', brightness: 'normal' },
        ],
        connections: [
          [0, 1],
          [1, 2],
          [0, 3],
          [1, 4],
          [2, 4],
        ],
      },
      {
        id: 'cassiopeia',
        name: 'Cassiopeia',
        floatX: 22,
        floatY: -32,
        floatDuration: 14,
        floatDelay: 4,
        stars: [
          { x: 0, y: 0, size: 'small', brightness: 'bright' },
          { x: 4, y: -3, size: 'small', brightness: 'normal' },
          { x: 8, y: -1, size: 'small', brightness: 'bright' },
          { x: 12, y: 2, size: 'small', brightness: 'normal' },
          { x: 16, y: 4, size: 'small', brightness: 'bright' },
        ],
        connections: [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [0, 4],
        ],
      },
      {
        id: 'ursa-minor',
        name: 'Ursa Minor',
        floatX: -18,
        floatY: -26,
        floatDuration: 20,
        floatDelay: 6,
        stars: [
          { x: 0, y: 0, size: 'small', brightness: 'bright' },
          { x: 3, y: -2, size: 'small', brightness: 'normal' },
          { x: 6, y: -4, size: 'small', brightness: 'normal' },
          { x: 9, y: -6, size: 'small', brightness: 'normal' },
          { x: 12, y: -8, size: 'small', brightness: 'bright' },
        ],
        connections: [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
        ],
      },
      {
        id: 'scorpius',
        name: 'Scorpius',
        floatX: 40,
        floatY: 30,
        floatDuration: 22,
        floatDelay: 8,
        stars: [
          { x: 0, y: 0, size: 'small', brightness: 'bright' },
          { x: 2, y: 2, size: 'small', brightness: 'normal' },
          { x: 4, y: 4, size: 'small', brightness: 'normal' },
          { x: 6, y: 6, size: 'small', brightness: 'bright' },
        ],
        connections: [
          [0, 1],
          [1, 2],
          [2, 3],
        ],
      },
      {
        id: 'leo',
        name: 'Leo',
        floatX: -30,
        floatY: 35,
        floatDuration: 19,
        floatDelay: 10,
        stars: [
          { x: 0, y: 0, size: 'small', brightness: 'bright' },
          { x: 3, y: -2, size: 'small', brightness: 'normal' },
          { x: 6, y: 0, size: 'small', brightness: 'normal' },
          { x: -1, y: 3, size: 'small', brightness: 'dim' },
        ],
        connections: [
          [0, 1],
          [0, 2],
          [1, 3],
          [2, 3],
        ],
      },
      {
        id: 'gemini',
        name: 'Gemini',
        floatX: 26,
        floatY: -22,
        floatDuration: 17,
        floatDelay: 12,
        stars: [
          { x: 0, y: 0, size: 'small', brightness: 'bright' },
          { x: 3, y: 2, size: 'small', brightness: 'bright' },
          { x: -2, y: -2, size: 'small', brightness: 'normal' },
          { x: 5, y: 4, size: 'small', brightness: 'normal' },
        ],
        connections: [
          [0, 1],
          [0, 2],
          [1, 3],
          [2, 3],
        ],
      },
    ],
    []
  );

  // Generate random positions for constellations and calculate absolute star positions
  const constellationData = useMemo(() => {
    return constellations.map((constellation) => {
      // Generate random base position for this constellation
      const baseX = Math.random() * 60 + 10; // 10-70% to avoid edges
      const baseY = Math.random() * 60 + 10; // 10-70% to avoid edges

      const stars: Star[] = constellation.stars.map((starData, starIndex) => {
        // Add random base position to relative positions
        const absoluteX = baseX + starData.x;
        const absoluteY = baseY + starData.y;

        return {
          id: `constellation-${constellation.id}-${starIndex}`,
          left: `${Math.max(5, Math.min(95, absoluteX))}%`, // Clamp between 5-95%
          top: `${Math.max(5, Math.min(95, absoluteY))}%`, // Clamp between 5-95%
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
          size: starData.size,
          brightness: starData.brightness,
        };
      });

      return {
        constellation,
        stars,
      };
    });
  }, [constellations]);

  // Generate background stars
  const backgroundStars = useMemo(() => {
    const count = constellationMode ? Math.max(20, starCount - 15) : starCount;
    return Array.from({ length: count }).map((_, i) => ({
      id: `bg-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }));
  }, [starCount, constellationMode]);

  const getStarStyles = (star: Star) => {
    const sizeClasses = {
      small: 'w-1 h-1',
      medium: 'w-2 h-2',
      large: 'w-3 h-3',
    };

    const brightnessClasses = {
      dim: 'opacity-40',
      normal: 'opacity-65',
      bright: 'opacity-85',
    };

    return `absolute ${sizeClasses[star.size]} ${brightnessClasses[star.brightness]} rounded-full animate-pulse bg-white dark:bg-white`;
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Add MORE DRAMATIC floating animation styles */}
      <style jsx>{`
        ${constellations.map(constellation => `
          @keyframes float-${constellation.id} {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(${constellation.floatX!}px, ${constellation.floatY!}px) rotate(3deg); }
            50% { transform: translate(${constellation.floatX! * 0.6}px, ${constellation.floatY! * 0.7}px) rotate(-2deg); }
            75% { transform: translate(${constellation.floatX! * 0.2}px, ${constellation.floatY! * 0.8}px) rotate(1.5deg); }
          }
        `).join('')}
      `}</style>

      {/* Floating Constellation Containers - Complete constellations (stars + lines) */}
      {constellationMode &&
        constellationData.map(({ constellation, stars }) => (
          <div
            key={`container-${constellation.id}`}
            className="absolute inset-0"
            style={{
              animation: `float-${constellation.id} ${constellation.floatDuration}s ease-in-out infinite`,
              animationDelay: `${constellation.floatDelay}s`,
            }}
          >
            {/* Constellation Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {constellation.connections.map(
                ([starIndex1, starIndex2], lineIndex) => {
                  const star1 = stars[starIndex1];
                  const star2 = stars[starIndex2];

                  return (
                    <line
                      key={`line-${constellation.id}-${lineIndex}`}
                      x1={star1.left}
                      y1={star1.top}
                      x2={star2.left}
                      y2={star2.top}
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="2,3"
                      className="dark:stroke-white/35"
                    />
                  );
                }
              )}
            </svg>

            {/* Constellation Stars */}
            {stars.map((star) => (
              <div
                key={star.id}
                className={getStarStyles(star)}
                style={{
                  left: star.left,
                  top: star.top,
                  animationDelay: star.animationDelay,
                  animationDuration: star.animationDuration,
                }}
              />
            ))}
          </div>
        ))}

      {/* Background Stars */}
      {backgroundStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white dark:bg-white opacity-30 dark:opacity-40 rounded-full animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}

      {/* Accent Stars */}
      {Array.from({ length: largeStarCount }).map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute w-2 h-2 bg-primary-200 dark:bg-primary-300 opacity-25 dark:opacity-35 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
