# 소리로 잇다, BANDIN
![목업이미지](https://user-images.githubusercontent.com/104756433/210401057-41d52de6-c220-43e7-9b00-7c21e8520f3d.png)

**배포 URL: <https://github.com>**
```
test id: test16-1@test.com
test pw: 123123
```


## 1. 프로젝트 소개

## 💡 개요
```

🎸 BANDIN은 BAND와 IN을 합친 단어로 밴드에 관심 있는 사람들이 모인 자유로운 소통창구입니다.

💬 BANDIN은 게시물 및 상품 등록, 사용자 검색, 팔로우, 좋아요 기능을 제공합니다.

👭 공연정보 / 악기 중고 거래 / 취미에 관한 내용을 사진과 함께 게시물을 작성하여 공유할 수 있습니다.

🌍 다른 사용자를 팔로우하면 팔로우한 사용자가 올린 게시물을 홈 피드에서 확인할 수도 있습니다!

💜 피드를 구경하다 마음에 드는 게시물을 발견했다면 좋아요를 누를 수 있고, 댓글을 남길 수 있습니다.

```

### 1.1 개발 환경

**[개발 기간]**

- 2022-12-09 ~ 2023-01-04

**[에디터 및 협업]**

- VSCode
- 서비스 배포 환경: Netlify
- 형상관리 및 협업: Git, GitHub, Notion, VSCode Live Share

### 1.2 기술 스택

- Front-End
    - React, Styled-Components, React-router-dom, Recoil
- Back-End
    - 제공된 API 사용
- Design
    - Figma, Illustrator

### 1.3 개발 방법 선택 이유

- **React를 선택한 이유**
    - Component를 사용하여 재사용과 유지보수가 용이하다는 점과 Virtual DOM으로 인해 리렌더링 될 때 컨텐츠를 좀 더 빠르고 효율적으로 변경할 수 있다고 생각했습니다.
    
    
- **브랜치 전략으로 github-flow를 선택한 이유**
    - 팀원 모두 협업 자체에 낯선 편이었고, 개발 환경에 익숙해지는 것이 먼저라고 생각했기 때문에 브랜치 전략 중 상대적으로 간단한 github flow를 사용하기로 했습니다.
    - default로 이용한 dev 브랜치에는 코드 리뷰를 받은 배포될 파일을 merge시켰는데, 충돌을 고려하여 이 부분은 팀장님이 진행해 주셨습니다.
    - 브랜치명은 FEAT/브랜치이름과 같이 작성했습니다.
    
    
- **styled-components를 선택한 이유**
    - React의 Props와 함께 사용이 용이하고, 조건부 스타일링도 가능하며 스타일 재사용성이 높습니다.
    - className을 지정해줘야 하는 번거로움을 피할 수 있습니다.
    - 컴포넌트에 적은 스타일은 html 페이지의 <style> 태그에 넣어줘서 페이지 로딩 시간이 단축됩니다.


### 1.4 커밋 컨벤션 규칙

- 기능 단위의 커밋합니다.
- 커밋 타입은 영어 소문자로 시작합니다.
- feat, fix, refactor, style, design, docs, chore와 같은 타입을 사용합니다.
- 주제는 최대한 자세하게 변경 사항을 알아보기 편하도록 작성합니다.


## 2. 팀원 소개

| ![프로필1] | ![프로필2] | ![프로필3] | ![프로필4] |
| :--------: | :--------: | :------: | :-----: |
| [김대운] | [서윤정] | [이혜진] | [최영준] |

- (역할분담 이미지)

## 3. 기능 구현 

### 🎸[기능 상세 설명으로 이동](https://github.com/Team-CDJJ/BANDIN/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85)🥁
- ### 홈 
|                     스플래쉬                    |               회원가입                   |                      로그인                      |
| :---------------------------------------------: | :--------------------------------------: | :---------------------------------------------: |
|   <img src="https://user-images.githubusercontent.com/104756433/210384894-043705f6-11aa-4c9f-b567-ba4f20bbdad9.gif" width="247" height="550"/>   |     <img src="https://user-images.githubusercontent.com/104756433/210385031-dd8a7675-b5f7-4048-afb6-1d8b0604219b.gif" width="247" height="550"/>  |     <img src="https://user-images.githubusercontent.com/104756433/210385090-a68d8f8d-5418-421b-bfcb-b1588c08f2d5.gif" width="247" height="550"/> |

|      홈 화면      |                  계정 검색                |
| :---------------------------------------------: | :--------------------------------------: |
|    <img src="https://user-images.githubusercontent.com/104756433/210620572-f639f97e-b4ef-4125-ae7c-8eb478f3fd92.gif" width="247" height="550"/>  |   <img src="https://user-images.githubusercontent.com/104756433/210387204-de837d6a-7978-44ff-b469-945092b0f295.gif" width="247" height="550"/> | 

- ### 게시물 
|                 게시물 작성                   |     게시물 상세 (이미지 슬라이드) & 좋아요     |                게시물 수정, 삭제                 |
| :------------------------------------------: | :-----------------------------------------: | :---------------------------------------------: |
|  <img src="https://user-images.githubusercontent.com/104756433/210388827-e6e4e911-1943-4c18-928b-b3a7a736fa09.gif" width="247" height="550"/>|  <img src="https://user-images.githubusercontent.com/104756433/210389836-625fc3ca-d730-4fe9-bb91-49f69c4b8b7b.gif" width="247" height="550"/>  |        <img src="https://user-images.githubusercontent.com/104756433/210389854-751ce10e-1819-4e18-8605-ae7944ad5fae.gif" width="247" height="550"/>  |

|               게시물, 댓글 신고                    |                댓글 작성 & 삭제             |
| :------------------------------------------: | :-----------------------------------------: |
|  <img src="https://user-images.githubusercontent.com/104756433/210628380-534f4a06-a94c-4661-9cea-031e7e8432d4.gif" width="247" height="550"/>   |     <img src="https://user-images.githubusercontent.com/104756433/210619309-0e2fdbc4-67dc-43c4-9822-1984c517c2ff.gif" width="247" height="550"/>   |

- ### 프로필   
|                마이 프로필                     |                유저 프로필                 |                  팔로워 팔로잉 목록                  |
| :------------------------------------------: | :----------------------------------------: | :-------------------------------------------------: |
|    <img src="https://user-images.githubusercontent.com/104756433/210473751-051578fc-c1c1-4afb-bdc9-14e4c5fc08ee.gif" width="247" height="550"/>   |  <img src="https://user-images.githubusercontent.com/104756433/210393607-28f76256-1a22-423f-85aa-13d6707f7e87.gif" width="247" height="550"/> |     <img src="https://user-images.githubusercontent.com/104756433/210393753-8119cef0-b61b-4a95-8f0a-371aadad7af6.gif" width="247" height="550"/> |

|                팔로우 언팔로우                  |                  프로필 수정               |                       로그아웃                 |
| :------------------------------------------: | :----------------------------------------: | :-------------------------------------------------: |
|   <img src="https://user-images.githubusercontent.com/104756433/210393882-b1374e52-3418-4e1a-91a2-6d0d0c3019f3.gif" width="247" height="550"/>  |  <img src="https://user-images.githubusercontent.com/104756433/210393931-d5b08dab-71a5-4383-9c91-e7af4e5cad98.gif" width="247" height="550"/> |       <img src="https://user-images.githubusercontent.com/104756433/210394074-0a8d329c-56a0-41b8-8b46-b654b8f74f4f.gif" width="247" height="550"/> |

- ### 등록 물품 
|          마이 프로필 (상품등록, 웹사이트 이동)     |         마이 프로필 (상품 수정, 삭제)         |              유저 프로필               |
| :------------------------------------------: | :----------------------------------------: | :----------------------------------------: |
|  <img src="https://user-images.githubusercontent.com/104756433/210474059-795ac44f-b7ce-4882-bae9-3d4b191f6f21.gif" width="247" height="550"/>  |  <img src="https://user-images.githubusercontent.com/104756433/210474334-b0c9c343-d0a1-4c62-a646-0a7f1c20618d.gif" width="247" height="550"/> |   <img src="https://user-images.githubusercontent.com/104756433/210628713-61544001-60a7-4846-b85b-8a19e27f3cc0.gif" width="247" height="550"/> |

- ### 채팅, 404 페이지
|                채팅 목록, 채팅방               |          404 페이지         |
| :------------------------------------------: | :----------------------------------------: |
|  <img src="https://user-images.githubusercontent.com/104756433/210474597-430f1947-8233-4b4f-b954-aa33bb25dea1.gif" width="247" height="550"/>  |    <img src="https://user-images.githubusercontent.com/104756433/210397962-d28cfeda-6d2d-4e85-9303-fa25277d3f33.gif" width="247" height="550"/>  | 


## 4. 트러블 슈팅
### 대운
**문제**
- 테스트용 가계정을 만들던 도중, Enter 키로 줄바꿈을 하고 입력해도 게시글을 등록하면 개행이 되지 않고 하나의 문단으로 합쳐지는 오류 발견.
    <img width="300" alt="포스트 캡처" src="https://user-images.githubusercontent.com/107315656/210632167-d7a37cda-5bb5-4501-a5ef-fc3d85df35a1.png">
    
- 데이터를 확인해 본 결과, 개행이 \n과 같은 이스케이프 문자로 처리되고 있었다.
    <img width="600" alt="에러 캡처" src="https://user-images.githubusercontent.com/107315656/210632115-ccae11bf-20a7-47e7-b552-b4a05e75c8b4.png">
    
- 처음에는 <code>text</code>라는 변수를 만들고, <code>replaceAll</code>로 이스케이프 문자를 <code><br/></code>태그로 치환해 준 뒤 렌더링을 하게끔 했으나 html 태그가 그대로 출력되고 있었다.

- 확인 결과, 리액트에서는 XSS(Cross-Site-Scripting) 공격을 막기 위해 렌더링 메소드 내부에서 html 태그가 덤겨 있는 <code>string</code> 형태를 렌더링하면 태그가 적용이 되지 않고 문자열 그대로 출력한다고 하였다. 따라서 <code>dangerouslySetInnerHTML</code>이라는 속성을 사용하였다.

```jsx
const text = post.content.replaceAll(/\n|\r\n/g, '<br/>');

<PostTxt dangerouslySetInnerHTML={{ __html: text }}></PostTxt>
```
---
    
    Uncaught TypeError: Cannot read properties of undefined (reading 'map')
<img width="658" alt="Untitled" src="https://user-images.githubusercontent.com/104756433/210578011-62dade1b-557a-4151-b55f-05e727164f48.png">

**문제**
    <br/>- react에서 컴포넌트 간의 life cycle 차이로 인해 undefined에 관한 에러가 자주 생김
    <br/>- map을 돌리거나 ref 걸어 current.style에 접근할 때 자주 마주침
    <br/><br/>
**해결법**
    <br/>- 조건부렌더링으로 해결(&& 연산자나 ?를 사용)
<br/><br/>
    
    Encountered two children with the same key, ~~~ . Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted - the behavior is unsupported and could change in a future version.
<img width="658" src="https://user-images.githubusercontent.com/104756433/210584149-29c867be-0482-4ee1-8e63-146232b28ba8.png">

**문제**
    <br/>- map()메서드에서 반환하는 두 개 이상의 요소가 동일한 key 소품 을 가질 때 React 오류 "동일한 키를 가진 두 개의 자식이 발생했습니다"가 발생
    <br/><br/>
**해결법**
    <br/>- key각 요소의 키에 고유한 값을 제공하거나 인덱스 매개변수를 사용하여 해결


## 5. 프로젝트를 진행하며 느낀점
### 대운
**전역상태관리의 어려움**
- 감귤마켓 프로젝트는 recoil이나 redux와 같은 전역상태관리 라이브러리를 설치하지 않아도 구현할 수 있는 프로젝트였지만, 프로젝트의 규모가 커짐에 따라 전역상태관리는 필수적이겠다는 생각이 들었다. recoil을 적용해 전역 상태관리를 해보려 했으나, recoil-persist로 localStorage에 값을 저장하는 방식이 보안 위험이 있다는 사실을 늦게 알아서, accountname과 isLogin 상태만을 남겨 해결하는 방식을 채택하게 되었다. 전역상태관리를 위한 나만의 무기를 장착해야겠다!
    
**설계 단계의 중요성**
- 폴더구조와 디자인패턴을 프로젝트 초기에 탄탄히 설계하지 못했다. 주먹구구식으로 타 팀들과 전 기수의 레포를 참고하다 보니 점점 복잡해지다 중반부가 지날 때 쯤 관리에 많은 어려움을 겪었다. 설계 단계에서 많은 시간과 정성을 쏟는 것이 결국 코드 작성과 같은 이후 프로젝트에 속도를 내게 해 줄 수 있다는 것을 깨달았다.
    
**구글링하되, 꼭 이해하자!**
- 코드를 구글링 하고 이해하는 데 많은 시간이 들었다. 초반에는 구현한 내용들을 팀원들에게 설명해 줄 시간이 있었지만, 뒤로 갈수록 나조차도 이해하는 데 시간이 오래걸려서 그럴 수가 없었다. 구글링으로 얻어온 코드가 돌아가는 것에서 그치지 말고, 반드시 이해해서 내 것으로 만드는 시간을 가지자.
    
**데이터와 친해지자**
- 어쩌면 서버에서 데이터를 받아와서 앞단에 뿌려주는 것은, 어쩌면 프론트엔드 개발자의 숙명과도 같은 일이라는 생각이 들었다. 데이터 송수신 성공 여부에 따라 프로젝트 진행의 속도가 많은 차이가 났다. 향후 서버가 있는 프로젝트를 진행한다면 필수적인 일일테니, 데이터와 친해지는 연습을 많이 하려 한다.

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
