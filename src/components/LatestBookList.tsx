import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { latestBookListState } from '../atom';
import {
  BookCover,
  BookInfoCount,
  BookList,
  BookListContainer,
  BookListInfo,
  BookListUl,
  BookTitle,
  CountLabel,
  DeleteBtn,
  LatestBookBtnContainer,
  LatestBookBtnCover,
  LatestBookBtnImg,
  LatestBookBtnImgCover,
  LatestBookCloseBtn,
  LatestBookListContainer,
  LatestBookListCover,
  LatestBookListSection,
  LatestBookOverlay,
  Title,
  slideLeft,
  slideUp,
} from '../styles/components/latestBookListStyles';
import { useNavigate } from 'react-router-dom';

function LatestBookList() {
  const [latestBooks, setLatestBooks] = useRecoilState(latestBookListState);
  const [openLatestList, setOpenLatestList] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const navigate = useNavigate();
  const handleClickDeleteAll = () => {
    setDeleteAll(true);
    setTimeout(() => {
      setLatestBooks([]);
      setOpenLatestList(false);
      setDeleteAll(false);
    }, 500);
  };
  const handleClickBook = (itemId: number) => {
    setOpenLatestList(false);
    navigate(`/book/${itemId}`);
  };
  return (
    <>
      {latestBooks.length > 0 && (
        <LatestBookBtnCover>
          <LatestBookBtnContainer>
            <LatestBookBtnImgCover className={`${openLatestList && 'active'}`}>
              <LatestBookBtnImg
                onClick={() => setOpenLatestList(true)}
                style={{
                  backgroundImage: `url(${latestBooks?.at(-1)?.cover})`,
                }}
              />
              <LatestBookCloseBtn onClick={() => setOpenLatestList(false)}>
                <i className="fa-solid fa-times" />
              </LatestBookCloseBtn>
            </LatestBookBtnImgCover>
          </LatestBookBtnContainer>
          {!openLatestList && <CountLabel>{latestBooks.length}</CountLabel>}
        </LatestBookBtnCover>
      )}
      {openLatestList && (
        <LatestBookListSection>
          <LatestBookOverlay onClick={() => setOpenLatestList(false)} />
          <LatestBookListContainer>
            <LatestBookListCover
              variants={slideUp}
              initial="initial"
              animate="animate"
            >
              <Title>최근 본 책</Title>
              <BookListInfo>
                <BookInfoCount>{latestBooks.length} 권</BookInfoCount>
                <DeleteBtn onClick={handleClickDeleteAll}>
                  <i className="fa-solid fa-trash-alt" /> 전체삭제
                </DeleteBtn>
              </BookListInfo>
              <BookListContainer>
                <BookListUl>
                  {latestBooks.map((book) => (
                    <BookList
                      variants={slideLeft}
                      initial="initial"
                      animate={deleteAll && 'animate'}
                      key={book.itemId}
                      onClick={() => handleClickBook(book.itemId)}
                    >
                      <BookCover
                        style={{ backgroundImage: `url(${book.cover})` }}
                      />
                      <BookTitle>{book.title}</BookTitle>
                    </BookList>
                  ))}
                </BookListUl>
              </BookListContainer>
            </LatestBookListCover>
          </LatestBookListContainer>
        </LatestBookListSection>
      )}
    </>
  );
}

export default LatestBookList;
