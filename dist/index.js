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
import React2 from "react";
var cx = (...xs) => xs.filter(Boolean).join(" ");
function Chip({ tint = "neutral", dot = false, className, children, ...rest }) {
  return /* @__PURE__ */ React2.createElement(
    "span",
    {
      ...rest,
      className: cx("mc-chip", `mc-chip--${tint}`, dot && "mc-chip--dot", className)
    },
    dot && /* @__PURE__ */ React2.createElement("span", { className: "mc-chip__dot", "aria-hidden": "true" }),
    children
  );
}

// src/ui/Button.jsx
import React3 from "react";
var cx2 = (...xs) => xs.filter(Boolean).join(" ");
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
  return /* @__PURE__ */ React3.createElement(
    "button",
    {
      ...rest,
      disabled,
      className: cx2(
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
import React4 from "react";
var cx3 = (...xs) => xs.filter(Boolean).join(" ");
function Card({ padding, accent, className, style, children, ...rest }) {
  const combinedStyle = padding != null ? { ...style, padding } : style;
  return /* @__PURE__ */ React4.createElement("div", { ...rest, className: cx3("mc-card", className), style: combinedStyle }, accent && /* @__PURE__ */ React4.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "mc-card__accent",
      style: typeof accent === "string" ? { background: accent } : void 0
    }
  ), children);
}

// src/ui/CardHeader.jsx
import React5 from "react";
var cx4 = (...xs) => xs.filter(Boolean).join(" ");
function CardHeader({ title, subtitle, right, className, ...rest }) {
  return /* @__PURE__ */ React5.createElement("div", { ...rest, className: cx4("mc-card-header", className) }, /* @__PURE__ */ React5.createElement("div", { className: "mc-card-header__main" }, title && /* @__PURE__ */ React5.createElement("div", { className: "mc-card-header__title" }, title), subtitle && /* @__PURE__ */ React5.createElement("div", { className: "mc-card-header__subtitle" }, subtitle)), right && /* @__PURE__ */ React5.createElement("div", { className: "mc-card-header__right" }, right));
}

// src/ui/EmptyState.jsx
import React6 from "react";
var cx5 = (...xs) => xs.filter(Boolean).join(" ");
function EmptyState({ label, title, description, action, className, ...rest }) {
  return /* @__PURE__ */ React6.createElement("div", { ...rest, className: cx5("mc-empty", className) }, label && /* @__PURE__ */ React6.createElement("div", { className: "mc-empty__label" }, label), title && /* @__PURE__ */ React6.createElement("div", { className: cx5("mc-empty__title", description && "mc-empty__title--with-desc") }, title), description && /* @__PURE__ */ React6.createElement("div", { className: "mc-empty__description" }, description), action && /* @__PURE__ */ React6.createElement("div", { className: "mc-empty__action" }, action));
}

// src/ui/Stat.jsx
import React7 from "react";
var cx6 = (...xs) => xs.filter(Boolean).join(" ");
function Stat({ label, value, unit, delta, deltaTone = "neutral", className, ...rest }) {
  return /* @__PURE__ */ React7.createElement("div", { ...rest, className: cx6("mc-stat", className) }, label && /* @__PURE__ */ React7.createElement("div", { className: "mc-stat__label" }, label), /* @__PURE__ */ React7.createElement("div", { className: "mc-stat__row" }, /* @__PURE__ */ React7.createElement("span", { className: "mc-stat__value" }, value), unit && /* @__PURE__ */ React7.createElement("span", { className: "mc-stat__unit" }, unit)), delta && /* @__PURE__ */ React7.createElement("div", { className: cx6("mc-stat__delta", `mc-stat__delta--${deltaTone}`) }, delta));
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
