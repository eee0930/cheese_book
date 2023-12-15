import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { myTasteResultState, prevPageState } from '../atom';
// components
import CheeseHead from '../components/CheeseHead';
import { Button } from '../components/Button';
import MbtiTest from '../components/taste/MbtiTest';
import TasteResults from '../components/taste/TasteResults';
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

const CATE_NAME = 'Your Taste';

function Taste() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const [myTasteResult, setMyTasteResult] = useRecoilState(myTasteResultState);
  const [testStart, setTestStart] = useState(false);
  const location = useLocation();

  useEffect(() => setPrevPage(location.pathname), []);

  const getTestResult = (result: string) => setMyTasteResult(result);
  const handleRetry = () => {
    setMyTasteResult('CHEESE');
    setTestStart(false);
  };
  return (
    <>
      <CheeseHead title={`${CATE_NAME}`} />

      <PageTitleCover>
        <PageTitleImg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese3.png)`,
          }}
        />
        <PageTitle>{CATE_NAME}</PageTitle>
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
          <TasteResults callBack={handleRetry} />
        </TasteTestResultContainer>
      )}
    </>
  );
}

export default Taste;
