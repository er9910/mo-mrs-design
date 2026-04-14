# 기존 프로젝트에 적용하기

`samd-news-monitor`, `clinical-paper-tracker` 등 기존 저장소를 이 디자인 시스템으로 전환하는 순서.

## 1회: GitHub에 레포 만들기

1. github.com/monitorcorp 에서 `monitor-design` private 레포 생성
2. 로컬에서:

```bash
cd monitor-design
git init
git add .
git commit -m "feat: initial design system"
git branch -M main
git remote add origin git@github.com:monitorcorp/monitor-design.git
git push -u origin main
```

---

## 각 소비 프로젝트에서

### Step 1. 설치

```bash
cd samd-news-monitor
npm install github:monitorcorp/monitor-design
```

`package.json`의 `dependencies`에 추가됨:

```json
{
  "dependencies": {
    "@monitorcorp/design": "github:monitorcorp/monitor-design"
  }
}
```

### Step 2. CLAUDE.md 연결

디자인 시스템의 규칙을 소비 프로젝트에서도 읽히게 하려면 루트에 얇은 `CLAUDE.md`를 둡니다:

```markdown
# <프로젝트 이름>

이 프로젝트의 UI는 @monitorcorp/design 의 규칙을 따릅니다.
공식 규칙: node_modules/@monitorcorp/design/CLAUDE.md

프로젝트 고유 규칙:
- (여기에 프로젝트 특수 사항만 추가)
```

### Step 3. Tailwind 프로젝트라면

`tailwind.config.js` 교체:

```js
import monitorPreset from '@monitorcorp/design/tailwind-preset';

export default {
  presets: [monitorPreset],
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
};
```

### Step 4. Claude Code에게 마이그레이션 시키기

프로젝트 루트에서:

```bash
claude
```

붙여넣기:

```
@monitorcorp/design 를 설치했으니 이 프로젝트를 거기에 맞춰 리팩터해줘.

규칙: node_modules/@monitorcorp/design/CLAUDE.md 를 먼저 읽어.

원칙:
- 기능/로직 변경 금지. 시각만 변경.
- 한 번에 한 파일씩. 각 파일 수정 전 계획 보여주기.
- 색 하드코딩(#xxx, rgb, hsl) 전부 @monitorcorp/design/theme 또는 Tailwind 토큰 클래스로 치환
- Tailwind 기본 팔레트(slate/gray/zinc/sky/pink/amber/violet 등) 전부 Monitor 토큰으로 치환
- 자체 Chip/Button/Card 구현이 있으면 @monitorcorp/design의 프리미티브로 교체
- UI 구조에 쓰인 이모지는 Lucide 아이콘으로 교체

진행:
1. 리팩터 대상 파일 목록과 우선순위 먼저 출력
2. 파일 하나 처리할 때마다 diff 요약 후 다음 진행
3. 끝나면 변경 요약 + 수동 검토 필요 지점 표기
```

### Step 5. 업데이트

디자인 레포에 새 버전이 올라가면:

```bash
npm update @monitorcorp/design
```

안 바꾸려면 커밋 해시로 고정:

```json
"@monitorcorp/design": "github:monitorcorp/monitor-design#7c3a91f"
```

---

## 여러 저장소 일괄 처리 스크립트

```bash
#!/bin/bash
REPOS=(
  "../samd-news-monitor"
  "../clinical-paper-tracker"
  "../another-tool"
)

for repo in "${REPOS[@]}"; do
  echo "==> $repo"
  (
    cd "$repo"
    npm install github:monitorcorp/monitor-design
    # 간단 CLAUDE.md 생성
    if [ ! -f CLAUDE.md ]; then
      cat > CLAUDE.md <<'EOF'
이 프로젝트의 UI는 @monitorcorp/design 의 규칙을 따릅니다.
공식 규칙: node_modules/@monitorcorp/design/CLAUDE.md
EOF
    fi
  )
done
```

돌린 후 각 저장소에서 `claude` 실행 → Step 4 프롬프트 붙여넣기.
