import { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useQuery } from 'react-query';
// apis
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBookDetailById,
} from '../apis/aladinApi';
// components
import Button from '../components/mixins/Button';
import ViewerModal from '../components/ViewerModal';
// styles
import { Loader } from '../styles/globalStyles';
import {
  BookContentContainer,
  BookContentResultContainer,
  BookContentSection,
  BookImageSection,
  TitleSection,
  CategoryContainer,
  PreviewBtnSection,
} from '../styles/screens/viewDetailStyles';
import DetailImages from '../components/DetailImages';
import { useRecoilValue } from 'recoil';
import { prevPageState } from '../atom';

function ViewDetail() {
  const prevPage = useRecoilValue(prevPageState);
  const useId = useMatch('/book/:id');
  const itemId = Number(useId?.params.id);
  const [openPreview, setOpenPreview] = useState(false);

  const { data: book, isLoading } = useQuery<
    IAladinRequestList,
    any,
    IAladinBookItem
  >('bookDetail', () => fetchBookDetailById(itemId), {
    retry: 0,
    select: (bookDetail) => bookDetail.item[0],
  });

  return (
    <>
      {isLoading ? (
        <Loader>
          <div>
            <div></div>
            <div></div>
          </div>
        </Loader>
      ) : (
        <>
          <HelmetProvider>
            <Helmet>
              <title>{book?.title + ' | '}Cheese Book</title>
            </Helmet>
          </HelmetProvider>
          <BookContentResultContainer>
            {/* [1. 카테고리]--------------------------------------------------*/}
            <CategoryContainer>
              <Link to="/">
                <i className="fa fa-home" />
              </Link>
              <Link to={prevPage}>prev</Link>
              <span>{book?.title}</span>
            </CategoryContainer>
            {/* [2. 책 정보]---------------------------------------------------*/}
            <BookContentContainer>
              {/* 2.1 제목 */}
              <TitleSection>
                <h1>{book?.title}</h1>
                <h3>{book?.author}</h3>
              </TitleSection>
              {/* 2.2 책 커버 및 출판 정보 */}
              <BookContentSection>
                {/* 책 커버 */}
                <BookImageSection>
                  <DetailImages
                    itemId={itemId}
                    title={book?.title as string}
                    cover={book?.cover as string}
                  />
                  <PreviewBtnSection>
                    <Button
                      value="미리보기"
                      styleIdx={2}
                      handleBtn={() => setOpenPreview(true)}
                    />
                  </PreviewBtnSection>
                </BookImageSection>
              </BookContentSection>
            </BookContentContainer>
          </BookContentResultContainer>

          {openPreview && (
            <ViewerModal
              itemId={book?.itemId as number}
              title={book?.title as string}
              cover={book?.cover as string}
              closeModal={() => setOpenPreview(false)}
            />
          )}
        </>
      )}
    </>
  );
}

export default ViewDetail;
