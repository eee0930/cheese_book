// components
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../components/Banner';
import BestSellers from '../components/BestSellers';
// styles
import { ContentContainer, ContentTitle } from '../utils/commonStyles';

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      <Banner />
      <ContentContainer>
        <ContentTitle>Best Sellers This Week</ContentTitle>
        <BestSellers isHome={true} maxSize={24} />
      </ContentContainer>
    </>
  );
}

export default Home;
