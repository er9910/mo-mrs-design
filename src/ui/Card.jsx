import React from 'react';

const cx = (...xs) => xs.filter(Boolean).join(' ');

/**
 * Surface card with token-based styling.
 * Styles come from primitives.css — consumer must load @monitorcorp/design/dist/css/primitives.css.
 *
 * @param {number} padding - Override inner padding (default 20px from CSS)
 * @param {string|boolean} accent - Left accent bar. true = default accent color, string = custom color
 */
export function Card({ padding, accent, className, style, children, ...rest }) {
  const combinedStyle = padding != null ? { ...style, padding } : style;
  return (
    <div {...rest} className={cx('mc-card', className)} style={combinedStyle}>
      {accent && (
        <span
          aria-hidden="true"
          className="mc-card__accent"
          style={typeof accent === 'string' ? { background: accent } : undefined}
        />
      )}
      {children}
    </div>
  );
}

export default Card;
