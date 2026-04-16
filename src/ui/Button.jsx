import React from 'react';

const SIZE = {
  sm: { padY: 6, padX: 12, fontSize: 12, radius: 6 },
  md: { padY: 10, padX: 16, fontSize: 13.5, radius: 10 },
  lg: { padY: 12, padX: 20, fontSize: 14, radius: 10 },
};

const VARIANT = {
  default: { bg: 'var(--mc-surface)',    fg: 'var(--mc-ink)',       border: '1px solid var(--mc-border)' },
  primary: { bg: 'var(--mc-accent)',     fg: 'var(--mc-on-accent)', border: '1px solid transparent' },
  ghost:   { bg: 'transparent',          fg: 'var(--mc-ink-2)',     border: '1px solid transparent' },
  success: { bg: 'var(--mc-ok)',         fg: 'var(--mc-on-accent)', border: '1px solid transparent' },
  danger:  { bg: 'var(--mc-danger)',     fg: 'var(--mc-on-accent)', border: '1px solid transparent' },
};

/**
 * General-purpose button.
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
  style,
  children,
  ...rest
}) {
  const s = SIZE[size] || SIZE.md;
  const v = VARIANT[variant] || VARIANT.default;
  return (
    <button
      {...rest}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        background: disabled ? 'var(--mc-surface-2)' : v.bg,
        color: disabled ? 'var(--mc-ink-4)' : v.fg,
        border: v.border,
        borderRadius: s.radius,
        padding: `${s.padY}px ${s.padX}px`,
        fontSize: s.fontSize,
        fontWeight: 600,
        fontFamily: 'var(--mc-font-ui)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background .22s cubic-bezier(.2,.8,.2,1), color .22s cubic-bezier(.2,.8,.2,1), box-shadow .22s cubic-bezier(.2,.8,.2,1), transform .22s cubic-bezier(.2,.8,.2,1)',
        ...style,
      }}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
