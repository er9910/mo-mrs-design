import React from 'react';

const TINT = {
  regulatory: { bg: 'var(--mc-cat-reg-bg)', fg: 'var(--mc-cat-reg-fg)' },
  competitor: { bg: 'var(--mc-cat-cmp-bg)', fg: 'var(--mc-cat-cmp-fg)' },
  academic:   { bg: 'var(--mc-cat-aca-bg)', fg: 'var(--mc-cat-aca-fg)' },
  market:     { bg: 'var(--mc-cat-mkt-bg)', fg: 'var(--mc-cat-mkt-fg)' },
  ok:         { bg: 'var(--mc-ok-soft)',     fg: 'var(--mc-ok)' },
  warn:       { bg: 'var(--mc-warn-soft)',   fg: 'var(--mc-warn)' },
  danger:     { bg: 'var(--mc-danger-soft)', fg: 'var(--mc-danger)' },
  accent:     { bg: 'var(--mc-accent-soft)', fg: 'var(--mc-accent)' },
  neutral:    { bg: 'var(--mc-surface-2)',   fg: 'var(--mc-ink-2)' },
};

/**
 * Pill-shaped label chip.
 * @param {string} tint - regulatory|competitor|academic|market|ok|warn|danger|accent|neutral
 * @param {boolean} dot - Show leading dot indicator
 */
export function Chip({ tint = 'neutral', dot = false, style, children, ...rest }) {
  const c = TINT[tint] || TINT.neutral;
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dot ? 6 : 0,
        fontSize: 11,
        fontWeight: 600,
        background: c.bg,
        color: c.fg,
        padding: '2px 8px',
        borderRadius: 9999,
        lineHeight: 1.4,
        ...style,
      }}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'currentColor', opacity: 0.8 }} />
      )}
      {children}
    </span>
  );
}

export default Chip;
