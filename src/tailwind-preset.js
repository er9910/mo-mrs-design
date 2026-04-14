// Tailwind preset for Monitor design system.
// 소비 프로젝트에서: presets: [require('@monitorcorp/design/tailwind-preset')]

import { theme as t } from './theme.js';

const preset = {
  theme: {
    extend: {
      colors: {
        bg:         t.color.bg,
        surface:    t.color.surface,
        'surface-2':t.color.surface2,
        'surface-3':t.color.surface3,

        ink:        t.color.ink,
        'ink-2':    t.color.ink2,
        'ink-3':    t.color.ink3,
        'ink-4':    t.color.ink4,

        border:          t.color.border,
        'border-strong': t.color.borderStrong,

        accent:        t.color.accent,
        'accent-soft': t.color.accentSoft,
        'accent-ring': t.color.accentRing,

        ok:     t.color.ok,
        warn:   t.color.warn,
        danger: t.color.danger,

        'cat-reg-bg': t.color.catRegulatory.bg, 'cat-reg-fg': t.color.catRegulatory.fg,
        'cat-cmp-bg': t.color.catCompetitor.bg, 'cat-cmp-fg': t.color.catCompetitor.fg,
        'cat-aca-bg': t.color.catAcademic.bg,   'cat-aca-fg': t.color.catAcademic.fg,
        'cat-mkt-bg': t.color.catMarket.bg,     'cat-mkt-fg': t.color.catMarket.fg,
      },
      borderRadius: {
        'mc-sm': `${t.radius.sm}px`,
        'mc-md': `${t.radius.md}px`,
        'mc-lg': `${t.radius.lg}px`,
        'mc-xl': `${t.radius.xl}px`,
      },
      boxShadow: {
        s1: t.shadow.s1,
        s2: t.shadow.s2,
        s3: t.shadow.s3,
      },
      fontFamily: {
        ui:   t.font.ui.split(',').map(s => s.trim().replace(/^"|"$/g, '')),
        mono: t.font.mono.split(',').map(s => s.trim().replace(/^"|"$/g, '')),
      },
      letterSpacing: {
        tight2:  '-0.02em',
        eyebrow: '0.08em',
      },
      transitionTimingFunction: {
        mc: t.motion.ease,
      },
      transitionDuration: {
        mc: '220ms',
      },
    },
  },
  plugins: [],
};

export default preset;
