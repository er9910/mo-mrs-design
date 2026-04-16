import React from 'react';

/**
 * Surface card with token-based styling.
 * @param {number} padding - Inner padding (default 20)
 * @param {string|boolean} accent - Left accent bar color, or true for default accent
 */
export function Card({ padding = 20, accent, style, children, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        position: 'relative',
        background: 'var(--mc-surface)',
        border: '1px solid var(--mc-border)',
        borderRadius: 14,
        boxShadow: 'var(--mc-shadow-s1)',
        padding,
        overflow: 'hidden',
        transition: 'box-shadow .22s cubic-bezier(.2,.8,.2,1), transform .22s cubic-bezier(.2,.8,.2,1)',
        ...style,
      }}
    >
      {accent && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            insetInlineStart: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: typeof accent === 'string' ? accent : 'var(--mc-accent)',
          }}
        />
      )}
      {children}
    </div>
  );
}

export default Card;
