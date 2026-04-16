import React from 'react';

const cx = (...xs) => xs.filter(Boolean).join(' ');

/**
 * Key metric display.
 * Styles come from primitives.css — consumer must load @monitorcorp/design/dist/css/primitives.css.
 *
 * @param {string} label - Eyebrow label
 * @param {string|number} value - Main figure
 * @param {string} unit - Unit suffix
 * @param {string} delta - Change indicator (e.g. "+12.4%")
 * @param {'up'|'down'|'neutral'} deltaTone - Color tone for delta
 */
export function Stat({ label, value, unit, delta, deltaTone = 'neutral', className, ...rest }) {
  return (
    <div {...rest} className={cx('mc-stat', className)}>
      {label && <div className="mc-stat__label">{label}</div>}
      <div className="mc-stat__row">
        <span className="mc-stat__value">{value}</span>
        {unit && <span className="mc-stat__unit">{unit}</span>}
      </div>
      {delta && (
        <div className={cx('mc-stat__delta', `mc-stat__delta--${deltaTone}`)}>
          {delta}
        </div>
      )}
    </div>
  );
}

export default Stat;
