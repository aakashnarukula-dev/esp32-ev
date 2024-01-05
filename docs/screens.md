# Screens

Six primary screens. Each does one job well.

---

## 1 · Drive (Home)

<img src="../images/screens/screen-home.png" width="280" align="right" alt="Drive screen"/>

**Purpose:** quick status + primary action.

**Hierarchy:**
1. Rider greeting + link status pill
2. Vehicle identity (model, license plate)
3. Scooter silhouette
4. Lock gesture (tap to lock)
5. Battery / Range / Odometer stats row

**Primary copy:** `TAP TO LOCK` — mono caps, wide tracking.

<br clear="all"/>

---

## 2 · Track (Live GPS)

<img src="../images/screens/screen-track.png" width="280" align="right" alt="Track screen"/>

**Purpose:** where the scooter is, where it's been.

**Hierarchy:**
1. Live location label (serif neighborhood name)
2. Low-contrast grid map with route line
3. Pulse ring around current position
4. Distance / ETA card (bottom sheet)

**Map style:** 36 px grid, no labels, no satellite. Readable without landmarks.

<br clear="all"/>

---

## 3 · Stats (Ride Analytics)

<img src="../images/screens/screen-stats.png" width="280" align="right" alt="Stats screen"/>

**Purpose:** see trends without studying dashboards.

**Hierarchy:**
1. This week's distance — Fraunces display number
2. Day-of-week mini chart
3. Totals: distance, efficiency, CO₂, money saved
4. Recent trips list

<br clear="all"/>

---

## 4 · Power (Battery Detail)

<img src="../images/screens/screen-power.png" width="280" align="right" alt="Power screen"/>

**Purpose:** trust your remaining range.

**Hierarchy:**
1. State of charge — oversized serif numeric
2. Range remaining
3. Thin-line fill bar
4. Status / Temperature / Health / Cycles / Last charge
5. Schedule charging CTA

Warm amber accent only when a threshold is crossed.

<br clear="all"/>

---

## 5 · Devices (Bluetooth)

<img src="../images/screens/screen-devices.png" width="280" align="right" alt="Devices screen"/>

**Purpose:** pair, manage, forget.

**Hierarchy:**
1. Current connection (concentric pulsing rings)
2. Paired devices list (scooter, helmet HUD, key fob)
3. Disconnect CTA

<br clear="all"/>

---

## 6 · Me (Profile)

<img src="../images/screens/screen-me.png" width="280" align="right" alt="Me screen"/>

**Purpose:** rider identity + settings.

**Hierarchy:**
1. Avatar + rider name (Fraunces)
2. Settings list (security, shared keys, notifications, language)
3. Next service progress

<br clear="all"/>

---

## Tab bar order

`Track · Stats · Drive · Power · Me`

`Drive` sits in the center — the app's primary job in one tap.
