// widgets.jsx — reusable visuals for the Volt EV app

// ─────────────────────────────────────────────────────────────
// Scooter silhouette — original line-art drawn as SVG
// Deliberately stylized, not mimicking any brand's product geometry.
// ─────────────────────────────────────────────────────────────
function ScooterSilhouette({ width = 320, glow = true, dim = false }) {
  const stroke = dim ? 'rgba(255,255,255,0.35)' : '#F2EEE5';
  const accent = '#F2EEE5';
  return (
    <svg width={width} viewBox="0 0 400 220" fill="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="bodyG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#2A2A2A"/>
          <stop offset="1" stopColor="#121212"/>
        </linearGradient>
        <linearGradient id="panelG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#353535"/>
          <stop offset="1" stopColor="#161616"/>
        </linearGradient>
        <radialGradient id="glowG" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity="0.45"/>
          <stop offset="1" stopColor="#000" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {glow && <ellipse cx="200" cy="198" rx="155" ry="10" fill="url(#glowG)" />}

      {/* rear wheel */}
      <g>
        <circle cx="80" cy="170" r="38" fill="#0a0d10" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.2"/>
        <circle cx="80" cy="170" r="30" fill="none" stroke={stroke} strokeOpacity="0.25" strokeWidth="1"/>
        <circle cx="80" cy="170" r="10" fill="#1a2128" stroke={stroke} strokeOpacity="0.4" strokeWidth="1"/>
        {[0,45,90,135].map(a => (
          <line key={a} x1="80" y1="170"
            x2={80 + 28 * Math.cos(a*Math.PI/180)} y2={170 + 28 * Math.sin(a*Math.PI/180)}
            stroke={stroke} strokeOpacity="0.22" strokeWidth="1"/>
        ))}
      </g>

      {/* front wheel */}
      <g>
        <circle cx="320" cy="170" r="38" fill="#0a0d10" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.2"/>
        <circle cx="320" cy="170" r="30" fill="none" stroke={stroke} strokeOpacity="0.25" strokeWidth="1"/>
        <circle cx="320" cy="170" r="10" fill="#1a2128" stroke={stroke} strokeOpacity="0.4" strokeWidth="1"/>
        {[0,45,90,135].map(a => (
          <line key={a} x1="320" y1="170"
            x2={320 + 28 * Math.cos(a*Math.PI/180)} y2={170 + 28 * Math.sin(a*Math.PI/180)}
            stroke={stroke} strokeOpacity="0.22" strokeWidth="1"/>
        ))}
      </g>

      {/* main body — step-through frame */}
      <path
        d="M 95 160
           Q 110 118, 160 112
           L 240 110
           Q 270 108, 285 120
           L 300 155
           L 310 160
           L 320 165
           L 95 165 Z"
        fill="url(#bodyG)" stroke={stroke} strokeOpacity="0.6" strokeWidth="1.2"
      />

      {/* seat */}
      <path d="M 140 108 Q 180 92, 230 98 L 240 110 L 150 112 Z"
            fill="url(#panelG)" stroke={stroke} strokeOpacity="0.5" strokeWidth="1"/>

      {/* under-seat light strip (subtle) */}
      <rect x="150" y="110" width="95" height="1.5" fill={accent} opacity="0.35"/>

      {/* handlebar stem */}
      <path d="M 285 120 L 310 60 L 340 55"
            stroke={stroke} strokeOpacity="0.8" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* handlebar */}
      <path d="M 330 48 L 352 50" stroke={stroke} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round"/>
      {/* mirror */}
      <path d="M 340 50 L 345 38" stroke={stroke} strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="345" cy="36" r="3" fill="none" stroke={stroke} strokeOpacity="0.6" strokeWidth="1.2"/>

      {/* headlight */}
      <ellipse cx="320" cy="58" rx="6" ry="5" fill={accent} opacity="0.85"/>

      {/* rear accent light */}
      <rect x="96" y="130" width="3" height="9" rx="1" fill={accent} opacity="0.55"/>

      {/* floorboard */}
      <rect x="150" y="150" width="100" height="12" rx="2"
            fill="#181F24" stroke={stroke} strokeOpacity="0.3" strokeWidth="0.8"/>

      {/* kick stand hint */}
      <path d="M 125 165 L 130 190" stroke={stroke} strokeOpacity="0.3" strokeWidth="1"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Battery ring with gradient arc
// ─────────────────────────────────────────────────────────────
function BatteryRing({ percent = 74, size = 240, stroke = 10, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - percent / 100);
  const color = percent < 20 ? '#D97B7B' : percent < 40 ? '#D6B17A' : '#F2EEE5';

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* track */}
        <circle cx={size/2} cy={size/2} r={r} fill="none"
                stroke="rgba(255,255,255,0.06)" strokeWidth={stroke}/>
        {/* dotted outer decoration */}
        <circle cx={size/2} cy={size/2} r={r + 10} fill="none"
                stroke="rgba(255,255,255,0.06)" strokeWidth="1"
                strokeDasharray="1 6"/>
        {/* fill arc */}
        <circle cx={size/2} cy={size/2} r={r} fill="none"
                stroke={color} strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={off}
                style={{
                  transition: 'stroke-dashoffset .7s cubic-bezier(.2,.9,.2,1)',
                }}/>
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Tiny sparkline
// ─────────────────────────────────────────────────────────────
function Sparkline({ data, width = 120, height = 36, color = '#F2EEE5', fill = true }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = Math.max(max - min, 1);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return [x, y];
  });
  const path = pts.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(' ');
  const fillPath = `${path} L${width},${height} L0,${height} Z`;
  return (
    <svg width={width} height={height}>
      {fill && (
        <path d={fillPath} fill={color} opacity="0.12"/>
      )}
      <path d={path} fill="none" stroke={color} strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Stylized map canvas (not a real map — abstract geography)
// ─────────────────────────────────────────────────────────────
function StyledMap({ height = '100%', showScooter = true, showRoute = true }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      background: '#0C0C0C',
    }}>
      {/* grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}/>

      {/* map illustration */}
      <svg width="100%" height="100%" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <radialGradient id="mapGlow" cx="0.5" cy="0.45" r="0.5">
            <stop offset="0" stopColor="#F2EEE5" stopOpacity="0.08"/>
            <stop offset="1" stopColor="#F2EEE5" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* park polygons */}
        <path d="M -20 120 L 80 140 L 120 100 L 180 150 L 100 220 L 20 180 Z"
              fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <path d="M 260 380 L 360 400 L 420 450 L 380 540 L 280 520 L 240 460 Z"
              fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

        {/* water */}
        <path d="M -20 560 Q 100 540 200 570 T 420 560 L 420 720 L -20 720 Z"
              fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

        {/* road network */}
        <g stroke="rgba(255,255,255,0.14)" strokeWidth="8" fill="none" strokeLinecap="round">
          <path d="M -20 280 L 420 280"/>
          <path d="M 200 -20 L 200 720"/>
          <path d="M -20 460 L 420 460"/>
        </g>
        <g stroke="rgba(255,255,255,0.07)" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M 60 -20 L 80 720"/>
          <path d="M 320 -20 L 340 720"/>
          <path d="M -20 100 L 420 110"/>
          <path d="M -20 620 L 420 640"/>
          <path d="M 100 350 Q 200 360 280 330 Q 340 310 420 340"/>
        </g>

        {/* labels */}
        <g fill="rgba(255,255,255,0.22)"
           fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="1.5">
          <text x="40" y="180">PARK</text>
          <text x="300" y="450">GREEN ST</text>
          <text x="20" y="600">RIVER</text>
          <text x="140" y="270">MG ROAD</text>
          <text x="210" y="450">HWY 44</text>
        </g>

        {/* glow behind scooter */}
        <circle cx="200" cy="340" r="120" fill="url(#mapGlow)"/>

        {/* route (traveled today) */}
        {showRoute && (
          <>
            <path d="M 80 550 Q 140 500 180 460 T 200 340"
                  fill="none" stroke="#F2EEE5" strokeWidth="2.5"
                  strokeLinecap="round" opacity="0.85"/>
            <path d="M 80 550 Q 140 500 180 460 T 200 340"
                  fill="none" stroke="#F2EEE5" strokeWidth="1.5"
                  strokeLinecap="round" strokeDasharray="5 5" opacity="0.35"
                  style={{ animation: 'dash 1.5s linear infinite' }}/>
            {/* start pin */}
            <circle cx="80" cy="550" r="4" fill="#F2EEE5"/>
            <circle cx="80" cy="550" r="9" fill="none" stroke="#F2EEE5" strokeOpacity="0.35"/>
          </>
        )}

        {/* scooter position */}
        {showScooter && (
          <g transform="translate(200, 340)">
            <circle r="22" fill="rgba(242,238,229,0.08)"/>
            <circle r="14" fill="rgba(242,238,229,0.15)"/>
            <circle r="8" fill="#F2EEE5"/>
            <circle r="3" fill="#0A0A0A"/>
            <circle r="14" fill="none" stroke="#F2EEE5" strokeWidth="1.5"
                    style={{ animation: 'pulse-ring 2.2s ease-out infinite', transformOrigin: 'center' }}/>
          </g>
        )}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Status bar tuned for the app (white text, battery hidden spot)
// ─────────────────────────────────────────────────────────────
function AppStatus({ time = '9:41' }) {
  return <IOSStatusBar dark={true} time={time}/>;
}

// ─────────────────────────────────────────────────────────────
// Simple header w/ back + title
// ─────────────────────────────────────────────────────────────
function ScreenHeader({ title, onBack, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '52px 20px 16px 16px',
    }}>
      <button onClick={onBack} style={{
        width: 40, height: 40, borderRadius: 12,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#F2EEE5', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6"/>
        </svg>
      </button>
      <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.01 }}>{title}</div>
      <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {right}
      </div>
    </div>
  );
}

Object.assign(window, {
  ScooterSilhouette, BatteryRing, Sparkline, StyledMap, AppStatus, ScreenHeader,
});
