// screens.jsx — Minimal screens: Map, Analytics, Battery, Devices, Profile

// ───────────── MAP / LIVE TRACKING ─────────────
function MapScreen({ state, nav }) {
  return (
    <div className="scr" style={{ background: '#0C0C0C' }}>
      <StyledMap/>

      {/* Top: title only */}
      <div style={{
        position: 'absolute', top: 56, left: 24, right: 24, zIndex: 20,
      }}>
        <div className="eyebrow" style={{ marginBottom: 4 }}>Live location</div>
        <div className="h-serif" style={{ fontSize: 22, color: 'var(--text)' }}>
          Anna Nagar
        </div>
      </div>

      {/* Bottom card */}
      <div style={{
        position: 'absolute', left: 16, right: 16, bottom: 100, zIndex: 20,
        background: '#141414',
        border: '1px solid var(--line)',
        borderRadius: 20, padding: '20px 22px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
          <div>
            <div className="eyebrow">2nd Avenue</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', marginTop: 3 }}>
              Updated 12 min ago
            </div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 10, fontFamily: 'var(--mono)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--text)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 9, background: 'var(--text)' }}/>
            Live
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--line)', paddingTop: 14 }}>
          <div>
            <div className="mono" style={{ fontSize: 22, fontWeight: 500 }}>
              12.4<span style={{ fontSize: 11, color: 'var(--text-mute)', marginLeft: 3 }}>km</span>
            </div>
            <div style={{ fontSize: 10, fontFamily: 'var(--mono)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mute)', marginTop: 3 }}>
              Distance away
            </div>
          </div>
          <div style={{ borderLeft: '1px solid var(--line)', paddingLeft: 16 }}>
            <div className="mono" style={{ fontSize: 22, fontWeight: 500 }}>
              28<span style={{ fontSize: 11, color: 'var(--text-mute)', marginLeft: 3 }}>min</span>
            </div>
            <div style={{ fontSize: 10, fontFamily: 'var(--mono)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mute)', marginTop: 3 }}>
              To reach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────── ANALYTICS ─────────────
function AnalyticsScreen({ state, nav }) {
  const weekData = [28, 42, 36, 58, 44, 62, 51];
  const maxWeek = Math.max(...weekData);
  const days = ['M','T','W','T','F','S','S'];

  const trips = [
    { route: 'Home → Office', km: 18.4, date: 'Today' },
    { route: 'Office → Cafe', km: 3.2, date: 'Today' },
    { route: 'Cafe → Home', km: 19.1, date: 'Yesterday' },
  ];

  return (
    <div className="scr" style={{ background: '#0A0A0A' }}>
      <div style={{ padding: '56px 24px 120px' }}>
        {/* Header */}
        <div className="eyebrow" style={{ marginBottom: 6 }}>This week</div>
        <div className="h-serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>
          321
          <span style={{ fontSize: 18, color: 'var(--text-mute)', marginLeft: 6, letterSpacing: 0 }}>km</span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 8, fontFamily: 'var(--mono)' }}>
          ↑ 12% vs last week
        </div>

        {/* Week bars */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', marginTop: 40, marginBottom: 40, height: 120 }}>
          {weekData.map((v, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
                <div style={{
                  width: '100%', height: `${(v/maxWeek)*100}%`, minHeight: 3,
                  background: i === 5 ? '#F2EEE5' : 'rgba(255,255,255,0.08)',
                  borderRadius: 2,
                }}/>
              </div>
              <div className="mono" style={{ fontSize: 10, color: i === 5 ? 'var(--text)' : 'var(--text-mute)', letterSpacing: '0.1em' }}>
                {days[i]}
              </div>
            </div>
          ))}
        </div>

        {/* Simple key metrics, divider list */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {[
            { l: 'Total distance', v: `${state.odo.toLocaleString()} km` },
            { l: 'Avg efficiency', v: '38 Wh/km' },
            { l: 'CO₂ saved', v: '48.3 kg' },
            { l: 'Money saved', v: '₹1,428' },
          ].map((r, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 0', borderBottom: '1px solid var(--line)',
            }}>
              <div style={{ fontSize: 14, color: 'var(--text-dim)' }}>{r.l}</div>
              <div className="mono" style={{ fontSize: 14, fontWeight: 500 }}>{r.v}</div>
            </div>
          ))}
        </div>

        <div className="eyebrow" style={{ marginTop: 36, marginBottom: 10 }}>Recent trips</div>
        {trips.map((t, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '16px 0', borderBottom: '1px solid var(--line)',
          }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{t.route}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', marginTop: 3, letterSpacing: '0.1em' }}>
                {t.date}
              </div>
            </div>
            <div className="mono" style={{ fontSize: 14, fontWeight: 500 }}>
              {t.km}<span style={{ color: 'var(--text-mute)', fontSize: 10, marginLeft: 3 }}>km</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ───────────── BATTERY ─────────────
function BatteryScreen({ state, nav }) {
  return (
    <div className="scr" style={{ background: '#0A0A0A' }}>
      <div style={{ padding: '56px 24px 120px' }}>
        <div className="eyebrow" style={{ marginBottom: 6 }}>State of charge</div>

        {/* Huge number */}
        <div style={{ textAlign: 'left', marginBottom: 40 }}>
          <div className="h-serif" style={{ fontSize: 120, lineHeight: 0.95, letterSpacing: '-0.05em' }}>
            {state.battery}
            <span style={{ fontSize: 36, color: 'var(--text-mute)', letterSpacing: 0 }}>%</span>
          </div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 10, letterSpacing: '0.15em' }}>
            {state.range} KM RANGE REMAINING
          </div>
        </div>

        {/* Horizontal battery bar */}
        <div style={{
          height: 6, borderRadius: 3,
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden', marginBottom: 44,
        }}>
          <div style={{
            height: '100%', width: `${state.battery}%`,
            background: '#F2EEE5',
            transition: 'width .7s cubic-bezier(.2,.9,.2,1)',
          }}/>
        </div>

        {/* Key stats list */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {[
            { l: 'Status', v: 'Not charging' },
            { l: 'Temperature', v: '28 °C' },
            { l: 'Battery health', v: '98%' },
            { l: 'Charge cycles', v: '284 / 2,000' },
            { l: 'Last full charge', v: '2 days ago' },
          ].map((r, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 0', borderBottom: '1px solid var(--line)',
            }}>
              <div style={{ fontSize: 14, color: 'var(--text-dim)' }}>{r.l}</div>
              <div className="mono" style={{ fontSize: 14, fontWeight: 500 }}>{r.v}</div>
            </div>
          ))}
        </div>

        {/* Single action */}
        <button className="btn primary" style={{ width: '100%', marginTop: 28 }}>
          Schedule charging
        </button>
      </div>
    </div>
  );
}

// ───────────── DEVICES ─────────────
function DevicesScreen({ state, setState, nav }) {
  const devices = [
    { name: 'Scooter · TN-22 EV 1403', primary: true },
    { name: 'Helmet HUD v2', primary: false },
    { name: 'Key Fob #2', primary: false },
  ];

  return (
    <div className="scr" style={{ background: '#0A0A0A' }}>
      <div style={{ padding: '56px 24px 120px' }}>
        <div className="eyebrow" style={{ marginBottom: 6 }}>Bluetooth</div>
        <div className="h-serif" style={{ fontSize: 32, lineHeight: 1.05 }}>
          {state.connected ? 'Linked & ready' : 'Searching…'}
        </div>

        {/* Simple BT icon centered */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          margin: '50px 0 50px', position: 'relative',
          height: 160,
        }}>
          <div style={{
            width: 100, height: 100, borderRadius: '50%',
            border: '1px solid var(--line-2)',
            position: 'absolute',
          }}/>
          <div style={{
            width: 160, height: 160, borderRadius: '50%',
            border: '1px solid var(--line)',
            position: 'absolute',
          }}/>
          {state.connected && (
            <div style={{
              width: 100, height: 100, borderRadius: '50%',
              border: '1px solid rgba(242,238,229,0.5)',
              position: 'absolute',
              animation: 'pulse-ring 2.2s ease-out infinite',
              transformOrigin: 'center',
            }}/>
          )}
          <div style={{
            width: 60, height: 60, borderRadius: '50%',
            background: '#F2EEE5', color: '#0A0A0A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', zIndex: 2,
          }}>
            <IcoBluetooth size={24}/>
          </div>
        </div>

        <div className="eyebrow" style={{ marginBottom: 10 }}>Paired devices</div>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {devices.map((d, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 0', borderBottom: '1px solid var(--line)',
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{d.name}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', marginTop: 3, letterSpacing: '0.1em' }}>
                  {d.primary && state.connected ? 'Connected' : d.primary ? 'Offline' : 'Paired'}
                </div>
              </div>
              {d.primary && state.connected && (
                <span style={{ width: 8, height: 8, borderRadius: 9, background: 'var(--text)' }}/>
              )}
            </div>
          ))}
        </div>

        <button className="btn" style={{ width: '100%', marginTop: 28 }}
                onClick={() => setState(s => ({ ...s, connected: !s.connected }))}>
          {state.connected ? 'Disconnect' : 'Reconnect'}
        </button>
      </div>
    </div>
  );
}

// ───────────── PROFILE ─────────────
function ProfileScreen({ state, nav }) {
  return (
    <div className="scr" style={{ background: '#0A0A0A' }}>
      <div style={{ padding: '56px 24px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 44 }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: '#F2EEE5', color: '#0A0A0A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, fontWeight: 500,
            fontFamily: 'var(--serif)',
          }}>
            {state.rider[0]}
          </div>
          <div>
            <div className="h-serif" style={{ fontSize: 22 }}>{state.rider}</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', marginTop: 3, letterSpacing: '0.12em' }}>
              OWNER · SINCE MAY 2025
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--line)' }}>
          {[
            { l: 'Security', v: 'On' },
            { l: 'Shared keys', v: '2 active' },
            { l: 'Notifications', v: 'Enabled' },
            { l: 'Language', v: 'English' },
            { l: 'Help & Support', v: '' },
            { l: 'Sign out', v: '' },
          ].map((r, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 0', borderBottom: '1px solid var(--line)',
              cursor: 'pointer',
            }}>
              <div style={{ fontSize: 15 }}>{r.l}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {r.v && <span className="mono" style={{ fontSize: 12, color: 'var(--text-mute)' }}>{r.v}</span>}
                <IcoChevron size={14} color="rgba(255,255,255,0.3)"/>
              </div>
            </div>
          ))}
        </div>

        <div className="eyebrow" style={{ marginTop: 36, marginBottom: 10 }}>Next service</div>
        <div style={{ padding: '14px 0 18px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div className="mono" style={{ fontSize: 13 }}>{state.odo.toLocaleString()} km</div>
            <div className="mono" style={{ fontSize: 13, color: 'var(--text-mute)' }}>Due at 5,000 km</div>
          </div>
          <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '68%', background: '#F2EEE5' }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MapScreen, AnalyticsScreen, BatteryScreen, DevicesScreen, ProfileScreen });
