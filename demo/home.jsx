// home.jsx — Home: scooter hero + tap-to-lock + minimal stats

// ───────── Scooter illustration (Scooter-inspired, ivory line + solid silhouette) ─────────
function ScooterHero({ locked }) {
  return (
    <svg viewBox="0 0 360 200" width="100%" style={{ display: 'block', maxWidth: 360 }}>
      <defs>
        <linearGradient id="body-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A2A"/>
          <stop offset="55%" stopColor="#1A1A1A"/>
          <stop offset="100%" stopColor="#0E0E0E"/>
        </linearGradient>
        <linearGradient id="seat-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E2A24"/>
          <stop offset="100%" stopColor="#151310"/>
        </linearGradient>
        <linearGradient id="ivory-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F2EEE5" stopOpacity="0"/>
          <stop offset="50%" stopColor="#F2EEE5" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#F2EEE5" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="wheel-spin" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#222"/>
          <stop offset="70%" stopColor="#0A0A0A"/>
          <stop offset="100%" stopColor="#000"/>
        </radialGradient>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="180" cy="182" rx="125" ry="7" fill="#000" opacity="0.55" filter="url(#soft-shadow)"/>

      {/* === Scooter-inspired scooter (side view) === */}
      {/* Rear wheel */}
      <g transform="translate(92,158)">
        <circle r="26" fill="url(#wheel-spin)" stroke="#2A2A2A" strokeWidth="1"/>
        <circle r="20" fill="none" stroke="#3A3A3A" strokeWidth="0.8"/>
        <circle r="10" fill="#1A1A1A" stroke="#333" strokeWidth="0.6"/>
        <circle r="3" fill="#F2EEE5" opacity="0.5"/>
        {/* spokes hint */}
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#2A2A2A" strokeWidth="0.6"/>
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#2A2A2A" strokeWidth="0.6"/>
      </g>
      {/* Front wheel */}
      <g transform="translate(272,158)">
        <circle r="26" fill="url(#wheel-spin)" stroke="#2A2A2A" strokeWidth="1"/>
        <circle r="20" fill="none" stroke="#3A3A3A" strokeWidth="0.8"/>
        <circle r="10" fill="#1A1A1A" stroke="#333" strokeWidth="0.6"/>
        <circle r="3" fill="#F2EEE5" opacity="0.5"/>
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#2A2A2A" strokeWidth="0.6"/>
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#2A2A2A" strokeWidth="0.6"/>
      </g>

      {/* Front fender (retro round) */}
      <path d="M 248 158 Q 272 128 296 158" fill="none" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M 248 158 Q 272 132 296 158" fill="none" stroke="#F2EEE5" strokeWidth="0.6" opacity="0.25"/>

      {/* Rear fender */}
      <path d="M 66 158 Q 92 130 118 158" fill="none" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round"/>

      {/* Main body — rounded retro shell */}
      <path d="
        M 108 150
        Q 100 128 120 118
        L 190 114
        Q 215 112 220 98
        L 226 76
        Q 230 66 242 64
        L 258 62
        Q 268 62 268 72
        L 262 110
        Q 258 122 250 126
        L 230 132
        Q 228 142 236 150
        L 250 150
        L 250 158
        L 118 158
        Z
      " fill="url(#body-grad)" stroke="#1F1F1F" strokeWidth="1"/>

      {/* Body highlight edge */}
      <path d="
        M 120 118
        L 190 114
        Q 215 112 220 98
        L 226 76
      " fill="none" stroke="url(#ivory-sheen)" strokeWidth="1" opacity="0.6"/>

      {/* Seat */}
      <path d="
        M 120 114
        Q 120 102 134 100
        L 200 99
        Q 216 99 216 110
        L 216 116
        L 120 118
        Z
      " fill="url(#seat-grad)" stroke="#1A1916" strokeWidth="0.8"/>
      {/* Seat stitching */}
      <path d="M 126 108 L 210 106" fill="none" stroke="#3A342C" strokeWidth="0.5" strokeDasharray="1 2"/>

      {/* Apron / front panel */}
      <path d="
        M 232 72
        Q 230 84 244 84
        L 260 84
        Q 270 84 268 72
      " fill="#151515" stroke="#252525" strokeWidth="0.6"/>

      {/* Headlight (big retro round) */}
      <g transform="translate(256,78)">
        <circle r="11" fill="#0E0E0E" stroke="#2A2A2A" strokeWidth="1"/>
        <circle r="8" fill="#1A1A1A"/>
        <circle r="6" fill="#2A2A2A"/>
        <circle r="4" fill="#F2EEE5" opacity={locked ? 0.0 : 0.85}/>
        <circle r="2" fill="#fff" opacity={locked ? 0.0 : 1}/>
      </g>

      {/* Handlebar stem */}
      <path d="M 260 62 L 262 40" stroke="#1F1F1F" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Handlebar grip */}
      <path d="M 246 38 L 278 38" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="278" cy="38" r="2.5" fill="#2A2A2A"/>
      <circle cx="246" cy="38" r="2.5" fill="#2A2A2A"/>
      {/* Tiny dash display */}
      <rect x="256" y="44" width="14" height="5" rx="1" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="0.5"/>
      <rect x="257" y="45" width={locked ? 0 : 6} height="3" fill="#F2EEE5" opacity="0.7"/>

      {/* Mirror stalks */}
      <path d="M 248 38 L 240 28" stroke="#2A2A2A" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="239" cy="26" r="3" fill="#151515" stroke="#2A2A2A" strokeWidth="0.8"/>
      <path d="M 276 38 L 282 30" stroke="#2A2A2A" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="283" cy="29" r="3" fill="#151515" stroke="#2A2A2A" strokeWidth="0.8"/>

      {/* Footboard step */}
      <path d="M 150 150 L 220 150 L 222 156 L 148 156 Z" fill="#1A1A1A" stroke="#252525" strokeWidth="0.6"/>

      {/* Side kick indicator / scooter-style chrome strip */}
      <path d="M 130 140 L 210 138" stroke="#F2EEE5" strokeWidth="0.6" opacity="0.35"/>

      {/* Tail light */}
      <rect x="108" y="128" width="10" height="5" rx="1.5" fill="#0E0E0E" stroke="#2A2A2A" strokeWidth="0.5"/>
      <rect x="109" y="129" width="8" height="3" rx="1" fill="#3A2828" opacity={locked ? 0.5 : 0.9}/>

      {/* Model signature mark on side */}
      <text x="162" y="138" fontSize="4" fill="#F2EEE5" opacity="0.25"
            fontFamily="'JetBrains Mono', monospace" letterSpacing="1">
        VOLT · EV
      </text>

      {/* Status indicator dot (breathing when unlocked) */}
      <circle cx="180" cy="44" r="2"
              fill={locked ? '#3A3A3A' : '#F2EEE5'}
              opacity={locked ? 0.5 : 1}>
        {!locked && <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite"/>}
      </circle>
    </svg>
  );
}

function HomeScreen({ state, setState, nav }) {
  const { battery, locked, connected, range, odo, rider } = state;
  const [pressing, setPressing] = React.useState(false);

  const toggleLock = () => {
    setPressing(true);
    setTimeout(() => setPressing(false), 350);
    setState(s => ({ ...s, locked: !s.locked }));
  };

  return (
    <div className="scr" style={{ background: '#0A0A0A' }}>
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '56px 24px 110px',
        display: 'flex', flexDirection: 'column',
        minHeight: '100%',
      }}>
        {/* Top row — rider + bluetooth dot */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 28,
        }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-mute)', fontFamily: 'var(--mono)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Evening
            </div>
            <div className="h-serif" style={{ fontSize: 22, marginTop: 2 }}>{rider}</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 11px',
            border: '1px solid var(--line-2)', borderRadius: 999,
            fontSize: 10, fontFamily: 'var(--mono)',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: connected ? 'var(--text)' : 'var(--text-mute)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: 9,
              background: connected ? 'var(--text)' : 'var(--text-mute)',
            }}/>
            {connected ? 'Linked' : 'Offline'}
          </div>
        </div>

        {/* Vehicle name */}
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <div className="eyebrow" style={{ marginBottom: 4 }}>Your Scooter</div>
          <div className="h-serif" style={{ fontSize: 26, lineHeight: 1.1 }}>
            Urbane Matte
          </div>
          <div style={{
            fontSize: 11, color: 'var(--text-mute)',
            fontFamily: 'var(--mono)', letterSpacing: '0.14em', marginTop: 4,
          }}>
            TN-22 · EV 1403
          </div>
        </div>

        {/* Scooter hero */}
        <div style={{
          position: 'relative',
          margin: '6px -24px 10px',
          opacity: locked ? 0.85 : 1,
          transition: 'opacity .35s ease',
        }}>
          <ScooterHero locked={locked}/>
        </div>

        {/* Lock button — centered under scooter */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <button
            onClick={toggleLock}
            style={{
              width: 150, height: 150, borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              background: locked ? '#141414' : '#F2EEE5',
              color: locked ? '#F2EEE5' : '#0A0A0A',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 10,
              boxShadow: locked
                ? 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 16px 40px rgba(0,0,0,0.55)'
                : '0 16px 40px rgba(0,0,0,0.35)',
              transform: pressing ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform .25s cubic-bezier(.2,.9,.2,1), background .35s, color .35s',
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5"
                 strokeLinecap="round" strokeLinejoin="round">
              {locked ? (
                <>
                  <rect x="5" y="11" width="14" height="10" rx="2"/>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                </>
              ) : (
                <>
                  <rect x="5" y="11" width="14" height="10" rx="2"/>
                  <path d="M8 11V7a4 4 0 0 1 7.5-2"/>
                </>
              )}
            </svg>
            <div style={{
              fontSize: 10,
              fontFamily: 'var(--mono)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              opacity: 0.7,
            }}>
              Tap to {locked ? 'unlock' : 'lock'}
            </div>
          </button>
        </div>

        {/* Three minimal stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          marginTop: 'auto',
        }}>
          {[
            { lbl: 'Battery', val: battery, unit: '%' },
            { lbl: 'Range', val: range, unit: 'km' },
            { lbl: 'Odometer', val: odo.toLocaleString(), unit: 'km' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '18px 8px',
              textAlign: 'center',
              borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
            }}>
              <div className="mono" style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em' }}>
                {s.val}
                <span style={{ fontSize: 10, color: 'var(--text-mute)', marginLeft: 3, fontWeight: 400 }}>
                  {s.unit}
                </span>
              </div>
              <div style={{
                fontSize: 9, marginTop: 3,
                fontFamily: 'var(--mono)', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--text-mute)',
              }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, ScooterHero });
