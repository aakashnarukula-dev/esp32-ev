// icons.jsx — line icons for the Volt EV companion app
// Consistent 24x24, 1.6 stroke, round caps

const Ico = ({ children, size = 22, color = 'currentColor', fill = 'none', sw = 1.6, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {children}
  </svg>
);

const IcoHome = (p) => <Ico {...p}><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></Ico>;
const IcoMap = (p) => <Ico {...p}><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></Ico>;
const IcoChart = (p) => <Ico {...p}><path d="M3 20h18"/><rect x="5" y="11" width="3" height="7"/><rect x="10.5" y="7" width="3" height="11"/><rect x="16" y="14" width="3" height="4"/></Ico>;
const IcoBolt = (p) => <Ico {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></Ico>;
const IcoUser = (p) => <Ico {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></Ico>;
const IcoLock = (p) => <Ico {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></Ico>;
const IcoUnlock = (p) => <Ico {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/></Ico>;
const IcoBluetooth = (p) => <Ico {...p}><path d="M7 7l10 10-5 4V3l5 4L7 17"/></Ico>;
const IcoHorn = (p) => <Ico {...p}><path d="M3 10v4h4l5 4V6l-5 4H3z"/><path d="M17 8a5 5 0 0 1 0 8"/><path d="M20 5a9 9 0 0 1 0 14"/></Ico>;
const IcoLight = (p) => <Ico {...p}><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.2 1 2.5v1h6v-1c0-1.3.2-1.7 1-2.5A6 6 0 0 0 12 3z"/></Ico>;
const IcoRoute = (p) => <Ico {...p}><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/></Ico>;
const IcoBattery = (p) => <Ico {...p}><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4"/><rect x="5.5" y="9.5" width="8" height="5" fill="currentColor" stroke="none"/></Ico>;
const IcoGear = (p) => <Ico {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></Ico>;
const IcoPlay = (p) => <Ico {...p} fill="currentColor"><path d="M6 4l14 8-14 8z"/></Ico>;
const IcoPlus = (p) => <Ico {...p}><path d="M12 5v14M5 12h14"/></Ico>;
const IcoChevron = (p) => <Ico {...p}><path d="M9 6l6 6-6 6"/></Ico>;
const IcoTemp = (p) => <Ico {...p}><path d="M12 3a2 2 0 0 0-2 2v9a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2z"/></Ico>;
const IcoWind = (p) => <Ico {...p}><path d="M3 8h13a3 3 0 1 0-3-3M3 12h17a3 3 0 1 1-3 3M3 16h11"/></Ico>;
const IcoClock = (p) => <Ico {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Ico>;
const IcoPin = (p) => <Ico {...p}><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></Ico>;
const IcoSearch = (p) => <Ico {...p}><circle cx="11" cy="11" r="7"/><path d="M16 16l4 4"/></Ico>;
const IcoShield = (p) => <Ico {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></Ico>;
const IcoArrow = (p) => <Ico {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Ico>;
const IcoCheck = (p) => <Ico {...p}><path d="M5 12l5 5L20 7"/></Ico>;
const IcoScooter = (p) => <Ico {...p} sw={1.4}>
  <circle cx="5.5" cy="18" r="2.5"/>
  <circle cx="18.5" cy="18" r="2.5"/>
  <path d="M5.5 18h6l3-6h-4l-2-4h-3"/>
  <path d="M15 12l2-5h2"/>
  <path d="M11 8h3"/>
</Ico>;
const IcoRefresh = (p) => <Ico {...p}><path d="M4 12a8 8 0 0 1 13.5-5.5L20 9"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-13.5 5.5L4 15"/><path d="M4 20v-5h5"/></Ico>;
const IcoCompass = (p) => <Ico {...p}><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6z" fill="currentColor"/></Ico>;
const IcoKey = (p) => <Ico {...p}><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L20 3l-3 3 2 2-3 2 2 2"/></Ico>;

Object.assign(window, {
  Ico, IcoHome, IcoMap, IcoChart, IcoBolt, IcoUser, IcoLock, IcoUnlock,
  IcoBluetooth, IcoHorn, IcoLight, IcoRoute, IcoBattery, IcoGear, IcoPlay,
  IcoPlus, IcoChevron, IcoTemp, IcoWind, IcoClock, IcoPin, IcoSearch, IcoShield,
  IcoArrow, IcoCheck, IcoScooter, IcoRefresh, IcoCompass, IcoKey,
});
