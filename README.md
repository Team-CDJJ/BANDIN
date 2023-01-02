# 소리로 잇다, BANDIN

(목업이미지)
```
### [배포 URL]

- URL: ~~~~
- 계정
    - `ID`: ~~~~
    - `PassWord`: ~~~~

```

## 1. 프로젝트 소개

## 💡 개요
```
🎸 BANDIN은 BAND와 IN을 합친 단어로 밴드에 관심 있는 사람들이 모인 자유로운 소통창구입니다.

💬 BANDIN은 게시물 및 상품 등록, 사용자 검색, 팔로우, 좋아요 기능을 제공합니다.

👭 공연 정보 / 악기 중고 거래 / 취미에 관한 내용을 사진과 함께 게시물을 작성하여 공유할 수 있습니다.

🌍 다른 사용자를 팔로우하면 팔로우한 사용자가 올린 게시물을 홈 피드에서 확인할 수도 있습니다!

💜 피드를 구경하다가 마음에 드는 게시물을 발견했다면 좋아요를 누를 수 있고, 댓글을 남길 수도 있습니다.
```



### 1.1 개발 환경

**[개발 기간]**

- 2022-12-09 ~ 2023-01-05

**[에디터 및 협업]**

- VSCode
- 서비스 배포 환경: [❓❓]
- 형상관리 및 협업: Git, GitHub, Notion, VSCode Live Share

### 1.2 기술 스택

- Front-End
    - React, Styled-Components, React-router-dom,
- Back-End
    - 제공된 API 사용
- Design
    - Figma

### 1.3 개발 방법 선택 이유

- `Javascript`가 아닌 `React`를 선택한 이유?
    - Component를 사용하여 재사용과 유지보수가 용이한 이유가 가장 컸습니다.
    - Javascript의 DOM은 페이지가 바뀔 때마다 새 HTML을 로드하면서 DOM 전체를 렌더링하게 됩니다
    하지만 React의 Virtual DOM은 Component가 리턴하는 값에 의해 만들어져 기존의 DOM과 비교하여 달라진 부분만 바꾸기 때문에 렌더링 비효율성을 최소화 할 수 있는 장점으로 인해 선택했습니다.
- 브랜치 전략으로 `github-flow`를 선택한 이유?
    - 팀원 모두 git을 사용한 협업에 익숙한 편이 아니었고, 프로젝트 규모를 생각했을 때 규칙이 단순한 github-flow를 사용하기로 했습니다
    - main 브랜치에는 코드 리뷰를 받은 배포될 파일만 merge시키고, 그 외에 브랜치명 등은 규칙을 정하지 않고 진행하였습니다
- CSS 스타일링으로 `styled-components`를 선택한 이유?
    - 스타일 재사용성이 증가합니다.
    - React의 Props와 함께 사용이 용이하고, 조건부 스타일링도 가능합니다.
    - className을 지정해줘야 하는 번거로움을 피할 수 있습니다.
    - 컴포넌트에 적은 스타일은 html 페이지의 `<style>` 태그에 넣어줘서 페이지 로딩 시간 단축됩니다.

## 2. 팀원 소개

| ![프로필1] | ![프로필2] | ![프로필3] | ![프로필4] |
| :--------: | :--------: | :------: | :-----: |
| [김대운] | [서윤정] | [이혜진] | [최영준] |

- 리드미에서 태그하기
- (역할분담 이미지)

## 3. 기능 구현

3.1 UI 이미지

3.2 페이지 시연

## 4. 프로젝트 구조

폴더트리

## 5. 프로젝트를 진행하며 느낀점

| 이름 | 느낀 점                                    |
| :------: | ---------------------------------------------- |
| 김대운 |                  |
| 서윤정 |                  |
| 이혜진 |                  |
| 최영준 |                  |

---

<!-- Stack Icon Refernces -->
[프로필1]: https://avatars.githubusercontent.com/u/107315656?v=4
[프로필2]: https://avatars.githubusercontent.com/u/100075245?v=4
[프로필3]: https://avatars.githubusercontent.com/u/104756433?v=4
[프로필4]: https://avatars.githubusercontent.com/u/112460280?v=4
[김대운]: https://github.com/Ocknyer
[서윤정]: https://github.com/annasyun
[이혜진]: https://github.com/hyelight
[최영준]: https://github.com/youngjun0427
