import React from 'react';
import { theme as t } from '../theme.js';

export function Card({ children, padding = 16, accent, style, ...rest }) {
  return (
    <section
      {...rest}
      style={{
        background: t.color.surface,
        border: `1px solid ${t.color.border}`,
        borderRadius: t.radius.lg,
        boxShadow: t.shadow.s1,
        padding,
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {accent && (
        <span
          aria-hidden
          style={{
            position: 'absolute',
            left: 0, top: 14, bottom: 14,
            width: 3,
            background: t.color.accent,
            borderRadius: 2,
          }}
        />
      )}
      {children}
    </section>
  );
}

export function CardHeader({ title, subtitle, right, style, ...rest }) {
  return (
    <header
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
          <h3 style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            color: t.color.ink,
            letterSpacing: -0.2,
            lineHeight: 1.35,
          }}>{title}</h3>
        )}
        {subtitle && (
          <p style={{
            margin: '4px 0 0',
            fontSize: 12,
            color: t.color.ink3,
            lineHeight: 1.4,
          }}>{subtitle}</p>
        )}
      </div>
      {right && <div style={{ flexShrink: 0 }}>{right}</div>}
    </header>
  );
}

export default Card;
