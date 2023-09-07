import { useQuery } from 'react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ICategroyData, fetchCategories } from '../apis/localApi';
import { ContentContainer, ContentTitle } from '../styles/commonStyles';
import NewBooks from '../components/NewBooks';

function ListNewBooks() {
  const { data, isLoading } = useQuery<ICategroyData[]>(
    'categories',
    fetchCategories,
    { retry: 0 }
  );
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>New Books | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      {!isLoading &&
        data?.at(0)?.categories.map((cate) => {
          return (
            <ContentContainer key={cate.id}>
              <ContentTitle>{cate?.name} 신작</ContentTitle>
              <NewBooks isHome={true} cateNum={+cate.id} maxSize={12} />
            </ContentContainer>
          );
        })}
    </>
  );
}

export default ListNewBooks;
