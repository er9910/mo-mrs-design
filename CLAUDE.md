# Monitor Corp 디자인 시스템 — 규칙

이 레포는 Monitor Corp 내부 도구 전체의 **유일한 UI 원본**이다. 이 레포를 쓰는 모든 저장소는 이 규칙을 따른다.

## 단일 진실의 원천

- 디자인 토큰(색·라운딩·그림자·폰트·모션)은 `src/theme.js`에만 정의한다.
- 공용 프리미티브(Chip·Button·Card·EmptyState·Stat)는 `src/ui/`에 둔다.
- Tailwind preset은 `src/tailwind-preset.js`가 theme을 읽어 자동 생성한다.
- **토큰 수정은 이 레포에서만.** 소비 프로젝트에서 override 금지.

## 색 규칙

- 배경 `bg` (#fafafa), 카드 `surface` (#fff), 세컨더리 `surface-2` (#f5f5f7).
- 본문 `ink` (#1d1d1f), 서브 `ink-2`/`ink-3`, 플레이스홀더 `ink-4`. **순검정 `#000` 금지.**
- 보더는 알파 헤어라인 `rgba(0,0,0,0.08)`.
- 액센트는 `#0071e3` (Apple systemBlue) 하나. 브랜드 색 추가 금지.
- 카테고리 틴트는 regulatory/competitor/academic/market 네 개. 새 카테고리는 theme에 먼저 등록.

## 형태 규칙

- 라운딩: 6/10/14/20 네 단계만.
- 그림자: s1/s2/s3 세 단계만. 커스텀 금지.
- 카드 기본값: `surface` 배경, `border` 보더, `radius.lg`, `shadow.s1`.
- UI 구조(탭·필터·버튼·카드 헤더)에 이모지 금지. Lucide 아이콘 사용.

## 타이포그래피

- 크기 사다리: 26 / 18 / 14 / 13.5 / 12 / 11. 중간값 금지.
- 페이지 타이틀 26/600/tracking -0.5, 섹션 18/600, 카드 제목 14/600, 본문 13.5, 메타 11~12.
- 숫자·ID·타임스탬프는 `font.mono`. 본문·라벨은 `font.ui`.
- 아이브로 라벨: 11px, uppercase, `ink-4`, letter-spacing 1.2~1.4.

## 모션

- 모든 transition은 220ms cubic-bezier(.2,.8,.2,1) 고정.
- hover에서 `translateY(-1px)` + `s1 → s2` 정도만.

## 반응형 브레이크포인트

1180 / 780 / 640 / 420.

## 컴포넌트 추가 규칙

1. 기존 프리미티브로 조합 가능한지 먼저 확인.
2. 토큰이 부족하면 `theme.js`에 먼저 추가.
3. 새 프리미티브는 `src/ui/` 에 PascalCase `.jsx` 파일로 추가.
4. `src/index.js` 에서 export.
5. README의 컴포넌트 표 업데이트.

## 배포

- `main` 브랜치가 기본. 소비 프로젝트는 `"@monitorcorp/design": "github:monitorcorp/monitor-design"` 로 설치 → 항상 main의 최신 빌드.
- 고정하려면 `"github:monitorcorp/monitor-design#<commit-sha>"` 또는 태그.
- 릴리즈 태그는 `v0.1.0` 형식.
- 커밋 메시지: `feat(theme): ...`, `feat(ui/Button): ...`, `fix: ...`, `docs: ...` Conventional Commits 따름.

## 금지 목록

- [ ] `#000`, `#fff` 하드코딩
- [ ] `theme.js` 외 파일에서 hex 색 리터럴
- [ ] 네 단계 외 라운딩
- [ ] 커스텀 그림자
- [ ] 220ms 외의 transition duration
- [ ] Primary 액센트 외 브랜드 색
- [ ] UI 구조에 이모지 사용
- [ ] 소비 프로젝트에서 토큰 override
