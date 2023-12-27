# Next js tailwindcss Template

```zsh
git clone https://github.com/doooss/next-template-tailwindcss
```

next-js test, tailwindcss, shadcn-ui, 배포 자동화가 적용된 기본 템플릿

- [Command](#command)
- [GITHUB ACTION 사용법](#github-action)
- [RELEASE](#release)

## Command

기본적인 next.js 커멘드에 몇가지가 추가되었습니다.

> 개인적인 용도의 cli 추가 cli/templates 에서 템플릿 조절 가능

```zsh  
pnpm gen
```

> shadcn-ui 기반 컴포넌트 생성 명령어

```zsh
pnpm gen:ui
```

해당 커멘드를 활용하면, shadcn-ui 를 통해 radix-ui 의 컴포넌트를 생성할 수 있습니다.

## github action

0. main, prod 브랜치를 생성합니다.

1. Github 계정 Setting -> Developer Setting -> personal access token 에서 repo 관련 권한을 가진 토큰 발급

2. 발급한 토큰을 해당 템플릿을 사용한 프로젝트 세팅 -> Security -> Actions 에 명칭을 TOKEN 으로 한 후 아래에 이전 단계에서 발급한 토큰 작성

3. 이후 main 브랜치에 풀리퀘스트 & 머지 작업이 일어나면 Release Draft 자동 작성. 작성된 Release 는 레포지토리에서 Release 를 누르면 확인가능

4. 작성 된 Release 를 배포하면 prod branch 로 Release 된 자료가 자동으로 푸쉬가 일어납니다. (prod 브랜치를 배포용 브랜치로 연결해주면 배포 자동화 완료)

## RELEASE

1. 작업시에는 develop 브랜치를 활용하여 사용합니다.

2. Develop 으로 PR 시에는 목적에 따라, feature, fix, refactor , hot-fix 라벨을 달아서 PR을 보냅니다.

3. HOT-Fix 로 PR 을 받는 경우에는 develop 브랜치에 머지될 경우, Release drafter 가 작동됩니다.

4. 이외 라벨들은 main 브랜치에 PR 이후 머지될 경우, relase drafter 가 작동됩니다.

5. relaese drafter 로 작성된 릴리즈를 배포하면, prod 브랜치로 작업물이 생성되며 배포됩니다.
