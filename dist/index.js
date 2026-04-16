import {
  useTheme
} from "./chunk-A33KXLEE.js";
import {
  applyTheme,
  paletteToCssVars,
  theme,
  watchSystemTheme
} from "./chunk-S3GQG74L.js";

// src/ui/ThemeToggle.jsx
import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
function ThemeToggle({ style, compact = false, ...rest }) {
  const { mode, setMode } = useTheme();
  const btn = (id, Icon, label) => {
    const active = mode === id;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: id,
        type: "button",
        onClick: () => setMode(id),
        "aria-label": label,
        "aria-pressed": active,
        title: label,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: compact ? 28 : 30,
          height: compact ? 28 : 30,
          borderRadius: 6,
          border: "none",
          background: active ? "var(--mc-surface)" : "transparent",
          color: active ? "var(--mc-ink)" : "var(--mc-ink-3)",
          boxShadow: active ? "var(--mc-shadow-s1)" : "none",
          cursor: "pointer",
          transition: "background .22s cubic-bezier(.2,.8,.2,1), color .22s cubic-bezier(.2,.8,.2,1)"
        }
      },
      /* @__PURE__ */ React.createElement(Icon, { size: compact ? 14 : 15, strokeWidth: 1.8 })
    );
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Theme",
      ...rest,
      style: {
        display: "inline-flex",
        padding: 3,
        borderRadius: 9,
        background: "var(--mc-surface-2)",
        gap: 2,
        ...style
      }
    },
    btn("light", Sun, "Light"),
    btn("auto", Monitor, "Auto"),
    btn("dark", Moon, "Dark")
  );
}

// src/ui/Chip.jsx
var CHIP_TINT = {
  regulatory: { bg: "var(--mc-cat-reg-bg)", fg: "var(--mc-cat-reg-fg)" },
  competitor: { bg: "var(--mc-cat-cmp-bg)", fg: "var(--mc-cat-cmp-fg)" },
  academic: { bg: "var(--mc-cat-aca-bg)", fg: "var(--mc-cat-aca-fg)" },
  market: { bg: "var(--mc-cat-mkt-bg)", fg: "var(--mc-cat-mkt-fg)" },
  ok: { bg: "var(--mc-ok-soft)", fg: "var(--mc-ok)" },
  warn: { bg: "var(--mc-warn-soft)", fg: "var(--mc-warn)" },
  danger: { bg: "var(--mc-danger-soft)", fg: "var(--mc-danger)" },
  accent: { bg: "var(--mc-accent-soft)", fg: "var(--mc-accent)" },
  neutral: { bg: "var(--mc-surface-2)", fg: "var(--mc-ink-2)" }
};
function Chip({ tint = "neutral", dot = false, style, children, ...rest }) {
  const c = CHIP_TINT[tint] || CHIP_TINT.neutral;
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      ...rest,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: dot ? 6 : 0,
        fontSize: 11,
        fontWeight: 600,
        background: c.bg,
        color: c.fg,
        padding: "2px 8px",
        borderRadius: 9999,
        lineHeight: 1.4,
        ...style
      }
    },
    dot && /* @__PURE__ */ React.createElement("span", {
      style: { width: 6, height: 6, borderRadius: 9999, background: "currentColor", opacity: 0.8 }
    }),
    children
  );
}

// src/ui/Button.jsx
var BTN_SIZE = {
  sm: { padY: 6, padX: 12, fontSize: 12, radius: 6 },
  md: { padY: 10, padX: 16, fontSize: 13.5, radius: 10 },
  lg: { padY: 12, padX: 20, fontSize: 14, radius: 10 }
};
var BTN_VARIANT = {
  default: { bg: "var(--mc-surface)", fg: "var(--mc-ink)", border: "1px solid var(--mc-border)" },
  primary: { bg: "var(--mc-accent)", fg: "var(--mc-on-accent)", border: "1px solid transparent" },
  ghost: { bg: "transparent", fg: "var(--mc-ink-2)", border: "1px solid transparent" },
  success: { bg: "var(--mc-ok)", fg: "var(--mc-on-accent)", border: "1px solid transparent" },
  danger: { bg: "var(--mc-danger)", fg: "var(--mc-on-accent)", border: "1px solid transparent" }
};
function Button({ variant = "default", size = "md", leftIcon, rightIcon, disabled = false, style, children, ...rest }) {
  const s = BTN_SIZE[size] || BTN_SIZE.md;
  const v = BTN_VARIANT[variant] || BTN_VARIANT.default;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      ...rest,
      disabled,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        background: disabled ? "var(--mc-surface-2)" : v.bg,
        color: disabled ? "var(--mc-ink-4)" : v.fg,
        border: v.border,
        borderRadius: s.radius,
        padding: `${s.padY}px ${s.padX}px`,
        fontSize: s.fontSize,
        fontWeight: 600,
        fontFamily: "var(--mc-font-ui)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background .22s cubic-bezier(.2,.8,.2,1), color .22s cubic-bezier(.2,.8,.2,1), box-shadow .22s cubic-bezier(.2,.8,.2,1), transform .22s cubic-bezier(.2,.8,.2,1)",
        ...style
      }
    },
    leftIcon,
    children,
    rightIcon
  );
}

// src/ui/Card.jsx
function Card({ padding = 20, accent, style, children, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ...rest,
      style: {
        position: "relative",
        background: "var(--mc-surface)",
        border: "1px solid var(--mc-border)",
        borderRadius: 14,
        boxShadow: "var(--mc-shadow-s1)",
        padding,
        overflow: "hidden",
        transition: "box-shadow .22s cubic-bezier(.2,.8,.2,1), transform .22s cubic-bezier(.2,.8,.2,1)",
        ...style
      }
    },
    accent && /* @__PURE__ */ React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        width: 3,
        background: typeof accent === "string" ? accent : "var(--mc-accent)"
      }
    }),
    children
  );
}

// src/ui/CardHeader.jsx
function CardHeader({ title, subtitle, right, style, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ...rest,
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 12,
        ...style
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      { style: { minWidth: 0 } },
      title && /* @__PURE__ */ React.createElement(
        "div",
        { style: { fontSize: 14, fontWeight: 600, color: "var(--mc-ink)", lineHeight: 1.3 } },
        title
      ),
      subtitle && /* @__PURE__ */ React.createElement(
        "div",
        { style: { fontSize: 12, color: "var(--mc-ink-3)", marginTop: 2, lineHeight: 1.4 } },
        subtitle
      )
    ),
    right && /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0 } }, right)
  );
}

// src/ui/EmptyState.jsx
function EmptyState({ label, title, description, action, style, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ...rest,
      style: {
        textAlign: "center",
        padding: "60px 20px",
        background: "var(--mc-surface)",
        border: "1px solid var(--mc-border)",
        borderRadius: 14,
        ...style
      }
    },
    label && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontSize: 11,
          color: "var(--mc-ink-4)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 8
        }
      },
      label
    ),
    title && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontSize: 14,
          fontWeight: 600,
          color: "var(--mc-ink-2)",
          marginBottom: description ? 6 : 0
        }
      },
      title
    ),
    description && /* @__PURE__ */ React.createElement(
      "div",
      { style: { fontSize: 13.5, color: "var(--mc-ink-3)", lineHeight: 1.5 } },
      description
    ),
    action && /* @__PURE__ */ React.createElement(
      "div",
      { style: { marginTop: 16 } },
      action
    )
  );
}

// src/ui/Stat.jsx
var STAT_TONE = {
  up: "var(--mc-ok)",
  down: "var(--mc-danger)",
  neutral: "var(--mc-ink-3)"
};
function Stat({ label, value, unit, delta, deltaTone = "neutral", style, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ...rest,
      style: { display: "flex", flexDirection: "column", gap: 4, ...style }
    },
    label && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontSize: 11,
          color: "var(--mc-ink-4)",
          textTransform: "uppercase",
          letterSpacing: "0.08em"
        }
      },
      label
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      { style: { display: "flex", alignItems: "baseline", gap: 6 } },
      /* @__PURE__ */ React.createElement(
        "span",
        {
          style: {
            fontSize: 26,
            fontWeight: 600,
            color: "var(--mc-ink)",
            letterSpacing: "-0.02em",
            fontFamily: "var(--mc-font-mono)"
          }
        },
        value
      ),
      unit && /* @__PURE__ */ React.createElement(
        "span",
        { style: { fontSize: 12, color: "var(--mc-ink-3)" } },
        unit
      )
    ),
    delta && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontSize: 12,
          color: STAT_TONE[deltaTone] || STAT_TONE.neutral,
          fontFamily: "var(--mc-font-mono)"
        }
      },
      delta
    )
  );
}

export {
  Button,
  Card,
  CardHeader,
  Chip,
  EmptyState,
  Stat,
  ThemeToggle,
  applyTheme,
  theme as default,
  paletteToCssVars,
  theme,
  useTheme,
  watchSystemTheme
};
