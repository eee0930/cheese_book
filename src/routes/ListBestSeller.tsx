import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { categoryList } from '../data/cheeseMainData';
import { prevPageState } from '../atom';
import {
  ContentContainer,
  ContentTitle,
  ContentTitleSection,
  PageTitle,
  PageTitleCover,
  PageTitleImg,
} from '../styles/commonStyles';
import BestSellers from '../components/list/BestSellers';

function ListBestSeller() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPrevPage(location.pathname), []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Best Sellers | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      <PageTitleCover>
        <PageTitleImg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese1.png)`,
          }}
        />
        <PageTitle>BEST SELLERS</PageTitle>
      </PageTitleCover>
      {categoryList?.at(0)?.categories.map((cate) => {
        return (
          <ContentContainer key={cate.id}>
            <ContentTitleSection>
              <ContentTitle>{cate?.name} 베스트</ContentTitle>
            </ContentTitleSection>
            <BestSellers isKorea={true} cateNum={+cate.id} maxSize={12} />
          </ContentContainer>
        );
      })}
    </>
  );
}

export default ListBestSeller;
