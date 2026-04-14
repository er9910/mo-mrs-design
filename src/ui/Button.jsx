import React from 'react';
import { theme as t } from '../theme.js';

const VARIANTS = {
  default: (disabled) => ({
    background: t.color.surface,
    color: t.color.ink,
    border: `1px solid ${t.color.border}`,
    boxShadow: t.shadow.s1,
    opacity: disabled ? 0.5 : 1,
  }),
  primary: (disabled) => ({
    background: disabled ? t.color.ink4 : t.color.accent,
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: disabled ? 'none' : `0 1px 2px rgba(0,113,227,.35), ${t.shadow.s1}`,
  }),
  ghost: () => ({
    background: 'transparent',
    color: t.color.ink2,
    border: '1px solid transparent',
    boxShadow: 'none',
  }),
  success: () => ({
    background: t.color.ok,
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: t.shadow.s1,
  }),
  danger: () => ({
    background: t.color.danger,
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: t.shadow.s1,
  }),
};

const SIZES = {
  sm: { padding: '4px 10px', fontSize: 12, radius: 6 },
  md: { padding: '8px 14px', fontSize: 13, radius: 8 },
  lg: { padding: '10px 18px', fontSize: 14, radius: 10 },
};

export function Button({
  variant = 'default',
  size = 'md',
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      disabled={disabled}
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: s.padding,
        borderRadius: s.radius,
        fontSize: s.fontSize,
        fontWeight: 500,
        letterSpacing: -0.1,
        fontFamily: t.font.ui,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: `background ${t.motion.dur} ${t.motion.ease}, box-shadow ${t.motion.dur} ${t.motion.ease}, transform ${t.motion.dur} ${t.motion.ease}`,
        ...VARIANTS[variant](disabled),
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
