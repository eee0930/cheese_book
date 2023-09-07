import { Helmet, HelmetProvider } from 'react-helmet-async';
import { categoryList } from '../data/cheeseMainData';
import { ContentContainer, ContentTitle } from '../styles/commonStyles';
import NewBooks from '../components/NewBooks';

function ListNewBooks() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>New Books | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      {categoryList?.at(0)?.categories.map((cate) => {
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
