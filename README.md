<br>
<div align="center">
  <img width="50%" src="https://github.com/eee0930/cheese_book/assets/37135523/a8153880-9cad-417b-9086-3bafa3f3131b.png" />
</div>

<br><br>

## Deployment
**github pages:** [https://eee0930.github.io/cheese_book](https://eee0930.github.io/cheese_book)

<br><br>



## Project Info
### Main Function
<ol>
  <li>나의 성격이나 취향에 맞는 책 추천 기능 (MBTI 테스트)</li>
  <li>베스트 셀러, 신작 리스트 제공</li>
  <li>책 미리보기 기능</li>
  <li>도서, 작가 검색 기능</li>
  <li>책 좋아요 및 좋아요한 책 리스트 보여주기</li>
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



## Getting Started 🏃‍♀️

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



## Stacks 📚
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



## Screens and Introduction 🎬
### 1. Home
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/ab40bfda-fcf5-4dfe-9920-7e1f0e144fea.gif"/>
  <br>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/e97bb335-d77a-409d-aa72-35955cfc37b9.gif" />
<p></p>

#### skills & issues
<ol>
  <li>movies, tv show, weekly trends 화면에서 재사용할 수 있도록 slider를 compoenent로 나눔</li>
  <li>component가 destroy되거나 render 될 떄 효과를 줄 수 있는 AnimationPresence를 이용하여 slider가 넘어가는 효과를 줌. 
  slider의 key를 index라는 number type으로 주고 slider를 넘기는 버튼을 클릭하면 index가 변화되도록 함. 
  index가 바뀌면 reactjs는 새로운 slider가 생성되었다고 생각하여 slider 애니메이션 효과를 줄 수 있음.</li>
  <li>slider 버튼을 빠르게 두번 클릭하면 slider가 destroy 되기 전에 새로운 slider가 render 되어 버려서 component contents가 꼬여버리는 버그가 생김.
  slider가 움직이고 있다는 의미를 가진 leaving이라는 state를 정의하고, AnimatePresence의 onExitComplete prop을 사용하여 leaving이 true인 동안은 버튼이 동작하지 않게 구현
  </li>
  <li>화면을 리렌더링했을 때 components가 render 되어서 버튼을 클릭하지 않았는데도 slider 애니메이션 효과가 나타나는 버그가 생김.
  AnimatePresence에 initial prop을 이용하여 initail 값을 false로 설정하여 해결함.
  </li>
</ol>
</div>

<br>

### 2. Best Sellers, New books
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/50ef5119-b5bf-4530-9173-50ec1b097872.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>Box를 클릭했을 때 URL을 변경시키고, 변화된 URL에 기반해서 상세보기 Modal을 띄우는 애니메이션을 실행시킴.</li>
</ol>
</div>

<br>

### 3. Detail Book
<div>
<img width="80%" src="https://github.com/eee0930/netflix_clone/assets/37135523/0b5e0e36-6a0a-4cd9-9981-4f830ed6ce92.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>Box를 클릭했을 때 URL을 변경시키고, 변화된 URL에 기반해서 상세보기 Modal을 띄우는 애니메이션을 실행시킴.</li>
</ol>
</div>

<br>

### 4. Book Viewer
<div>
<img width="80%" src="https://github.com/eee0930/netflix_clone/assets/37135523/0b5e0e36-6a0a-4cd9-9981-4f830ed6ce92.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>Box를 클릭했을 때 URL을 변경시키고, 변화된 URL에 기반해서 상세보기 Modal을 띄우는 애니메이션을 실행시킴.</li>
</ol>
</div>

<br>

### 5. Your Taste
<div>
<img width="80%" src="https://github.com/eee0930/cheese_book/assets/37135523/369e77c2-6db3-48c9-bf6c-11a57ef006d8.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>Box를 클릭했을 때 URL을 변경시키고, 변화된 URL에 기반해서 상세보기 Modal을 띄우는 애니메이션을 실행시킴.</li>
</ol>
</div>

<br>

### 6. My Books
<div>
<img width="80%" src="https://github.com/eee0930/netflix_clone/assets/37135523/28e99ab8-0ed1-4573-8844-3441f565f9b4.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>framer motion의 whileHover prop을 이용하여 사진에 마우스를 올릴 시 사진이 해당 영화의 트레일러 영상 component로 변경되도록 구현</li>
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
  <li>Router의 useNavigate를 이용하여 검색을 하면 /search로 리다이렉트 되도록 함.</li>
  <li>useLocation으로 검색어인 param 값을 가져와 해당 검색어에 해당되는 api data를 가져옴.</li>
</ol>
</div>


<br>

### 8. Latest Books
<div>
<img width="80%" src="https://github.com/eee0930/netflix_clone/assets/37135523/060ddc04-c14a-4b83-9d04-80fb0d986330.gif"/>
<p></p>

#### skills & issues
<ol>
  <li>Router의 useNavigate를 이용하여 검색을 하면 /search로 리다이렉트 되도록 함.</li>
  <li>useLocation으로 검색어인 param 값을 가져와 해당 검색어에 해당되는 api data를 가져옴.</li>
</ol>
</div>

<br><br>



## Architecture

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
