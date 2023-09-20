import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { myTasteResultState, prevPageState } from '../atom';
// styles
import {
  PageTitle,
  PageTitleCover,
  PageTitleImg,
} from '../styles/commonStyles';
import {
  IntroImg,
  IntroMent,
  TasteTestContainer,
  TasteTestIntro,
  TasteTestResultContainer,
  testContainerVariants,
} from '../styles/screens/tasteStyles';
// components
import { Button } from '../components/Button';
import MbtiTest from '../components/taste/MbtiTest';
import TasteResults from '../components/taste/TasteResults';

function Taste() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const [myTasteResult, setMyTasteResult] = useRecoilState(myTasteResultState);
  const [testStart, setTestStart] = useState(false);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPrevPage(location.pathname), []);

  const getTestResult = (result: string) => setMyTasteResult(result);
  const handleClickRetry = () => setMyTasteResult('CHEESE');

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
        <>
          {testStart ? (
            <TasteTestContainer
              variants={testContainerVariants}
              initial="initial"
              animate="animate"
            >
              <MbtiTest callback={getTestResult} />
            </TasteTestContainer>
          ) : (
            <TasteTestIntro>
              <IntroImg
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese_taste.png)`,
                }}
              />
              <IntroMent
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/img/taste_ment.png)`,
                }}
              />
              <Button handleBtn={() => setTestStart(true)} size="lg">
                테스트 시작
              </Button>
            </TasteTestIntro>
          )}
        </>
      ) : (
        <TasteTestResultContainer>
          <TasteResults />
          <Button handleBtn={handleClickRetry} size="lg">
            RETRY <i className="fa-solid fa-undo" />
          </Button>
        </TasteTestResultContainer>
      )}
    </>
  );
}

export default Taste;
