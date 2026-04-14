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
export {
  ThemeToggle,
  applyTheme,
  theme as default,
  paletteToCssVars,
  theme,
  useTheme,
  watchSystemTheme
};
