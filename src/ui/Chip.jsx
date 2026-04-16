import React from 'react';

const cx = (...xs) => xs.filter(Boolean).join(' ');

/**
 * Pill-shaped label chip.
 * Styles come from primitives.css — consumer must load @monitorcorp/design/dist/css/primitives.css.
 *
 * @param {string} tint - regulatory|competitor|academic|market|ok|warn|danger|accent|neutral
 * @param {boolean} dot - Show leading dot indicator
 */
export function Chip({ tint = 'neutral', dot = false, className, children, ...rest }) {
  return (
    <span
      {...rest}
      className={cx('mc-chip', `mc-chip--${tint}`, dot && 'mc-chip--dot', className)}
    >
      {dot && <span className="mc-chip__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Chip;
