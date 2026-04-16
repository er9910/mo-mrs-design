import {
  applyTheme,
  watchSystemTheme
} from "./chunk-QOBMKC3G.js";

// src/hooks/useTheme.js
import { useEffect, useState, useCallback } from "react";
function useTheme(defaultMode = "auto") {
  const [mode, setModeState] = useState(() => {
    if (typeof window === "undefined") return defaultMode;
    return window.localStorage?.getItem("mc-theme") || defaultMode;
  });
  const resolved = mode === "auto" ? typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light" : mode;
  useEffect(() => {
    applyTheme(mode);
    try {
      window.localStorage?.setItem("mc-theme", mode);
    } catch {
    }
  }, [mode]);
  useEffect(() => {
    if (mode !== "auto") return;
    return watchSystemTheme(() => applyTheme("auto"));
  }, [mode]);
  const setMode = useCallback((m) => setModeState(m), []);
  const toggle = useCallback(
    () => setModeState((prev) => prev === "dark" ? "light" : "dark"),
    []
  );
  return { mode, resolved, setMode, toggle };
}
var useTheme_default = useTheme;

export {
  useTheme,
  useTheme_default
};
