// Monitor Corp 공통 디자인 토큰.
// 이 파일이 색·라운딩·그림자·폰트·모션의 유일한 정의 위치.

export const theme = {
  color: {
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
  },

  radius: { sm: 6, md: 10, lg: 14, xl: 20 },

  shadow: {
    s1: "0 1px 2px rgba(0,0,0,.04), 0 1px 1px rgba(0,0,0,.03)",
    s2: "0 4px 12px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)",
    s3: "0 20px 40px -12px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.04)",
  },

  font: {
    ui:   `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Pretendard", "Apple SD Gothic Neo", "Helvetica Neue", Arial, sans-serif`,
    mono: `ui-monospace, "SF Mono", Menlo, "JetBrains Mono", monospace`,
  },

  motion: { ease: "cubic-bezier(.2,.8,.2,1)", dur: ".22s" },
};

export default theme;
