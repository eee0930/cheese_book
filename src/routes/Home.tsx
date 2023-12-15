import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { prevPageState } from '../atom';
// components
import CheeseHead from '../components/CheeseHead';
import Banner from '../components/home/Banner';
import HomeMenu from '../components/home/HomeMenu';
import BestSellerTicker from '../components/home/BestSellerTicker';
import CheeseRecommend from '../components/home/CheeseRecomend';
import NewBooksTicker from '../components/home/NewBooksTicker';
// styles
import { ContentWrap } from '../styles/screens/homeStyles';

function Home() {
  const setPrevPage = useSetRecoilState(prevPageState);

  useEffect(() => setPrevPage('/'), []);

  return (
    <>
      <CheeseHead />
      <Banner />
      <HomeMenu />
      <BestSellerTicker />
      <ContentWrap className="row">
        <div className="col-12 col-lg-6">
          <CheeseRecommend />
        </div>
        <div className="col-12 col-lg-6">
          <NewBooksTicker />
        </div>
      </ContentWrap>
    </>
  );
}

export default Home;
