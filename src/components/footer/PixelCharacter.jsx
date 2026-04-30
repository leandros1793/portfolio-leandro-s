import React, { useState, useEffect, useRef } from 'react';
import './pixelCharacter.css';

const PixelCharacter = () => {
  const posRef = useRef(-70);
  const dirRef = useRef(1);
  const [renderState, setRenderState] = useState({ pos: -70, facingRight: true });

  useEffect(() => {
    let raf;
    const SPEED = 0.6;

    const tick = () => {
      const footer = document.querySelector('footer');
      const containerWidth = footer ? footer.offsetWidth : 1200;

      posRef.current += SPEED * dirRef.current;

      if (posRef.current > containerWidth + 10) {
        dirRef.current = -1;
      } else if (posRef.current < -70) {
        dirRef.current = 1;
      }

      setRenderState({
        pos: Math.round(posRef.current),
        facingRight: dirRef.current === 1,
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const s = 3;
  const svgW = 16 * s; // 48px
  const svgH = 17 * s; // 51px

  const ctr = { n: 0 };
  const px = (x, y, color) => (
    <rect key={ctr.n++} x={x * s} y={y * s} width={s} height={s} fill={color} />
  );

  const H  = '#4a2f1a'; // hair
  const SK = '#f5c18c'; // skin
  const EY = '#1a1a2e'; // eyes
  const SH = '#4db5ff'; // shirt (portfolio blue!)
  const PA = '#1e3a6e'; // pants
  const SO = '#111111'; // shoes

  // ── STATIC BODY ─────────────────────────────────────────────
  const body = [
    // Hair
    ...[4,5,6,7,8,9,10,11].map(x => px(x, 0, H)),
    ...[3,4,5,6,7,8,9,10,11,12].map(x => px(x, 1, H)),
    // Face rows 2–5
    ...[3,4,5,6,7,8,9,10,11,12].flatMap(x => [2,3,4,5].map(y => px(x, y, SK))),
    // Eyes (draw on top of skin)
    px(5, 3, EY), px(6, 3, EY), px(9, 3, EY), px(10, 3, EY),
    // Mouth hint
    px(6, 5, '#c47a3a'), px(7, 5, '#c47a3a'), px(8, 5, '#c47a3a'),
    // Shirt rows 6–8
    ...[4,5,6,7,8,9,10,11].map(x => px(x, 6, SH)),
    ...[2,3,4,5,6,7,8,9,10,11,12,13].map(x => px(x, 7, SH)),
    ...[4,5,6,7,8,9,10,11].map(x => px(x, 8, SH)),
    // Hands (skin at ends of arms)
    px(1, 7, SK), px(14, 7, SK),
    // Waist / upper pants rows 9–10
    ...[4,5,6,7,8,9,10,11].flatMap(x => [9,10].map(y => px(x, y, PA))),
  ];

  // ── WALKING FRAME 1: right foot forward ─────────────────────
  const f1 = [
    // Left leg (back – shorter, rows 11–12)
    ...[4,5,6].flatMap(x => [11,12].map(y => px(x, y, PA))),
    // Left shoe (back)
    px(3,13,SO), px(4,13,SO), px(5,13,SO), px(6,13,SO),
    // Right leg (front – longer, rows 11–14)
    ...[8,9,10].flatMap(x => [11,12,13,14].map(y => px(x, y, PA))),
    // Right shoe (front)
    px(8,15,SO), px(9,15,SO), px(10,15,SO), px(11,15,SO),
  ];

  // ── WALKING FRAME 2: left foot forward ──────────────────────
  const f2 = [
    // Right leg (back – shorter, rows 11–12)
    ...[8,9,10].flatMap(x => [11,12].map(y => px(x, y, PA))),
    // Right shoe (back)
    px(8,13,SO), px(9,13,SO), px(10,13,SO), px(11,13,SO),
    // Left leg (front – longer, rows 11–14)
    ...[4,5,6].flatMap(x => [11,12,13,14].map(y => px(x, y, PA))),
    // Left shoe (front)
    px(3,15,SO), px(4,15,SO), px(5,15,SO), px(6,15,SO),
  ];

  const { pos, facingRight } = renderState;

  return (
    <div
      className="pixel-walker"
      style={{
        position: 'absolute',
        left: `${pos}px`,
        bottom: '5px',
        transform: `scaleX(${facingRight ? 1 : -1})`,
        transformOrigin: `${svgW / 2}px center`,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      <svg
        width={svgW}
        height={svgH}
        style={{ imageRendering: 'pixelated', display: 'block' }}
      >
        {/* Ground shadow */}
        <ellipse
          cx={svgW / 2}
          cy={svgH - 1}
          rx={13}
          ry={2}
          fill="rgba(0,0,0,0.25)"
        />
        <g>{body}</g>
        <g className="pixel-frame-1">{f1}</g>
        <g className="pixel-frame-2">{f2}</g>
      </svg>
    </div>
  );
};

export default PixelCharacter;
