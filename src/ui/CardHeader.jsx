import React from 'react';

const cx = (...xs) => xs.filter(Boolean).join(' ');

/**
 * Card header with title, subtitle, and optional right-side action.
 * Styles come from primitives.css — consumer must load @monitorcorp/design/dist/css/primitives.css.
 */
export function CardHeader({ title, subtitle, right, className, ...rest }) {
  return (
    <div {...rest} className={cx('mc-card-header', className)}>
      <div className="mc-card-header__main">
        {title && <div className="mc-card-header__title">{title}</div>}
        {subtitle && <div className="mc-card-header__subtitle">{subtitle}</div>}
      </div>
      {right && <div className="mc-card-header__right">{right}</div>}
    </div>
  );
}

export default CardHeader;
