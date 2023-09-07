import { useQuery } from 'react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ICategroyData, fetchCategories } from '../apis/localApi';
import { ContentContainer, ContentTitle } from '../styles/commonStyles';
import BestSellers from '../components/BestSellers';

function ListBestSeller() {
  const { data, isLoading } = useQuery<ICategroyData[]>(
    'categories',
    fetchCategories,
    { retry: 0 }
  );
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Best Sellers | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      {!isLoading &&
        data?.at(0)?.categories.map((cate) => {
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
