import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ILatestBook, likedBookListState, prevPageState } from '../atom';

import CheeseHead from '../components/CheeseHead';
import EmptyData from '../components/EmptyData';
// styles
import {
  MyBooksSetContainer,
  MyBooksSetCover,
  MyBook,
  MyBookCover,
  BookShelves,
} from '../styles/screens/myBooksStyles';
import {
  PageTitle,
  PageTitleCover,
  PageTitleImg,
} from '../styles/commonStyles';

const CATE_NAME = 'My Books';

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
  }, []);

  return (
    <>
      <CheeseHead title={`${CATE_NAME}`} />
      <PageTitleCover>
        <PageTitleImg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese4.png)`,
          }}
        />
        <PageTitle>{CATE_NAME}</PageTitle>
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
                        src={book.cover}
                        alt={book.title}
                        loading="lazy"
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
        <EmptyData>empty...</EmptyData>
      )}
    </>
  );
}

export default MyBooks;
