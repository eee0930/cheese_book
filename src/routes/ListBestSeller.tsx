import { Helmet, HelmetProvider } from 'react-helmet-async';
import { categoryList } from '../data/cheeseMainData';
import { ContentContainer, ContentTitle } from '../styles/commonStyles';
import BestSellers from '../components/BestSellers';

function ListBestSeller() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Best Sellers | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      {categoryList?.at(0)?.categories.map((cate) => {
        return (
          <ContentContainer key={cate.id}>
            <ContentTitle>{cate?.name} 베스트</ContentTitle>
            <BestSellers isHome={true} cateNum={+cate.id} maxSize={12} />
          </ContentContainer>
        );
      })}
    </>
  );
}

export default ListBestSeller;
