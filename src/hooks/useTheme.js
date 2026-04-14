import { useEffect, useState, useCallback } from 'react';
import { applyTheme, watchSystemTheme } from '../theme.js';

/**
 * Monitor theme hook.
 *
 * 사용:
 *   const { mode, resolved, setMode, toggle } = useTheme();
 *
 *   - mode      : 사용자 설정값 ("light" | "dark" | "auto")
 *   - resolved  : 실제 적용된 값 ("light" | "dark")
 *   - setMode   : 모드 변경
 *   - toggle    : light <-> dark 즉시 토글 (auto 무시)
 *
 * localStorage 키 'mc-theme'에 선호 저장됩니다.
 */
export function useTheme(defaultMode = 'auto') {
  const [mode, setModeState] = useState(() => {
    if (typeof window === 'undefined') return defaultMode;
    return window.localStorage?.getItem('mc-theme') || defaultMode;
  });

  const resolved =
    mode === 'auto'
      ? (typeof window !== 'undefined' &&
         window.matchMedia?.('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      : mode;

  useEffect(() => {
    applyTheme(mode);
    try { window.localStorage?.setItem('mc-theme', mode); } catch {}
  }, [mode]);

  // auto 모드일 때 시스템 변경 자동 반영
  useEffect(() => {
    if (mode !== 'auto') return;
    return watchSystemTheme(() => applyTheme('auto'));
  }, [mode]);

  const setMode = useCallback((m) => setModeState(m), []);
  const toggle  = useCallback(
    () => setModeState((prev) => (prev === 'dark' ? 'light' : 'dark')),
    []
  );

  return { mode, resolved, setMode, toggle };
}

export default useTheme;
