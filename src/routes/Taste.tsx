import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { myTasteResultState, prevPageState } from '../atom';
import {
  PageTitle,
  PageTitleCover,
  PageTitleImg,
} from '../styles/commonStyles';
import {
  TasteTestIntro,
  TasteTestResultContainer,
} from '../styles/screens/tasteStyles';

function Taste() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const [myTasteResult, setMyTasteResult] = useRecoilState(myTasteResultState);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPrevPage(location.pathname), []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My Taste | Cheese Book</title>
        </Helmet>
      </HelmetProvider>

      <PageTitleCover>
        <PageTitleImg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese3.png)`,
          }}
        />
        <PageTitle>your taste</PageTitle>
      </PageTitleCover>
      {myTasteResult === 'CHEESE' ? (
        <TasteTestIntro></TasteTestIntro>
      ) : (
        <TasteTestResultContainer>
          <Outlet context={{ result: myTasteResult }} />
        </TasteTestResultContainer>
      )}
    </>
  );
}

export default Taste;
