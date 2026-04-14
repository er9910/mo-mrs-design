// Monitor Corp 공통 디자인 토큰.
// 이 파일이 색·라운딩·그림자·폰트·모션의 유일한 정의 위치.
//
// light / dark 두 팔레트를 모두 정의합니다.
// - JS에서 직접 값을 읽고 싶으면 theme.light / theme.dark
// - CSS 변수 기반으로 자동 전환하려면 applyTheme(mode) 호출 (아래 참고)

const light = {
  bg:         "#fafafa",
  surface:    "#ffffff",
  surface2:   "#f5f5f7",
  surface3:   "#ececee",

  ink:        "#1d1d1f",
  ink2:       "#424245",
  ink3:       "#6e6e73",
  ink4:       "#a1a1a6",

  border:       "rgba(0,0,0,0.08)",
  borderStrong: "rgba(0,0,0,0.14)",

  accent:      "#0071e3",
  accentSoft:  "rgba(0,113,227,0.10)",
  accentRing:  "rgba(0,113,227,0.28)",

  ok:     "#29a745",
  warn:   "#c97a00",
  danger: "#d8322c",

  catRegulatory: { bg: "#efeaff", fg: "#5b3fbf" },
  catCompetitor: { bg: "#fff1dd", fg: "#8a5a00" },
  catAcademic:   { bg: "#e4efff", fg: "#1b56c2" },
  catMarket:     { bg: "#e0f4e6", fg: "#1e7a3a" },

  // Chart shades — 단일 액센트의 5단계. 진한→연한 순서.
  chart: ["#0071e3", "#3d94ea", "#79b4f1", "#b5d5f7", "#d9e9fb"],
};

const dark = {
  bg:         "#0a0a0b",
  surface:    "#141417",
  surface2:   "#1c1c20",
  surface3:   "#26262b",

  ink:        "#f5f5f7",
  ink2:       "#c7c7cc",
  ink3:       "#8e8e93",
  ink4:       "#636366",

  border:       "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.16)",

  accent:      "#0a84ff",        // Apple dark-mode systemBlue (light보다 약간 밝음)
  accentSoft:  "rgba(10,132,255,0.16)",
  accentRing:  "rgba(10,132,255,0.40)",

  ok:     "#32d158",
  warn:   "#ff9f0a",
  danger: "#ff453a",

  catRegulatory: { bg: "rgba(139,110,255,0.18)", fg: "#c6b3ff" },
  catCompetitor: { bg: "rgba(255,169,77,0.18)",  fg: "#ffd399" },
  catAcademic:   { bg: "rgba(100,160,255,0.18)", fg: "#a8c6ff" },
  catMarket:     { bg: "rgba(80,200,130,0.18)",  fg: "#a4e2ba" },

  chart: ["#0a84ff", "#4aa3ff", "#7bbeff", "#a9d4ff", "#d1e7ff"],
};

export const theme = {
  // 기본 export는 light palette를 최상위에 펼친 형태 (기존 import 호환)
  color: light,
  radius: { sm: 6, md: 10, lg: 14, xl: 20 },

  shadow: {
    s1: "0 1px 2px rgba(0,0,0,.04), 0 1px 1px rgba(0,0,0,.03)",
    s2: "0 4px 12px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)",
    s3: "0 20px 40px -12px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.04)",
  },

  shadowDark: {
    s1: "0 1px 2px rgba(0,0,0,.40), 0 1px 1px rgba(0,0,0,.24)",
    s2: "0 4px 12px rgba(0,0,0,.48), 0 1px 2px rgba(0,0,0,.24)",
    s3: "0 20px 40px -12px rgba(0,0,0,.64), 0 4px 8px rgba(0,0,0,.32)",
  },

  font: {
    ui:   `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Pretendard", "Apple SD Gothic Neo", "Helvetica Neue", Arial, sans-serif`,
    mono: `ui-monospace, "SF Mono", Menlo, "JetBrains Mono", monospace`,
  },

  motion: { ease: "cubic-bezier(.2,.8,.2,1)", dur: ".22s" },

  // 팔레트 직접 접근용
  light,
  dark,
};

/* ============================================================
   CSS 변수 주입 — 컴포넌트가 var(--mc-xxx)로 읽어서
   light/dark를 JS 리렌더 없이 전환할 수 있게 합니다.

   사용:
     import { applyTheme } from '@monitorcorp/design/theme';
     applyTheme('light');   // 또는 'dark' 또는 'auto'
   ============================================================ */

export function paletteToCssVars(palette, shadows) {
  return {
    "--mc-bg":            palette.bg,
    "--mc-surface":       palette.surface,
    "--mc-surface-2":     palette.surface2,
    "--mc-surface-3":     palette.surface3,

    "--mc-ink":           palette.ink,
    "--mc-ink-2":         palette.ink2,
    "--mc-ink-3":         palette.ink3,
    "--mc-ink-4":         palette.ink4,

    "--mc-border":        palette.border,
    "--mc-border-strong": palette.borderStrong,

    "--mc-accent":        palette.accent,
    "--mc-accent-soft":   palette.accentSoft,
    "--mc-accent-ring":   palette.accentRing,

    "--mc-ok":     palette.ok,
    "--mc-warn":   palette.warn,
    "--mc-danger": palette.danger,

    "--mc-cat-reg-bg": palette.catRegulatory.bg, "--mc-cat-reg-fg": palette.catRegulatory.fg,
    "--mc-cat-cmp-bg": palette.catCompetitor.bg, "--mc-cat-cmp-fg": palette.catCompetitor.fg,
    "--mc-cat-aca-bg": palette.catAcademic.bg,   "--mc-cat-aca-fg": palette.catAcademic.fg,
    "--mc-cat-mkt-bg": palette.catMarket.bg,     "--mc-cat-mkt-fg": palette.catMarket.fg,

    "--mc-chart-1": palette.chart[0],
    "--mc-chart-2": palette.chart[1],
    "--mc-chart-3": palette.chart[2],
    "--mc-chart-4": palette.chart[3],
    "--mc-chart-5": palette.chart[4],

    "--mc-shadow-s1": shadows.s1,
    "--mc-shadow-s2": shadows.s2,
    "--mc-shadow-s3": shadows.s3,
  };
}

export function applyTheme(mode = "light") {
  if (typeof document === "undefined") return; // SSR guard
  const resolved =
    mode === "auto"
      ? (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : mode;
  const palette = resolved === "dark" ? dark : light;
  const shadows = resolved === "dark" ? theme.shadowDark : theme.shadow;
  const vars = paletteToCssVars(palette, shadows);
  const root = document.documentElement;
  for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  root.dataset.mcTheme = resolved;
  root.style.colorScheme = resolved;
}

/* 시스템 모드 변경 자동 추적 (mode='auto'일 때만 의미 있음) */
export function watchSystemTheme(callback) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = (e) => callback(e.matches ? "dark" : "light");
  mq.addEventListener?.("change", handler);
  return () => mq.removeEventListener?.("change", handler);
}

export default theme;
