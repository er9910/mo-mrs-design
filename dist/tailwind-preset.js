import {
  theme
} from "./chunk-LPR2RVK7.js";

// src/tailwind-preset.js
var preset = {
  theme: {
    extend: {
      colors: {
        bg: theme.color.bg,
        surface: theme.color.surface,
        "surface-2": theme.color.surface2,
        "surface-3": theme.color.surface3,
        ink: theme.color.ink,
        "ink-2": theme.color.ink2,
        "ink-3": theme.color.ink3,
        "ink-4": theme.color.ink4,
        border: theme.color.border,
        "border-strong": theme.color.borderStrong,
        accent: theme.color.accent,
        "accent-soft": theme.color.accentSoft,
        "accent-ring": theme.color.accentRing,
        ok: theme.color.ok,
        warn: theme.color.warn,
        danger: theme.color.danger,
        "cat-reg-bg": theme.color.catRegulatory.bg,
        "cat-reg-fg": theme.color.catRegulatory.fg,
        "cat-cmp-bg": theme.color.catCompetitor.bg,
        "cat-cmp-fg": theme.color.catCompetitor.fg,
        "cat-aca-bg": theme.color.catAcademic.bg,
        "cat-aca-fg": theme.color.catAcademic.fg,
        "cat-mkt-bg": theme.color.catMarket.bg,
        "cat-mkt-fg": theme.color.catMarket.fg
      },
      borderRadius: {
        "mc-sm": `${theme.radius.sm}px`,
        "mc-md": `${theme.radius.md}px`,
        "mc-lg": `${theme.radius.lg}px`,
        "mc-xl": `${theme.radius.xl}px`
      },
      boxShadow: {
        s1: theme.shadow.s1,
        s2: theme.shadow.s2,
        s3: theme.shadow.s3
      },
      fontFamily: {
        ui: theme.font.ui.split(",").map((s) => s.trim().replace(/^"|"$/g, "")),
        mono: theme.font.mono.split(",").map((s) => s.trim().replace(/^"|"$/g, ""))
      },
      letterSpacing: {
        tight2: "-0.02em",
        eyebrow: "0.08em"
      },
      transitionTimingFunction: {
        mc: theme.motion.ease
      },
      transitionDuration: {
        mc: "220ms"
      }
    }
  },
  plugins: []
};
var tailwind_preset_default = preset;
export {
  tailwind_preset_default as default
};
