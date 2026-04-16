import React from 'react';

const TONE = {
  up:      'var(--mc-ok)',
  down:    'var(--mc-danger)',
  neutral: 'var(--mc-ink-3)',
};

/**
 * Key metric display.
 * @param {string} label - Eyebrow label
 * @param {string|number} value - Main figure
 * @param {string} unit - Unit suffix
 * @param {string} delta - Change indicator (e.g. "+12.4%")
 * @param {'up'|'down'|'neutral'} deltaTone - Color tone for delta
 */
export function Stat({ label, value, unit, delta, deltaTone = 'neutral', style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      {label && (
        <div style={{
          fontSize: 11,
          color: 'var(--mc-ink-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          {label}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontSize: 26,
          fontWeight: 600,
          color: 'var(--mc-ink)',
          letterSpacing: '-0.02em',
          fontFamily: 'var(--mc-font-mono)',
        }}>
          {value}
        </span>
        {unit && (
          <span style={{ fontSize: 12, color: 'var(--mc-ink-3)' }}>{unit}</span>
        )}
      </div>
      {delta && (
        <div style={{
          fontSize: 12,
          color: TONE[deltaTone] || TONE.neutral,
          fontFamily: 'var(--mc-font-mono)',
        }}>
          {delta}
        </div>
      )}
    </div>
  );
}

export default Stat;
