# 2022-11 Next js Template

next-js eslint, prettier, tailwindcss, jest, testing-library, 배포 자동화가 적용된 기본 템플릿 


작성된 깃헙 액션 작동방법

0. main, prod 브랜치를 생성합니다.

1. Github 계정 Setting -> Developer Setting -> personal access token 에서 repo 관련 권한을 가진 토큰 발급

2. 발급한 토큰을 해당 템플릿을 사용한 프로젝트 세팅 -> Security -> Actions 에 명칭을 TOKEN 으로 한 후 아래에 이전 단계에서 발급한 토큰 작성

3. 이후 main 브랜치에 풀리퀘스트 & 머지 작업이 일어나면 Release Draft 자동 작성. 작성된 Release 는 레포지토리에서 Release 를 누르면 확인가능

4. 작성 된 Release 를 배포하면 prod branch 로 Release 된 자료가 자동으로 푸쉬가 일어납니다. (prod 브랜치를 배포용 브랜치로 연결해주면 배포 자동화 완료)


사용된 GITHUB ACTIONS 
- [Release-Drafter](https://github.com/release-drafter/release-drafter) - ISC License
- [InsonusK/get-latest-release](https://github.com/InsonusK/get-latest-release) - Apache 2.0 License
