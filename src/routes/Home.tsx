// components
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../components/Banner';
import BestSellers from '../components/BestSellers';
// styles
import {
  ContentContainer,
  ContentTitleSection,
  ContentTitle,
  TitleBtnSection,
} from '../styles/commonStyles';
import NewBooks from '../components/NewBooks';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { prevPageState } from '../atom';
import { useEffect } from 'react';

function Home() {
  const setPrevPage = useSetRecoilState(prevPageState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPrevPage('/'), []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      <Banner />
      <ContentContainer>
        <ContentTitleSection className="row">
          <ContentTitle className="col-12 col-lg-auto">
            <i className="fa-solid fa-trophy" />
            급상승 ! 많이 보고 있는 책
          </ContentTitle>
          <TitleBtnSection className="d-none d-lg-inline-block col-lg">
            <Link to="/best">
              더보기 <i className="fa-solid fa-plus" />
            </Link>
          </TitleBtnSection>
        </ContentTitleSection>
        <BestSellers isHome={true} maxSize={12} />
      </ContentContainer>
      <ContentContainer>
        <ContentTitleSection className="row">
          <ContentTitle className="col-12 col-lg-auto">
            <i className="fa-solid fa-rocket" />
            어서와 ! 따끈따끈 산상 책
          </ContentTitle>
          <TitleBtnSection className="d-none d-lg-inline-block col-lg">
            <Link to="/new">
              더보기 <i className="fa-solid fa-plus" />
            </Link>
          </TitleBtnSection>
        </ContentTitleSection>
        <NewBooks isHome={true} maxSize={12} />
      </ContentContainer>
    </>
  );
}

export default Home;
