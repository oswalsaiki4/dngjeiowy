"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Animated SVG nodes and connections */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,212,170,0)" />
            <stop offset="50%" stopColor="rgba(0,212,170,0.3)" />
            <stop offset="100%" stopColor="rgba(0,212,170,0)" />
          </linearGradient>
          <linearGradient id="nodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,212,170,0.4)" />
            <stop offset="100%" stopColor="rgba(0,212,170,0)" />
          </linearGradient>
        </defs>

        {/* Connecting lines */}
        <g className="animate-pulse-glow">
          <line
            x1="200"
            y1="200"
            x2="400"
            y2="350"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-draw-line"
          />
          <line
            x1="400"
            y1="350"
            x2="700"
            y2="250"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-draw-line delay-200"
          />
          <line
            x1="700"
            y1="250"
            x2="1000"
            y2="400"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-draw-line delay-300"
          />
          <line
            x1="1000"
            y1="400"
            x2="1200"
            y2="300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-draw-line delay-500"
          />
          <line
            x1="300"
            y1="500"
            x2="600"
            y2="450"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-draw-line delay-300"
          />
          <line
            x1="600"
            y1="450"
            x2="900"
            y2="550"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-draw-line delay-500"
          />
          <line
            x1="400"
            y1="350"
            x2="600"
            y2="450"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-draw-line delay-700"
          />
        </g>

        {/* Nodes */}
        <g>
          <circle
            cx="200"
            cy="200"
            r="4"
            fill="var(--accent)"
            className="animate-pulse-glow"
          />
          <circle
            cx="200"
            cy="200"
            r="12"
            fill="url(#nodeGlow)"
            className="animate-pulse-glow delay-100"
          />

          <circle
            cx="400"
            cy="350"
            r="5"
            fill="var(--accent)"
            className="animate-pulse-glow delay-200"
          />
          <circle
            cx="400"
            cy="350"
            r="15"
            fill="url(#nodeGlow)"
            className="animate-pulse-glow delay-300"
          />

          <circle
            cx="700"
            cy="250"
            r="4"
            fill="var(--accent)"
            className="animate-pulse-glow delay-300"
          />
          <circle
            cx="700"
            cy="250"
            r="12"
            fill="url(#nodeGlow)"
            className="animate-pulse-glow delay-500"
          />

          <circle
            cx="1000"
            cy="400"
            r="6"
            fill="var(--accent)"
            className="animate-pulse-glow delay-500"
          />
          <circle
            cx="1000"
            cy="400"
            r="18"
            fill="url(#nodeGlow)"
            className="animate-pulse-glow delay-700"
          />

          <circle
            cx="1200"
            cy="300"
            r="4"
            fill="var(--accent)"
            className="animate-pulse-glow delay-700"
          />
          <circle
            cx="1200"
            cy="300"
            r="12"
            fill="url(#nodeGlow)"
            className="animate-pulse-glow delay-1000"
          />

          <circle
            cx="300"
            cy="500"
            r="3"
            fill="var(--accent)"
            className="animate-pulse-glow delay-200"
          />

          <circle
            cx="600"
            cy="450"
            r="5"
            fill="var(--accent)"
            className="animate-pulse-glow delay-500"
          />
          <circle
            cx="600"
            cy="450"
            r="15"
            fill="url(#nodeGlow)"
            className="animate-pulse-glow delay-700"
          />

          <circle
            cx="900"
            cy="550"
            r="4"
            fill="var(--accent)"
            className="animate-pulse-glow delay-700"
          />
        </g>

        {/* Healthcare waveform suggestion */}
        <path
          d="M100,600 Q200,580 250,600 T400,600 T550,550 T600,600 T750,600"
          fill="none"
          stroke="rgba(0,212,170,0.15)"
          strokeWidth="2"
          className="animate-draw-line"
        />
      </svg>

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--bg-dark)] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--bg-navy)] to-transparent" />
    </div>
  );
}
