import {
  theme
} from "./chunk-UA6NXNZV.js";

// src/ui/Chip.jsx
import React from "react";
var TINTS = {
  regulatory: theme.color.catRegulatory,
  competitor: theme.color.catCompetitor,
  academic: theme.color.catAcademic,
  market: theme.color.catMarket,
  ok: { bg: "rgba(41,167,69,0.12)", fg: theme.color.ok },
  warn: { bg: "rgba(201,122,0,0.12)", fg: theme.color.warn },
  danger: { bg: "rgba(216,50,44,0.12)", fg: theme.color.danger },
  accent: { bg: theme.color.accentSoft, fg: theme.color.accent },
  neutral: { bg: theme.color.surface2, fg: theme.color.ink3 }
};
function Chip({ children, tint = "neutral", dot = false, style, ...rest }) {
  const c = typeof tint === "string" ? TINTS[tint] || TINTS.neutral : tint;
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      ...rest,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "2px 8px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: -0.1,
        background: c.bg,
        color: c.fg,
        fontFamily: theme.font.ui,
        ...style
      }
    },
    dot && /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 6, height: 6, borderRadius: "50%", background: c.fg } }),
    children
  );
}

// src/ui/Button.jsx
import React2 from "react";
var VARIANTS = {
  default: (disabled) => ({
    background: theme.color.surface,
    color: theme.color.ink,
    border: `1px solid ${theme.color.border}`,
    boxShadow: theme.shadow.s1,
    opacity: disabled ? 0.5 : 1
  }),
  primary: (disabled) => ({
    background: disabled ? theme.color.ink4 : theme.color.accent,
    color: "#fff",
    border: "1px solid transparent",
    boxShadow: disabled ? "none" : `0 1px 2px rgba(0,113,227,.35), ${theme.shadow.s1}`
  }),
  ghost: () => ({
    background: "transparent",
    color: theme.color.ink2,
    border: "1px solid transparent",
    boxShadow: "none"
  }),
  success: () => ({
    background: theme.color.ok,
    color: "#fff",
    border: "1px solid transparent",
    boxShadow: theme.shadow.s1
  }),
  danger: () => ({
    background: theme.color.danger,
    color: "#fff",
    border: "1px solid transparent",
    boxShadow: theme.shadow.s1
  })
};
var SIZES = {
  sm: { padding: "4px 10px", fontSize: 12, radius: 6 },
  md: { padding: "8px 14px", fontSize: 13, radius: 8 },
  lg: { padding: "10px 18px", fontSize: 14, radius: 10 }
};
function Button({
  variant = "default",
  size = "md",
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  return /* @__PURE__ */ React2.createElement(
    "button",
    {
      disabled,
      ...rest,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: s.padding,
        borderRadius: s.radius,
        fontSize: s.fontSize,
        fontWeight: 500,
        letterSpacing: -0.1,
        fontFamily: theme.font.ui,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: `background ${theme.motion.dur} ${theme.motion.ease}, box-shadow ${theme.motion.dur} ${theme.motion.ease}, transform ${theme.motion.dur} ${theme.motion.ease}`,
        ...VARIANTS[variant](disabled),
        ...style
      }
    },
    leftIcon,
    children,
    rightIcon
  );
}

// src/ui/Card.jsx
import React3 from "react";
function Card({ children, padding = 16, accent, style, ...rest }) {
  return /* @__PURE__ */ React3.createElement(
    "section",
    {
      ...rest,
      style: {
        background: theme.color.surface,
        border: `1px solid ${theme.color.border}`,
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadow.s1,
        padding,
        position: "relative",
        overflow: "hidden",
        ...style
      }
    },
    accent && /* @__PURE__ */ React3.createElement(
      "span",
      {
        "aria-hidden": true,
        style: {
          position: "absolute",
          left: 0,
          top: 14,
          bottom: 14,
          width: 3,
          background: theme.color.accent,
          borderRadius: 2
        }
      }
    ),
    children
  );
}
function CardHeader({ title, subtitle, right, style, ...rest }) {
  return /* @__PURE__ */ React3.createElement(
    "header",
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
    /* @__PURE__ */ React3.createElement("div", { style: { minWidth: 0 } }, title && /* @__PURE__ */ React3.createElement("h3", { style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      color: theme.color.ink,
      letterSpacing: -0.2,
      lineHeight: 1.35
    } }, title), subtitle && /* @__PURE__ */ React3.createElement("p", { style: {
      margin: "4px 0 0",
      fontSize: 12,
      color: theme.color.ink3,
      lineHeight: 1.4
    } }, subtitle)),
    right && /* @__PURE__ */ React3.createElement("div", { style: { flexShrink: 0 } }, right)
  );
}

// src/ui/EmptyState.jsx
import React4 from "react";
function EmptyState({ label = "Empty", title, description, action, style, ...rest }) {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      ...rest,
      style: {
        textAlign: "center",
        padding: "60px 20px",
        background: theme.color.surface,
        border: `1px solid ${theme.color.border}`,
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadow.s1,
        ...style
      }
    },
    /* @__PURE__ */ React4.createElement("div", { style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.color.ink4,
      letterSpacing: 1.2,
      textTransform: "uppercase",
      marginBottom: 10
    } }, label),
    title && /* @__PURE__ */ React4.createElement("div", { style: { fontSize: 14, color: theme.color.ink2, marginBottom: 6, fontWeight: 500 } }, title),
    description && /* @__PURE__ */ React4.createElement("div", { style: { fontSize: 12, color: theme.color.ink4, lineHeight: 1.5 } }, description),
    action && /* @__PURE__ */ React4.createElement("div", { style: { marginTop: 16 } }, action)
  );
}

// src/ui/Stat.jsx
import React5 from "react";
function Stat({ label, value, unit, delta, deltaTone = "neutral", style, ...rest }) {
  const deltaColor = {
    up: theme.color.ok,
    down: theme.color.danger,
    neutral: theme.color.ink3
  }[deltaTone] || theme.color.ink3;
  return /* @__PURE__ */ React5.createElement(
    "div",
    {
      ...rest,
      style: {
        background: theme.color.surface,
        border: `1px solid ${theme.color.border}`,
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadow.s1,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        ...style
      }
    },
    /* @__PURE__ */ React5.createElement("div", { style: { fontSize: 12, color: theme.color.ink3, fontWeight: 500 } }, label),
    /* @__PURE__ */ React5.createElement("div", { style: { fontSize: 24, fontWeight: 600, letterSpacing: -0.5, color: theme.color.ink, lineHeight: 1 } }, value, unit && /* @__PURE__ */ React5.createElement("span", { style: { fontSize: 13, color: theme.color.ink3, fontWeight: 500, marginLeft: 2 } }, unit)),
    delta && /* @__PURE__ */ React5.createElement("div", { style: { fontSize: 12, color: deltaColor, fontFamily: theme.font.mono } }, delta)
  );
}
export {
  Button,
  Card,
  CardHeader,
  Chip,
  EmptyState,
  Stat,
  theme as default,
  theme
};
