import React from 'react';

/**
 * Centered empty-state placeholder.
 * @param {string} label - Eyebrow label (uppercase, ink-4)
 * @param {string} title - Main heading
 * @param {string} description - Supporting text
 * @param {React.ReactNode} action - CTA button or link
 */
export function EmptyState({ label, title, description, action, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: 'var(--mc-surface)',
        border: '1px solid var(--mc-border)',
        borderRadius: 14,
        ...style,
      }}
    >
      {label && (
        <div style={{
          fontSize: 11,
          color: 'var(--mc-ink-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: 8,
        }}>
          {label}
        </div>
      )}
      {title && (
        <div style={{
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--mc-ink-2)',
          marginBottom: description ? 6 : 0,
        }}>
          {title}
        </div>
      )}
      {description && (
        <div style={{
          fontSize: 13.5,
          color: 'var(--mc-ink-3)',
          lineHeight: 1.5,
        }}>
          {description}
        </div>
      )}
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </div>
  );
}

export default EmptyState;
