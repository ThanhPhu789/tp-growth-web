import React from 'react';

interface TPLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  width?: number | string;
  height?: number | string;
}

export default function TPLogo({
  className = '',
  size = 'md',
  width,
  height,
}: TPLogoProps) {
  // Map sizes to responsive tailwind classes or explicit dimensions
  const sizeMap = {
    sm: { w: 'w-8', h: 'h-8' },
    md: { w: 'w-10', h: 'h-10' },
    lg: { w: 'w-14', h: 'h-14' },
    xl: { w: 'w-20', h: 'h-20' },
    custom: { w: '', h: '' },
  };

  const dims = size === 'custom' ? { width, height } : {};
  const sizeClasses = size !== 'custom' ? `${sizeMap[size].w} ${sizeMap[size].h}` : '';

  return (
    <svg
      id="tp-growth-logo"
      viewBox="0 0 500 400"
      className={`${sizeClasses} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...dims}
    >
      <defs>
        {/* Blue Gradient for T and Pillars, matched with brand colors */}
        <linearGradient id="tpBlueGrad" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>

        {/* Orange-Red Gradient for the Arrow and top of P */}
        <linearGradient id="tpOrangeGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        {/* Custom split-gradient for P to transition from orange back to blue at bottom split */}
        <linearGradient id="tpLoopGrad" x1="280" y1="80" x2="350" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="45%" stopColor="#EA580C" />
          <stop offset="85%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Skewed core grid to perfectly reproduce the original logo's athletic slant */}
      <g transform="translate(60, 20) skewX(-14)">
        {/* ========================================================
            1. THE "T" HORIZONTAL CAP
            ======================================================== */}
        <path
          d="M 60 80 H 260 C 265 80 270 85 270 91 V 110 C 270 116 265 121 260 121 H 130 V 135 H 60 Z"
          fill="url(#tpBlueGrad)"
          stroke="none"
        />

        {/* ========================================================
            2. THE "T" MAIN STEM & GROWTH PILLARS (Staircase Chart)
            ======================================================== */}
        {/* Leftmost Main Stem of T */}
        <rect
          x="60"
          y="126"
          width="48"
          height="164"
          rx="6"
          fill="url(#tpBlueGrad)"
        />

        {/* Pillar 1 (Shortest bar) */}
        <rect
          x="124"
          y="210"
          width="32"
          height="80"
          rx="5"
          fill="url(#tpBlueGrad)"
        />

        {/* Pillar 2 (Medium bar) */}
        <rect
          x="172"
          y="165"
          width="32"
          height="125"
          rx="5"
          fill="url(#tpBlueGrad)"
        />

        {/* Pillar 3 (Tallest bar, leads up to P) */}
        <rect
          x="220"
          y="120"
          width="32"
          height="170"
          rx="5"
          fill="url(#tpBlueGrad)"
        />

        {/* ========================================================
            3. THE "P" LOOP & GRADIENT ARC
            ======================================================== */}
        {/* The beautiful loop of P extending from the T cap */}
        <path
          d="M 235 80 
             H 315 
             C 365 80 405 110 405 160 
             C 405 210 365 240 315 240 
             H 275"
          stroke="url(#tpLoopGrad)"
          strokeWidth="48"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* ========================================================
            4. THE DYNAMIC GROWTH ARROW
            ======================================================== */}
        {/* Orange upward shooting arrow */}
        {/* Back-end tail starts thin, widens out, sharp arrowhead at top-right */}
        <path
          d="M 100 245
             L 330 115"
          stroke="url(#tpOrangeGrad)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Precision Arrowhead */}
        <path
          d="M 305 90 
             L 355 102 
             L 335 152 
             L 322 134 
             L 312 108 
             Z"
          fill="url(#tpOrangeGrad)"
          stroke="url(#tpOrangeGrad)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
