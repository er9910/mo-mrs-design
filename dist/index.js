import {
  useTheme
} from "./chunk-A33KXLEE.js";
import {
  applyTheme,
  paletteToCssVars,
  theme,
  watchSystemTheme
} from "./chunk-S3GQG74L.js";

// util
var cx = (...xs) => xs.filter(Boolean).join(" ");

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
function Chip({ tint = "neutral", dot = false, className, children, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      ...rest,
      className: cx("mc-chip", `mc-chip--${tint}`, dot && "mc-chip--dot", className)
    },
    dot && /* @__PURE__ */ React.createElement("span", { className: "mc-chip__dot", "aria-hidden": "true" }),
    children
  );
}

// src/ui/Button.jsx
function Button({
  variant = "default",
  size = "md",
  leftIcon,
  rightIcon,
  disabled = false,
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      ...rest,
      disabled,
      className: cx(
        "mc-btn",
        `mc-btn--${size}`,
        variant !== "default" && `mc-btn--${variant}`,
        className
      )
    },
    leftIcon,
    children,
    rightIcon
  );
}

// src/ui/Card.jsx
function Card({ padding, accent, className, style, children, ...rest }) {
  const combinedStyle = padding != null ? { ...style, padding } : style;
  return /* @__PURE__ */ React.createElement(
    "div",
    { ...rest, className: cx("mc-card", className), style: combinedStyle },
    accent && /* @__PURE__ */ React.createElement("span", {
      "aria-hidden": "true",
      className: "mc-card__accent",
      style: typeof accent === "string" ? { background: accent } : void 0
    }),
    children
  );
}

// src/ui/CardHeader.jsx
function CardHeader({ title, subtitle, right, className, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    { ...rest, className: cx("mc-card-header", className) },
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "mc-card-header__main" },
      title && /* @__PURE__ */ React.createElement("div", { className: "mc-card-header__title" }, title),
      subtitle && /* @__PURE__ */ React.createElement("div", { className: "mc-card-header__subtitle" }, subtitle)
    ),
    right && /* @__PURE__ */ React.createElement("div", { className: "mc-card-header__right" }, right)
  );
}

// src/ui/EmptyState.jsx
function EmptyState({ label, title, description, action, className, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    { ...rest, className: cx("mc-empty", className) },
    label && /* @__PURE__ */ React.createElement("div", { className: "mc-empty__label" }, label),
    title && /* @__PURE__ */ React.createElement(
      "div",
      { className: cx("mc-empty__title", description && "mc-empty__title--with-desc") },
      title
    ),
    description && /* @__PURE__ */ React.createElement("div", { className: "mc-empty__description" }, description),
    action && /* @__PURE__ */ React.createElement("div", { className: "mc-empty__action" }, action)
  );
}

// src/ui/Stat.jsx
function Stat({ label, value, unit, delta, deltaTone = "neutral", className, ...rest }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    { ...rest, className: cx("mc-stat", className) },
    label && /* @__PURE__ */ React.createElement("div", { className: "mc-stat__label" }, label),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "mc-stat__row" },
      /* @__PURE__ */ React.createElement("span", { className: "mc-stat__value" }, value),
      unit && /* @__PURE__ */ React.createElement("span", { className: "mc-stat__unit" }, unit)
    ),
    delta && /* @__PURE__ */ React.createElement(
      "div",
      { className: cx("mc-stat__delta", `mc-stat__delta--${deltaTone}`) },
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
