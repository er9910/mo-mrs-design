import React from 'react';

/**
 * Card header with title, subtitle, and optional right-side action.
 */
export function CardHeader({ title, subtitle, right, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 12,
        ...style,
      }}
    >
      <div style={{ minWidth: 0 }}>
        {title && (
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--mc-ink)', lineHeight: 1.3 }}>
            {title}
          </div>
        )}
        {subtitle && (
          <div style={{ fontSize: 12, color: 'var(--mc-ink-3)', marginTop: 2, lineHeight: 1.4 }}>
            {subtitle}
          </div>
        )}
      </div>
      {right && <div style={{ flexShrink: 0 }}>{right}</div>}
    </div>
  );
}

export default CardHeader;
