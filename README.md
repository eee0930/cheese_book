<br>
<div align="center">
  <img width="50%" src="https://github.com/eee0930/cheese_book/assets/37135523/a8153880-9cad-417b-9086-3bafa3f3131b.png" />
</div>

<br><br>

## Deployment
**github pages:** [https://eee0930.github.io/cheese_book](https://eee0930.github.io/cheese_book)

<br><br>

[1. Project Info](#project-info)
[2. Getting Started](#getting-started-🏃‍♀️)
[3. Stacks](#stacks-📚)
[4. Screens and Introduction](#screens-and-introduction-🎬)
[5. Architecture](#architecture)


<br><br>

## 1. Project Info
### Main Function
<ol>
  <li>나의 성격이나 취향에 맞는 책 추천 기능 (MBTI 테스트)</li>
  <li>베스트 셀러, 신작 리스트 제공</li>
  <li>책 미리보기 기능</li>
  <li>도서, 작가 검색 기능</li>
  <li>책 좋아요 및 좋아요한 책 리스트 보여주기</li>
  <li>Mobile과 PC 유저 모두를 위한 반응형 디자인</li>
</ol>

### Goal
<ol>
  <li>책을 읽기 귀찮아하는 게으름쟁이들을 위해 오로지 '책' 정보만 보여주는 SPA 사이트 만들기</li>
  <li>책 이미지를 3d로 표현하여 관심 유도</li>
  <li>Framer Motion을 이용하여 사용자 인터렉션 유도</li>
  <li>React Query의 cashing 특징을 이용해 대량의 데이터 가져오기</li>
  <li>반복 사용 가능한 Custom Hook 만들기 </li>
  <li>crawring으로 필요한 정보만 가져오기</li>
</ol>

### Period
2023-08-11 ~ 2023-09-20


<br><br>



## 2. Getting Started 🏃‍♀️

### Installation
``` bash
$ git clone https://github.com/eee0930/cheese_book.git
$ cd cheese_book
$ code .
```

### How to run
- Change the `REACT_APP_ALADIN_KEY` and `REACT_APP_ALADIN_ROOT` on the `.env.example` file.
- Click on `View` -> `Terminal`.
- Run 
```
$ npm install
$ npm start
```

### How to deploy?
- Change the `homepage` on the `package.json` file.
```
$ npm run deploy
```


<br><br>



## 3. Stacks 📚
### Libraries & Languages
<div>
<img src="https://img.shields.io/badge/TypeScript-444444?style=for-the-badge&logo=typescript&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/React-333333?style=for-the-badge&logo=React&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-018EF5?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/Framer Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"/>
</div>

### Config
<div>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
</div>

### Environment
<div>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</div>

<br><br>



## 4. Screens and Introduction 🎬
### 1. Home
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/ab40bfda-fcf5-4dfe-9920-7e1f0e144fea.gif"/>

#### skills & issues
<ol>
  <li>베스트셀러 List Data를 불러와 framer motion을 이용하여 active한 배너를 보여줌</li>
  <li>5초마다 한번씩 배너를 변경하기 위헤 setTimeout 기능을 썼지만 timeout이 한번 발생될 때마다 state들이 모두 업데이트되는 버그 발생 -> setTimeout을 정의한 변수를 담을 state를 정의한 후 useEffect 안에서 배너 변경 감지시 timeout 변수를 삭제한 후 다시 정의하여 해결</li>
</ol>
<br>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/e97bb335-d77a-409d-aa72-35955cfc37b9.gif" />

#### skills & issues
<ol>
  <li>베스트셀러, 신작 도서, 치즈북 추천 도서들을 framer motion을 이용하여 ticker 형태로 active하게 보여줌</li>
  <li>각각의 도서 클릭 시 해당 도서 상세페이지로 이동</li>
</ol>
</div>

<br>

### 2. Best Sellers, New books
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/50ef5119-b5bf-4530-9173-50ec1b097872.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>카테고리별로 베스트셀러와 신작 도서들을 보여줌</li>
  <li>Skelepton UI를 이용하여 한꺼번에 많은 데이터를 불러오기전 로딩 화면을 보여줌</li>
  <li>layout component를 따로 만들어 그 안에서 scroll이 움직이도록 구현하였기 때문에 useScroll hook이 적용되지 않는 문제가 생김 -> useRef에 이동할 target div를 배열로 담아 scrollIntoView를 이용하여 스크롤 이동을 구현하여 해결함</li>
</ol>
</div>

<br>

### 3. Detail Book
<div>
<img width="80%" src="https://github.com/eee0930/netflix_clone/assets/37135523/0b5e0e36-6a0a-4cd9-9981-4f830ed6ce92.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>책 커버에 마우스를 올릴 시 책 이미지가 3d로 움직임</li>
  <li>책 기본 정보들을 보여줌</li>
  <li>이미지로 된 카드 리뷰를 button click 또는 mouse drag event를 일으켜 slide로 보여줌</li>
</ol>
</div>

<br>

### 4. Book Viewer
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/eff8b490-605a-4608-903b-c9639d97c756.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>책 미리보기 버튼 클릭 시 미리보기 모달을 띄움</li>
  <li>오른쪽을 클릭시 다음 페이지로 이동, 왼쪽을 클릭시 이전 페이지로 이동</li>
  <li>객 책들의 미리보기 이미지 정보를 미리 알 수 없음 (이미지의 404 에러를 통해 미리보기 이미지 유무를 알 수 있음) -> 이미지 url을 string으로 미리 만든 후 onError를 이용하여 cover 이미지로 교체함</li>
  <li>404에러가 난 이미지를 클릭시 index에 관한 정보기 없어 빈 화면이 나옴 -> 이미지 태그에 onError가 실행될 경우 index가 0일때만 prevent라는 state를 true로 변경, prevent가 true일 경우 이미지 클릭 이벤트를 preventDefault, return 시켜 해결</li>
</ol>
</div>

<br>

### 5. Your Taste
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/f1897617-845d-4354-95ef-d835e48de07f.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>12개 문항의 mbti 테스트를 통해 각 성격유형별로 책을 추천해줌</li>
</ol>
</div>

<br>

### 6. My Books
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/3857757e-1ea9-4ae5-92c1-18fd903e3692.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>상세보기 페이지에서 하트모양 좋아요 버튼을 클릭시 My Books 페이지에서 좋아요를 누른 책 목록을 볼 수있음</li>
</ol>
</div>

</div>

<br>

### 7. Search Results
<div>
<img width="80%" src="https://github.com/eee0930/netflix_clone/assets/37135523/060ddc04-c14a-4b83-9d04-80fb0d986330.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>책 또는 지은이 검색을 할 수 있음</li>
  <li>최근 검색어 5개 목록을 보여줌, 클릭시 해당 검색 결과를 보여줌</li>
  <li>검색한 keyword로 재 검색시 새로 데이터를 불러오는 문제 -> cashing 기능이 있는 react query 사용</li>
  <li>검색 결과 화면에서 다른 keyword로 검색시 데이어를 불러오지 못하는 버그 발생 -> react query 고유키 설정 오류로, 검색어마다 고유기를 ['search', 검색어]로 지정하여 해결</li>
</ol>
</div>


<br>

### 8. Latest Books
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/e9b73505-9e56-4b43-a854-d301b34841ec.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>최근 본 책 목록을 보여줌</li>
  <li>각각의 책 목록을 클릭시 해당 책의 상세페이지로 이동</li>
  <li>책 각각을 목록에서 삭제시키거나 전체 삭제를 할 수 있음</li>
</ol>
</div>

<br><br>



## 5. Architecture

### Directory structure
```bash
📦src
 ┣ 📂apis
 ┃ ┣ 📜aladinApi.ts
 ┃ ┣ 📜fetching.ts
 ┃ ┗ 📜localApi.ts
 ┣ 📂components
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜Banner.tsx
 ┃ ┃ ┣ 📜BestSellerTicker.tsx
 ┃ ┃ ┣ 📜CheeseRecomend.tsx
 ┃ ┃ ┣ 📜HomeMenu.tsx
 ┃ ┃ ┗ 📜NewBooksTicker.tsx
 ┃ ┣ 📂list
 ┃ ┃ ┣ 📜BestSellers.tsx
 ┃ ┃ ┣ 📜NavTaps.tsx
 ┃ ┃ ┗ 📜NewBooks.tsx
 ┃ ┣ 📂mixins
 ┃ ┃ ┣ 📜Book.tsx
 ┃ ┃ ┗ 📜CoverImage.tsx
 ┃ ┣ 📂taste
 ┃ ┃ ┣ 📜MbtiTest.tsx
 ┃ ┃ ┗ 📜TasteResults.tsx
 ┃ ┣ 📂viewDetail
 ┃ ┃ ┣ 📜BookViewer.tsx
 ┃ ┃ ┣ 📜DetailContainer.tsx
 ┃ ┃ ┣ 📜DetailImages.tsx
 ┃ ┃ ┗ 📜ViewerModal.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜CheeseHead.tsx
 ┃ ┣ 📜EmptyData.tsx
 ┃ ┣ 📜ErrorComponet.tsx
 ┃ ┣ 📜LatestBookList.tsx
 ┃ ┣ 📜MobileHeader.tsx
 ┃ ┣ 📜ProgressBar.tsx
 ┃ ┣ 📜SearchForm.tsx
 ┃ ┣ 📜SideMenu.tsx
 ┃ ┗ 📜Ticker.tsx
 ┣ 📂data
 ┃ ┗ 📜cheeseMainData.ts
 ┣ 📂hooks
 ┃ ┣ 📜useAppendScript.ts
 ┃ ┣ 📜useImageLoad.ts
 ┃ ┗ 📜useRedesignData.ts
 ┣ 📂routes
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜AuthLayout.tsx
 ┃ ┃ ┗ 📜BasicLayout.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜ListBestSeller.tsx
 ┃ ┣ 📜ListNewBooks.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜MyBooks.tsx
 ┃ ┣ 📜NotFound.tsx
 ┃ ┣ 📜SearchResults.tsx
 ┃ ┣ 📜Taste.tsx
 ┃ ┗ 📜ViewDetail.tsx
 ┣ 📂styles
 ┃ ┣ 📂components
 ┃ ┣ 📂screens
 ┣ 📜App.tsx
 ┣ 📜Router.tsx
 ┣ 📜atom.ts
 ┗ 📜index.tsx
 ```
