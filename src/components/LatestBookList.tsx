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
  DeleteOneBtn,
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
import { AnimatePresence } from 'framer-motion';

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
    }, 300);
  };
  const handleClickBook = (itemId: number) => {
    setOpenLatestList(false);
    navigate(`/book/${itemId}`);
  };
  const handleClickDelete = (e: React.UIEvent, idx: number) => {
    if (latestBooks.length === 1) {
      setOpenLatestList(false);
    }
    e.stopPropagation();
    setLatestBooks((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };
  return (
    <>
      <LatestBookBtnCover>
        <LatestBookBtnContainer>
          <LatestBookBtnImgCover className={`${openLatestList && 'active'}`}>
            {latestBooks.length > 0 ? (
              <LatestBookBtnImg
                onClick={() => setOpenLatestList(true)}
                style={{
                  backgroundImage: `url(${latestBooks?.at(-1)?.cover})`,
                }}
              />
            ) : (
              <LatestBookBtnImg
                className="empty"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese_null.png)`,
                }}
              />
            )}
            <LatestBookCloseBtn onClick={() => setOpenLatestList(false)}>
              <i className="fa-solid fa-times" />
            </LatestBookCloseBtn>
          </LatestBookBtnImgCover>
        </LatestBookBtnContainer>
        {!openLatestList && <CountLabel>{latestBooks.length}</CountLabel>}
      </LatestBookBtnCover>
      <AnimatePresence>
        {openLatestList && (
          <LatestBookListSection>
            <LatestBookOverlay onClick={() => setOpenLatestList(false)} />
            <LatestBookListContainer>
              <LatestBookListCover
                variants={slideUp}
                initial="initial"
                animate="animate"
                exit="exit"
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
                    {latestBooks.map((book, i) => (
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
                        <BookTitle>{book.title.split('-')[0]}</BookTitle>
                        <DeleteOneBtn
                          onClick={(event) => handleClickDelete(event, i)}
                        >
                          <i className="fa-solid fa-times" />
                        </DeleteOneBtn>
                      </BookList>
                    ))}
                  </BookListUl>
                </BookListContainer>
              </LatestBookListCover>
            </LatestBookListContainer>
          </LatestBookListSection>
        )}
      </AnimatePresence>
    </>
  );
}

export default LatestBookList;
