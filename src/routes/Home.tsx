import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { prevPageState } from '../atom';
// components
import Banner from '../components/home/Banner';
import HomeMenu from '../components/home/HomeMenu';
import CheeseHead from '../components/CheeseHead';
import BestSellerTicker from '../components/home/BestSellerTicker';
import NewBooksTicker from '../components/home/NewBooksTicker';
import CheeseRecommend from '../components/home/CheeseRecomend';
// styles
import { ContentWrap } from '../styles/screens/homeStyles';

function Home() {
  const setPrevPage = useSetRecoilState(prevPageState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
