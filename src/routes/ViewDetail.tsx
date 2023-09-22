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
  DetialInfoContainer,
  DetailInfoTitle,
  DetailInfoCover,
  DetialInfoContainer2,
  CardReview,
} from '../styles/screens/viewDetailStyles';
import DetailImages from '../components/viewDetail/DetailImages';

const getRedesignPrice = (price: number) => {
  const priceStr = String(price);
  const len = priceStr.length;
  return Array.from(Array(Math.ceil(len / 3)), (_, i) => {
    let newPrice = '';
    const po = len % 3;
    const idx = (i - 1) * 3 + po;
    if (i === 0) {
      newPrice = priceStr.slice(0, po);
    } else {
      newPrice = priceStr.slice(idx, idx + 3);
    }
    return newPrice;
  }).join(',');
};

const getCardReviews = (reviewList: string[]) => {
  const last = reviewList.at(-1);
  const [startIdx, endIdx] = [last?.lastIndexOf('_'), last?.lastIndexOf('.')];
  let ROOT = '';
  let idx = 0;
  if (startIdx) {
    idx = Number(last?.slice(startIdx + 2, endIdx));
    ROOT = last?.slice(0, startIdx + 2) as string;
  }
  if (isNaN(idx)) {
    return reviewList;
  } else {
    return Array.from(Array(idx), (_, i) => `${ROOT}${i + 1}.jpg`);
  }
};
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
                    isbn={book?.isbn as string}
                    title={book?.title as string}
                    cover={book?.cover as string}
                  />
                  <PreviewBtnSection>
                    <Button styleIdx={2} handleBtn={() => setOpenPreview(true)}>
                      미리보기
                    </Button>
                  </PreviewBtnSection>
                </BookImageSection>
                <DetialInfoContainer className="row">
                  <DetailInfoTitle className="col-12 col-lg-3">
                    책 소개
                  </DetailInfoTitle>
                  <DetailInfoCover className="col-12 col-lg-9">
                    <div>
                      <span>{book?.description}</span>
                    </div>
                  </DetailInfoCover>
                </DetialInfoContainer>
                <DetialInfoContainer2 className="row">
                  <DetailInfoTitle className="col-12 col-lg-3">
                    기본 정보
                  </DetailInfoTitle>
                  <DetailInfoCover className="col-12 col-lg-9">
                    <div>
                      <span className="label">출판사</span>
                      <span>{book?.publisher}</span>
                    </div>
                    <div>
                      <span className="label">주제분류</span>
                      <span>{book?.categoryName.split('>').join(' > ')}</span>
                    </div>
                    <div>
                      <span className="label">출간일</span>
                      <span>{book?.pubDate}</span>
                    </div>
                    <div>
                      <span className="label">정가</span>
                      <span>
                        {getRedesignPrice(book?.priceStandard as number)}원
                      </span>
                    </div>
                    {book?.subInfo && (
                      <div>
                        <span className="label">페이지 수</span>
                        <span>{book?.subInfo?.itemPage}쪽</span>
                      </div>
                    )}
                    {book?.bestDuration && (
                      <div>
                        <span className="label">종합주간</span>
                        <span>
                          {book.bestRank} {book.bestDuration}
                        </span>
                      </div>
                    )}
                  </DetailInfoCover>
                </DetialInfoContainer2>

                {book?.subInfo?.cardReviewImgList && (
                  <DetialInfoContainer className="row">
                    <DetailInfoTitle className="col-12 col-lg-3">
                      카드 리뷰
                    </DetailInfoTitle>
                    <DetailInfoCover className="col-12 col-lg-9">
                      <CardReview>
                        {getCardReviews(book?.subInfo?.cardReviewImgList).map(
                          (review, i) => (
                            <img key={i} src={review} alt={book?.title} />
                          )
                        )}
                      </CardReview>
                    </DetailInfoCover>
                  </DetialInfoContainer>
                )}
              </BookContentSection>
            </BookContentContainer>
          </BookContentResultContainer>

          {openPreview && (
            <ViewerModal
              itemId={book?.itemId as number}
              isbn={book?.isbn as string}
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
