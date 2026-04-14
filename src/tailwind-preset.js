// Tailwind preset for Monitor design system.
// 소비 프로젝트에서: presets: [require('@monitorcorp/design/tailwind-preset')]
//
// 모든 색이 CSS variable을 참조합니다. 런타임에 applyTheme('dark')를 호출하면
// 같은 유틸리티 클래스가 자동으로 다크 팔레트로 바뀝니다.

const preset = {
  theme: {
    extend: {
      colors: {
        bg:         'var(--mc-bg)',
        surface:    'var(--mc-surface)',
        'surface-2':'var(--mc-surface-2)',
        'surface-3':'var(--mc-surface-3)',

        ink:        'var(--mc-ink)',
        'ink-2':    'var(--mc-ink-2)',
        'ink-3':    'var(--mc-ink-3)',
        'ink-4':    'var(--mc-ink-4)',

        border:          'var(--mc-border)',
        'border-strong': 'var(--mc-border-strong)',

        accent:        'var(--mc-accent)',
        'accent-soft': 'var(--mc-accent-soft)',
        'accent-ring': 'var(--mc-accent-ring)',

        ok:     'var(--mc-ok)',
        warn:   'var(--mc-warn)',
        danger: 'var(--mc-danger)',

        'cat-reg-bg': 'var(--mc-cat-reg-bg)', 'cat-reg-fg': 'var(--mc-cat-reg-fg)',
        'cat-cmp-bg': 'var(--mc-cat-cmp-bg)', 'cat-cmp-fg': 'var(--mc-cat-cmp-fg)',
        'cat-aca-bg': 'var(--mc-cat-aca-bg)', 'cat-aca-fg': 'var(--mc-cat-aca-fg)',
        'cat-mkt-bg': 'var(--mc-cat-mkt-bg)', 'cat-mkt-fg': 'var(--mc-cat-mkt-fg)',

        'chart-1': 'var(--mc-chart-1)',
        'chart-2': 'var(--mc-chart-2)',
        'chart-3': 'var(--mc-chart-3)',
        'chart-4': 'var(--mc-chart-4)',
        'chart-5': 'var(--mc-chart-5)',
      },
      borderRadius: {
        'mc-sm': '6px',
        'mc-md': '10px',
        'mc-lg': '14px',
        'mc-xl': '20px',
      },
      boxShadow: {
        s1: 'var(--mc-shadow-s1)',
        s2: 'var(--mc-shadow-s2)',
        s3: 'var(--mc-shadow-s3)',
      },
      fontFamily: {
        ui:   ['-apple-system','BlinkMacSystemFont','SF Pro Text','Pretendard','Apple SD Gothic Neo','Helvetica Neue','Arial','sans-serif'],
        mono: ['ui-monospace','SF Mono','Menlo','JetBrains Mono','monospace'],
      },
      letterSpacing: {
        tight2:  '-0.02em',
        eyebrow: '0.08em',
      },
      transitionTimingFunction: {
        mc: 'cubic-bezier(.2,.8,.2,1)',
      },
      transitionDuration: {
        mc: '220ms',
      },
    },
  },
  plugins: [],
};

export default preset;
