# Design System

Volt is a dark, warm-black, CRED-style iOS app. The aesthetic is deliberately restrained: one accent, one font family per role, generous negative space, tabular numerics.

## Color

| Role | Token | Value |
|---|---|---|
| Background | `--bg` | `#0A0A0A` |
| Surface (raised) | `--surface` | `#141414` |
| Surface (card) | `--surface-2` | `#1C1C1C` |
| Surface (input) | `--surface-3` | `#242424` |
| Line (hairline) | `--line` | `rgba(255,255,255,0.06)` |
| Line (pronounced) | `--line-2` | `rgba(255,255,255,0.10)` |
| Text primary | `--text` | `#F2EEE5` (warm ivory) |
| Text dim | `--text-dim` | `rgba(242,238,229,0.60)` |
| Text muted | `--text-mute` | `rgba(242,238,229,0.36)` |
| Warning | `--warn` | `#D6B17A` |
| Danger | `--danger` | `#D97B7B` |
| Success | `--success` | `#9FBF9F` |

**Rule:** no saturated blues, greens, or cyans. The single accent is ivory. Warm amber only for attention states.

## Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / headline | Fraunces | 500–700 | Variable font, `opsz 48` for large sizes |
| Body / UI | Inter | 400–700 | Native iOS fallback: SF Pro Text |
| Labels / numerics | JetBrains Mono | 400–600 | Tabular numerics for all metrics |

Type ramp uses negative tracking (`-0.02em`) on headlines, positive tracking (`0.14em – 0.25em`) on mono labels.

## Layout

| Property | Value |
|---|---|
| Device | iPhone, portrait |
| Design width × height | 360 × 780 |
| Safe padding | 16 px horizontal, 22 px tab-bar inset |
| Corner radius | 14 (button), 18 (stat), 20 (card, tab bar) |
| Grid | 4 px baseline |

## Components

- **Card** — 20 px radius, 1 px hairline border, 18 px padding
- **Stat tile** — 14 px padding, 22 px display number over 10 px mono label
- **Quick action** — 74 px tall, 18 px radius, icon-over-label
- **Tab bar** — floating, blurred glass, 16 px left/right inset, 22 px from bottom
- **Slide-to-unlock** — 64 px tall pill track, 56 px thumb, mono label
- **Lock pill** — 30 px tall rounded pill with leading dot

## Motion

- Tab transitions: 200 ms ease
- Slider thumb: `cubic-bezier(.2,.9,.2,1)` 250 ms
- Pulse ring (lock indicator): 2 s linear, 1 → 2.4 scale, opacity 0.5 → 0
- Dash animation (map route): `stroke-dashoffset` -20, infinite

## Voice

- Short. Directive. "Unlock." not "Tap to unlock the vehicle."
- Numbers over words where both work: `158 km` beats "about 158 kilometers"
- Mono labels in caps with wide tracking signal meta-info; serif headlines signal identity
