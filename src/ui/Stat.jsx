import React from 'react';
import { theme as t } from '../theme.js';

export function Stat({ label, value, unit, delta, deltaTone = 'neutral', style, ...rest }) {
  const deltaColor = {
    up: t.color.ok,
    down: t.color.danger,
    neutral: t.color.ink3,
  }[deltaTone] || t.color.ink3;

  return (
    <div
      {...rest}
      style={{
        background: t.color.surface,
        border: `1px solid ${t.color.border}`,
        borderRadius: t.radius.lg,
        boxShadow: t.shadow.s1,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        ...style,
      }}
    >
      <div style={{ fontSize: 12, color: t.color.ink3, fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.5, color: t.color.ink, lineHeight: 1 }}>
        {value}
        {unit && <span style={{ fontSize: 13, color: t.color.ink3, fontWeight: 500, marginLeft: 2 }}>{unit}</span>}
      </div>
      {delta && (
        <div style={{ fontSize: 12, color: deltaColor, fontFamily: t.font.mono }}>
          {delta}
        </div>
      )}
    </div>
  );
}

export default Stat;
