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
} from '../styles/commonStyles';
import NewBooks from '../components/list/NewBooks';

function ListNewBooks() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPrevPage(location.pathname), []);
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
            <ContentTitleSection>
              <ContentTitle>{cate?.name} 신작</ContentTitle>
            </ContentTitleSection>
            <NewBooks isHome={true} cateNum={+cate.id} maxSize={12} />
          </ContentContainer>
        );
      })}
    </>
  );
}

export default ListNewBooks;
