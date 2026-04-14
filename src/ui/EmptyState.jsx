import React from 'react';
import { theme as t } from '../theme.js';

export function EmptyState({ label = 'Empty', title, description, action, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: t.color.surface,
        border: `1px solid ${t.color.border}`,
        borderRadius: t.radius.lg,
        boxShadow: t.shadow.s1,
        ...style,
      }}
    >
      <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: t.color.ink4,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        marginBottom: 10,
      }}>{label}</div>
      {title && (
        <div style={{ fontSize: 14, color: t.color.ink2, marginBottom: 6, fontWeight: 500 }}>{title}</div>
      )}
      {description && (
        <div style={{ fontSize: 12, color: t.color.ink4, lineHeight: 1.5 }}>{description}</div>
      )}
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </div>
  );
}

export default EmptyState;
