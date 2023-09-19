import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ILatestBook, likedBookListState, prevPageState } from '../atom';

// styles
import {
  MyBooksSetContainer,
  MyBooksSetCover,
  EmptyMyBooksMent,
  MyBook,
  MyBookCover,
  BookShelves,
  EmptyMyBooksImg,
  EmptyBooksContainer,
} from '../styles/screens/myBooksStyles';
import { Link } from 'react-router-dom';
import {
  PageTitle,
  PageTitleCover,
  PageTitleImg,
} from '../styles/commonStyles';

function MyBooks() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const likedBookList = useRecoilValue(likedBookListState);
  const [bookSetList, setBookSetList] = useState<ILatestBook[][]>();
  const location = useLocation();

  useEffect(() => {
    setPrevPage(location.pathname);
    const len = likedBookList.length;
    const newBookSet = Array.from(
      Array(Math.ceil(len / 6)),
      () => new Array(1)
    );
    for (let i = len - 1; i >= 0; i--) {
      const idx = Math.floor((len - 1 - i) / 6);
      newBookSet[idx].push(likedBookList[i]);
    }
    setBookSetList([...newBookSet]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My Books | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
      <PageTitleCover>
        <PageTitleImg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese4.png)`,
          }}
        />
        <PageTitle>MY BOOKS</PageTitle>
      </PageTitleCover>
      {likedBookList.length ? (
        <>
          {bookSetList?.map((bookSet, i) => (
            <MyBooksSetContainer key={i}>
              <MyBooksSetCover>
                {bookSet.map((book, j) => (
                  <MyBook key={`${i}-${j}`}>
                    <Link to={`/book/${book.itemId}`}>
                      <MyBookCover
                        style={{ backgroundImage: `url(${book.cover})` }}
                      />
                    </Link>
                  </MyBook>
                ))}
              </MyBooksSetCover>
              <BookShelves />
            </MyBooksSetContainer>
          ))}
        </>
      ) : (
        <EmptyBooksContainer>
          <EmptyMyBooksImg
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese_null.png)`,
            }}
          />
          <EmptyMyBooksMent>empty...</EmptyMyBooksMent>
        </EmptyBooksContainer>
      )}
    </>
  );
}

export default MyBooks;
