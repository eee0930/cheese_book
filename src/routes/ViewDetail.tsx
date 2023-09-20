import { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';
// apis
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBookDetailById,
} from '../apis/aladinApi';
import { prevPageState } from '../atom';
// components
import { Button } from '../components/Button';
import ViewerModal from '../components/viewDetail/ViewerModal';
import CheeseHead from '../components/CheeseHead';
// styles
import { Loader } from '../styles/globalStyles';
import {
  BookContentContainer,
  BookContentResultContainer,
  BookContentSection,
  BookImageSection,
  TitleSection,
  PreviewBtnSection,
  PrevBtnContainer,
} from '../styles/screens/viewDetailStyles';
import DetailImages from '../components/viewDetail/DetailImages';

function ViewDetail() {
  const prevPage = useRecoilValue(prevPageState);
  const useId = useMatch('/book/:id');
  const itemId = Number(useId?.params.id);
  const [openPreview, setOpenPreview] = useState(false);

  const { data: book, isLoading } = useQuery<
    IAladinRequestList,
    Error,
    IAladinBookItem
  >(['bookDetail', itemId], () => fetchBookDetailById(itemId), {
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
          <CheeseHead title={`${book?.title.split('-')[0]}`} />
          <BookContentResultContainer>
            {/* [1. 카테고리]--------------------------------------------------*/}
            <PrevBtnContainer>
              <Link to={prevPage}>
                <i className="fa-solid fa-angle-left" /> prev
              </Link>
            </PrevBtnContainer>
            {/* [2. 책 정보]---------------------------------------------------*/}
            <BookContentContainer>
              {/* 2.1 제목 */}
              <TitleSection>
                <h1>{book?.title.split('-')[0]}</h1>
                <h1 className="subTitle">{book?.title.split('-').slice(1)}</h1>
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
                    <Button styleIdx={2} handleBtn={() => setOpenPreview(true)}>
                      미리보기
                    </Button>
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
