# 다크모드 추가 — mo-mrs-design v0.2

v0.2는 light/dark 두 팔레트를 모두 지원합니다. **같은 Tailwind 클래스(`bg-surface`, `text-ink` 등)가 현재 모드에 따라 자동으로 변합니다.** 컴포넌트 코드를 수정할 필요가 없습니다.

## mo-mrs-design 레포에 적용

네 파일을 교체/추가하세요:

```
mo-mrs-design/
├── src/
│   ├── theme.js              ← 교체 (dark 팔레트 + applyTheme 추가)
│   ├── tailwind-preset.js    ← 교체 (CSS var 참조로 변경)
│   ├── index.js              ← 교체 (export 추가)
│   ├── hooks/
│   │   └── useTheme.js       ← 신규
│   └── ui/
│       └── ThemeToggle.jsx   ← 신규
```

`tsup.config.js`에 새 entry 추가:

```js
entry: {
  index: 'src/index.js',
  theme: 'src/theme.js',
  'tailwind-preset': 'src/tailwind-preset.js',
  'hooks/useTheme': 'src/hooks/useTheme.js',  // ← 추가 (선택)
},
```

`package.json`에 peer dependency 추가 (ThemeToggle이 lucide-react를 씀):

```json
"peerDependencies": {
  "react": ">=18",
  "lucide-react": ">=0.400.0"
}
```

버전 올리고 커밋:

```bash
npm version 0.2.0
git add . && git commit -m "feat: add dark mode + ThemeToggle"
git push
```

## mo-mrs-clinical-tracker에 적용

### 1. 패키지 업데이트

```bash
npm install github:er9910/mo-mrs-design
```

### 2. 앱 루트에서 테마 초기화

`src/main.jsx` 또는 `src/App.jsx`의 최상단:

```jsx
import { applyTheme } from '@monitorcorp/design/theme';

// 새로고침 시 저장된 선호대로 즉시 적용 (flash 방지)
const saved = localStorage.getItem('mc-theme') || 'auto';
applyTheme(saved);
```

### 3. 상단 툴바의 기존 테마 토글 교체

현재 스크린샷에 있는 🔆 이모지/자체 토글을 이걸로:

```jsx
import { ThemeToggle } from '@monitorcorp/design';

// 상단 툴바 어딘가
<div className="flex items-center gap-2">
  <ThemeToggle />
  <button className="...">Export CSV</button>
</div>
```

ThemeToggle은 3단 스위치(Light / Auto / Dark)이고 `localStorage`에 자동 저장됩니다.

### 4. 차트 색을 토큰 참조로

Recharts에서 색을 하드코딩하지 말고 CSS 변수로:

```jsx
// Before
<Bar dataKey="own" fill="#0071e3" />

// After
<Bar dataKey="own" fill="var(--mc-chart-1)" />
<Bar dataKey="competitor" fill="var(--mc-chart-2)" />
<Bar dataKey="partner" fill="var(--mc-chart-3)" />
<Bar dataKey="sota" fill="var(--mc-chart-4)" />
```

이러면 dark 모드 전환 시 차트 색도 자동으로 밝은 파랑 계열로 바뀝니다.

### 5. 인라인 스타일로 색 썼던 곳 정리

```jsx
// Before
style={{ background: '#ffffff', color: '#1d1d1f' }}

// After
style={{ background: 'var(--mc-surface)', color: 'var(--mc-ink)' }}
```

Tailwind 쓰던 곳은 이미 `bg-surface` 같은 클래스면 건드릴 필요 없음 — preset이 자동으로 CSS 변수로 컴파일합니다.

## Claude Code 프롬프트

`mo-mrs-clinical-tracker` 루트에서 `claude` 실행 후:

```
mo-mrs-design v0.2(다크모드 지원)로 업그레이드해줘.

1. npm install github:er9910/mo-mrs-design 실행
2. src/main.jsx 최상단에 applyTheme 초기화 추가
   (localStorage 'mc-theme' 읽어서 적용, 기본값 'auto')
3. 상단 툴바의 기존 테마 토글 버튼을
   @monitorcorp/design의 <ThemeToggle /> 로 교체
4. Recharts의 하드코딩된 색(#xxxxxx)을
   var(--mc-chart-1) ~ var(--mc-chart-5) 로 치환
5. 인라인 스타일에 남아있는 색 하드코딩을
   CSS 변수(var(--mc-surface) 등)로 치환
6. Tailwind 클래스는 이미 변수 기반이므로 수정 불필요 (확인만)

각 파일 수정 전 계획 보여주고, 끝나면 다크모드에서
스크린샷상 깨질 가능성이 높은 부분(고정 배경, 흰 테두리 등)을
리스트업해줘.
```

## 참고: 다크 팔레트 값

| 토큰 | Light | Dark |
|---|---|---|
| bg | #fafafa | #0a0a0b |
| surface | #ffffff | #141417 |
| surface-2 | #f5f5f7 | #1c1c20 |
| ink | #1d1d1f | #f5f5f7 |
| ink-3 | #6e6e73 | #8e8e93 |
| border | rgba(0,0,0,0.08) | rgba(255,255,255,0.08) |
| accent | #0071e3 | #0a84ff |

Apple dark mode의 공식 systemBlue가 light보다 약간 더 밝은 `#0a84ff`라서 그대로 따랐습니다. 대비가 충분합니다.
