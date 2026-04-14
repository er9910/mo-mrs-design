import React from 'react';
import { theme as t } from '../theme.js';

const TINTS = {
  regulatory: t.color.catRegulatory,
  competitor: t.color.catCompetitor,
  academic:   t.color.catAcademic,
  market:     t.color.catMarket,
  ok:     { bg: 'rgba(41,167,69,0.12)', fg: t.color.ok },
  warn:   { bg: 'rgba(201,122,0,0.12)', fg: t.color.warn },
  danger: { bg: 'rgba(216,50,44,0.12)', fg: t.color.danger },
  accent: { bg: t.color.accentSoft,      fg: t.color.accent },
  neutral:{ bg: t.color.surface2,        fg: t.color.ink3 },
};

export function Chip({ children, tint = 'neutral', dot = false, style, ...rest }) {
  const c = typeof tint === 'string' ? (TINTS[tint] || TINTS.neutral) : tint;
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '2px 8px',
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: -0.1,
        background: c.bg,
        color: c.fg,
        fontFamily: t.font.ui,
        ...style,
      }}
    >
      {dot && <span aria-hidden style={{ width: 6, height: 6, borderRadius: '50%', background: c.fg }} />}
      {children}
    </span>
  );
}

export default Chip;
