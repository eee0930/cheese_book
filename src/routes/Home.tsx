import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { prevPageState } from '../atom';
// components
import Banner from '../components/home/Banner';
import BestSellers from '../components/list/BestSellers';
import HomeMenu from '../components/home/HomeMenu';
import CheeseHead from '../components/CheeseHead';
import NewBooks from '../components/list/NewBooks';
// styles
import {
  ContentContainer,
  ContentTitleSection,
  ContentTitle,
  TitleBtnSection,
} from '../styles/commonStyles';

function Home() {
  const setPrevPage = useSetRecoilState(prevPageState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPrevPage('/'), []);
  return (
    <>
      <CheeseHead />
      <Banner />
      <HomeMenu />
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
        <BestSellers maxSize={12} />
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
        <NewBooks maxSize={12} />
      </ContentContainer>
    </>
  );
}

export default Home;
