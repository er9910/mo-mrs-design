import React from 'react';

const cx = (...xs) => xs.filter(Boolean).join(' ');

/**
 * General-purpose button.
 * Styles come from primitives.css — consumer must load @monitorcorp/design/dist/css/primitives.css.
 *
 * @param {'default'|'primary'|'ghost'|'success'|'danger'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {React.ReactNode} leftIcon
 * @param {React.ReactNode} rightIcon
 */
export function Button({
  variant = 'default',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled = false,
  className,
  children,
  ...rest
}) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cx(
        'mc-btn',
        `mc-btn--${size}`,
        variant !== 'default' && `mc-btn--${variant}`,
        className,
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
