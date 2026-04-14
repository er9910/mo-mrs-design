import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';

/**
 * 3단 테마 토글 (Light / Auto / Dark).
 * lucide-react 필요. 소비 프로젝트가 이미 설치되어 있어야 함.
 *
 * Tailwind 프리셋을 쓰는 프로젝트에선 className으로 대체 가능.
 * 이 컴포넌트는 토큰 기반 인라인 스타일로만 작성되어 어디서든 동작.
 */
export function ThemeToggle({ style, compact = false, ...rest }) {
  const { mode, setMode } = useTheme();

  const btn = (id, Icon, label) => {
    const active = mode === id;
    return (
      <button
        key={id}
        type="button"
        onClick={() => setMode(id)}
        aria-label={label}
        aria-pressed={active}
        title={label}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: compact ? 28 : 30,
          height: compact ? 28 : 30,
          borderRadius: 6,
          border: 'none',
          background: active ? 'var(--mc-surface)' : 'transparent',
          color: active ? 'var(--mc-ink)' : 'var(--mc-ink-3)',
          boxShadow: active ? 'var(--mc-shadow-s1)' : 'none',
          cursor: 'pointer',
          transition: 'background .22s cubic-bezier(.2,.8,.2,1), color .22s cubic-bezier(.2,.8,.2,1)',
        }}
      >
        <Icon size={compact ? 14 : 15} strokeWidth={1.8} />
      </button>
    );
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      {...rest}
      style={{
        display: 'inline-flex',
        padding: 3,
        borderRadius: 9,
        background: 'var(--mc-surface-2)',
        gap: 2,
        ...style,
      }}
    >
      {btn('light', Sun, 'Light')}
      {btn('auto',  Monitor, 'Auto')}
      {btn('dark',  Moon, 'Dark')}
    </div>
  );
}

export default ThemeToggle;
