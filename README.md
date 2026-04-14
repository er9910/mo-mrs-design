# @monitorcorp/design

Monitor Corp 내부 도구 공통 디자인 시스템.

## 무엇이 들어있나

- **토큰** (`theme.js`) — 색·라운딩·그림자·폰트·모션의 단일 정의
- **Tailwind preset** — 소비 프로젝트가 같은 토큰을 Tailwind 유틸리티로 사용
- **프리미티브 컴포넌트** — Chip, Button, Card, CardHeader, EmptyState, Stat
- **CLAUDE.md** — Claude Code가 따라야 할 규칙서

---

## 소비 프로젝트에 설치

```bash
npm install github:monitorcorp/monitor-design
```

특정 버전/커밋 고정:

```bash
npm install github:monitorcorp/monitor-design#v0.1.0
npm install github:monitorcorp/monitor-design#<commit-sha>
```

Private 레포면 인증이 필요합니다:
- 로컬: `gh auth login` 또는 SSH 키 설정 (`git+ssh://git@github.com:monitorcorp/monitor-design.git`)
- CI: PAT을 `NPM_TOKEN` 또는 `GITHUB_TOKEN` 환경변수로 전달

---

## 사용법

### 토큰 사용 (React)

```jsx
import { theme as t } from '@monitorcorp/design/theme';

<div style={{
  background: t.color.surface,
  border: `1px solid ${t.color.border}`,
  borderRadius: t.radius.lg,
  boxShadow: t.shadow.s1,
  padding: 16,
}} />
```

### 프리미티브 사용

```jsx
import { Chip, Button, Card, CardHeader, EmptyState, Stat } from '@monitorcorp/design';

<Card>
  <CardHeader
    title="Recent papers"
    subtitle="Last updated 2h ago"
    right={<Button size="sm" variant="ghost">View all</Button>}
  />
  <Chip tint="regulatory" dot>규제</Chip>
</Card>

<Stat label="Total" value="1,284" delta="▲ 12.4%" deltaTone="up" />

<EmptyState
  title="아직 데이터가 없습니다"
  description="상단의 '수집' 버튼으로 시작하세요"
  action={<Button variant="primary">수집 시작</Button>}
/>
```

### Tailwind 프로젝트

`tailwind.config.js`:

```js
import monitorPreset from '@monitorcorp/design/tailwind-preset';

export default {
  presets: [monitorPreset],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
};
```

그럼 이런 클래스가 전부 사용 가능:

```html
<div class="bg-surface border border-border rounded-mc-lg shadow-s1 font-ui p-4">
  <h3 class="text-ink text-[14px] font-semibold tracking-tight2">제목</h3>
  <p class="text-ink-3 text-[13px]">본문</p>
  <button class="bg-accent text-white rounded-mc-md px-3 py-2 transition-colors duration-mc ease-mc hover:brightness-110">
    액션
  </button>
</div>
```

---

## 개발

```bash
npm install
npm run build      # dist/ 생성
npm run dev        # tsup watch 모드
```

빌드 산출물은 `dist/`에 생성되고 커밋되지 않습니다. 소비 프로젝트가 `npm install`할 때 `prepare` 스크립트가 자동 실행되어 빌드됩니다.

---

## 컴포넌트 표

| 이름 | 주요 props |
|---|---|
| `Chip` | `tint` (regulatory/competitor/academic/market/ok/warn/danger/accent/neutral), `dot` |
| `Button` | `variant` (default/primary/ghost/success/danger), `size` (sm/md/lg), `leftIcon`, `rightIcon`, `disabled` |
| `Card` | `padding`, `accent` (왼쪽 세로 액센트 라인) |
| `CardHeader` | `title`, `subtitle`, `right` |
| `EmptyState` | `label`, `title`, `description`, `action` |
| `Stat` | `label`, `value`, `unit`, `delta`, `deltaTone` (up/down/neutral) |

---

## 규칙

코드 기여 전 [`CLAUDE.md`](./CLAUDE.md) 를 읽어주세요. 금지 사항과 추가 절차가 정리되어 있습니다.

## 라이선스

Internal use only.
