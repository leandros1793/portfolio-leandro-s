import React, { useState, useEffect, useRef } from 'react';
import './pixarCharacter.css';

const PixarCharacter = () => {
  const posRef  = useRef(-80);
  const dirRef  = useRef(1);
  const [state, setState] = useState({ x: -80, right: true });

  useEffect(() => {
    let raf;
    const SPEED = 0.65;

    const loop = () => {
      const fw = document.querySelector('footer')?.offsetWidth ?? 1200;
      posRef.current += SPEED * dirRef.current;
      if (posRef.current > fw + 15)  dirRef.current = -1;
      else if (posRef.current < -80) dirRef.current =  1;
      setState({ x: Math.round(posRef.current), right: dirRef.current === 1 });
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const C = {
    skin:      '#f5c18c',
    skinDk:    '#e8a070',
    hair:      '#3a2010',
    eyeIris:   '#1e3a8a',
    eyePupil:  '#090920',
    hoodie:    '#f0f4f8',
    hoodieSh:  '#d8e2ec',
    pants:     '#2c3e50',
    shoe:      '#f8f8f8',
    shoeSole:  '#c0c8d0',
    glasses:   '#2d3748',
    coffee:    '#e8d5b7',
    coffeeTp:  '#b8854a',
  };

  return (
    <div
      className="pixar-walker"
      style={{
        position:        'absolute',
        left:            state.x,
        bottom:          0,
        transform:       `scaleX(${state.right ? 1 : -1})`,
        transformOrigin: '35px bottom',
        zIndex:          10,
        pointerEvents:   'none',
      }}
    >
      <svg
        viewBox="0 0 70 122"
        width="70"
        height="122"
        style={{ display: 'block', overflow: 'visible' }}
      >

        {/* ── GROUND SHADOW ── */}
        <ellipse cx="35" cy="121" rx="27" ry="4.5" fill="rgba(0,0,0,0.20)" />

        {/* ══════════════════════════════════════
            LEGS  (rendered behind body)
        ══════════════════════════════════════ */}

        {/* Right leg */}
        <g className="char-leg-right">
          <rect x="40" y="96" width="15" height="21" rx="7.5" fill={C.pants} />
          {/* Sneaker */}
          <rect x="37" y="115" width="22" height="7"  rx="4"   fill={C.shoe}     />
          <rect x="37" y="115" width="22" height="3"  rx="2"   fill={C.shoeSole} />
          <ellipse cx="57" cy="115" rx="4" ry="3.5" fill={C.shoe} />
        </g>

        {/* Left leg */}
        <g className="char-leg-left">
          <rect x="15" y="96" width="15" height="21" rx="7.5" fill={C.pants} />
          {/* Sneaker */}
          <rect x="11" y="115" width="22" height="7"  rx="4"   fill={C.shoe}     />
          <rect x="11" y="115" width="22" height="3"  rx="2"   fill={C.shoeSole} />
          <ellipse cx="13" cy="115" rx="4" ry="3.5" fill={C.shoe} />
        </g>

        {/* ══════════════════════════════════════
            BODY + HEAD WRAPPER  (bobs with step)
        ══════════════════════════════════════ */}
        <g className="char-body-wrap">

          {/* ── Left arm (behind body) ── */}
          <g className="char-arm-left">
            <rect x="2"  y="63" width="13" height="31" rx="6.5" fill={C.hoodie} />
            {/* Sleeve cuff */}
            <rect x="2"  y="86" width="13" height="5"  rx="3"   fill={C.hoodieSh} />
            {/* Hand */}
            <circle cx="8.5" cy="97" r="6.5" fill={C.skin} />
          </g>

          {/* ── Right arm (holds coffee) ── */}
          <g className="char-arm-right">
            <rect x="55" y="63" width="13" height="31" rx="6.5" fill={C.hoodie} />
            <rect x="55" y="86" width="13" height="5"  rx="3"   fill={C.hoodieSh} />
            <circle cx="61.5" cy="97" r="6.5" fill={C.skin} />
            {/* Coffee cup */}
            <rect x="57"  y="85" width="11" height="14" rx="2.5" fill={C.coffee}  />
            <rect x="57"  y="85" width="11" height="4.5" rx="2"  fill={C.coffeeTp} />
            <rect x="67.5" y="89" width="4.5" height="4.5" rx="2" fill={C.coffee} />
            {/* Coffee top shine */}
            <ellipse cx="62.5" cy="85" rx="5" ry="1.5" fill="rgba(255,255,255,0.3)" />
            {/* Steam */}
            <path className="char-steam-a" d="M 60 82 Q 57.5 77 60 72" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path className="char-steam-b" d="M 64.5 81 Q 67 76 64.5 71" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </g>

          {/* ── Hoodie body ── */}
          <rect x="9" y="58" width="52" height="41" rx="16"   fill={C.hoodie}   />
          {/* Kangaroo pocket */}
          <rect x="22" y="79" width="26" height="17" rx="8"   fill={C.hoodieSh} />
          {/* Zipper seam */}
          <line x1="35" y1="59" x2="35" y2="97" stroke={C.hoodieSh} strokeWidth="1.5" />
          {/* Shoulder highlight */}
          <rect x="13" y="60" width="17" height="7"  rx="3.5" fill="rgba(255,255,255,0.55)" />

          {/* ── Neck ── */}
          <rect x="28" y="55" width="14" height="10" rx="5" fill={C.skin} />

          {/* ── Ears ── */}
          <circle cx="9"  cy="31" r="7.5" fill={C.skin}   />
          <circle cx="61" cy="31" r="7.5" fill={C.skin}   />
          <circle cx="9"  cy="31" r="4.5" fill={C.skinDk} />
          <circle cx="61" cy="31" r="4.5" fill={C.skinDk} />

          {/* ── Head ── */}
          <circle cx="35" cy="30" r="27" fill={C.skin} />

          {/* ── Hair ── */}
          <path
            d="M 9 32 A 26 26 0 0 1 61 32 L 63 18 Q 55 0 45 -1 Q 38 -3 35 -1 Q 31 -3 24 1 Q 13 7 9 32 Z"
            fill={C.hair}
          />
          {/* Hair gloss */}
          <path
            d="M 19 7 Q 35 1 51 7 Q 41 3 35 3 Q 29 2 19 7 Z"
            fill="rgba(255,255,255,0.14)"
          />
          {/* Cowlick */}
          <ellipse
            cx="49" cy="2" rx="6.5" ry="5.5"
            fill={C.hair}
            transform="rotate(-18, 49, 2)"
          />

          {/* ══════════════════════════════════════
              EYES  (blink-animated groups)
          ══════════════════════════════════════ */}

          {/* Left eye */}
          <g className="char-blink-left">
            <ellipse cx="23" cy="30" rx="9.5" ry="10.5" fill="white" />
            <circle  cx="23" cy="31" r="7"   fill={C.eyeIris}  />
            <circle  cx="23" cy="31" r="3.8" fill={C.eyePupil} />
            {/* Highlights */}
            <circle  cx="26.5" cy="27" r="2.8" fill="white" />
            <circle  cx="21"   cy="29" r="1.2" fill="rgba(255,255,255,0.65)" />
          </g>

          {/* Right eye */}
          <g className="char-blink-right">
            <ellipse cx="47" cy="30" rx="9.5" ry="10.5" fill="white" />
            <circle  cx="47" cy="31" r="7"   fill={C.eyeIris}  />
            <circle  cx="47" cy="31" r="3.8" fill={C.eyePupil} />
            <circle  cx="50.5" cy="27" r="2.8" fill="white" />
            <circle  cx="45"   cy="29" r="1.2" fill="rgba(255,255,255,0.65)" />
          </g>

          {/* ── Glasses (on top of eyes) ── */}
          <rect x="13" y="22" width="19" height="17" rx="6" fill="none" stroke={C.glasses} strokeWidth="1.6" />
          <rect x="38" y="22" width="19" height="17" rx="6" fill="none" stroke={C.glasses} strokeWidth="1.6" />
          {/* Bridge */}
          <line x1="32" y1="29.5" x2="38" y2="29.5" stroke={C.glasses} strokeWidth="1.6" />
          {/* Temples */}
          <line x1="9"  y1="29"   x2="13" y2="29"   stroke={C.glasses} strokeWidth="1.6" />
          <line x1="57" y1="29"   x2="61" y2="29"   stroke={C.glasses} strokeWidth="1.6" />
          {/* Lens tint */}
          <rect x="13.5" y="22.5" width="18" height="16" rx="5.5" fill="rgba(100,160,255,0.07)" />
          <rect x="38.5" y="22.5" width="18" height="16" rx="5.5" fill="rgba(100,160,255,0.07)" />

          {/* ── Eyebrows ── */}
          <path d="M 15 19 Q 23 13.5 31 17.5" stroke={C.hair} strokeWidth="2.8" fill="none" strokeLinecap="round" />
          <path d="M 39 17.5 Q 47 13.5 55 19" stroke={C.hair} strokeWidth="2.8" fill="none" strokeLinecap="round" />

          {/* ── Nose ── */}
          <circle cx="35" cy="43" r="3.5" fill={C.skinDk} />
          <circle cx="32.5" cy="42" r="1.5" fill="rgba(0,0,0,0.13)" />
          <circle cx="37.5" cy="42" r="1.5" fill="rgba(0,0,0,0.13)" />

          {/* ── Smile ── */}
          <path d="M 27 50 Q 35 59.5 43 50" stroke="#c06a28" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* ── Cheeks ── */}
          <ellipse cx="14" cy="40" rx="7"   ry="5.5" fill="rgba(255,140,110,0.27)" />
          <ellipse cx="56" cy="40" rx="7"   ry="5.5" fill="rgba(255,140,110,0.27)" />

        </g>{/* end char-body-wrap */}

      </svg>
    </div>
  );
};

export default PixarCharacter;
