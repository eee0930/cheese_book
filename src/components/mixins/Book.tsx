import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import ContentLoader from 'react-content-loader';
import { latestBookListState } from '../../atom';

import { useAuthors } from '../../hooks/useRedesignData';
// styles
import {
  BookContentContainer,
  BookCover,
  BookInfo,
  BookTitle,
  Rank,
} from '../../styles/components/bookStyles';
import { HeartBlast } from '../Button';

const GRID_SIZE = 'col-6 col-md-3 col-xl-2';

interface IBook {
  book: {
    title: string;
    author: string;
    cover: string;
    publisher: string;
    itemId: number;
  };
  rankInfo?: number;
}

export function Book({ book, rankInfo }: IBook) {
  const [latestBooks, setLatestBooks] = useRecoilState(latestBookListState);
  const { title, author, cover, publisher, itemId } = book;
  const oneAuthor = useAuthors(author);
  const navigate = useNavigate();

  const saveLastestBook = () => {
    const len = latestBooks.length;
    const nowBook = { itemId, title, cover };
    const idx = latestBooks.findIndex(
      (latestBook) => latestBook.itemId === itemId
    );
    if (idx > -1) {
      setLatestBooks((prevArr) => {
        return [...prevArr.slice(0, idx), ...prevArr.slice(idx + 1), nowBook];
      });
    } else {
      setLatestBooks((prevArr) => {
        return len >= 10
          ? [...prevArr.slice(1), nowBook]
          : [...prevArr, nowBook];
      });
    }
  };

  const handleClickBook = () => {
    saveLastestBook();
    navigate(`/book/${itemId}`);
  };
  return (
    <BookContentContainer className={GRID_SIZE}>
      {rankInfo && (
        <>
          {rankInfo === 1 && <i className="rankCrown fa fa-crown" />}
          <Rank>{rankInfo}</Rank>
        </>
      )}
      <BookCover
        onClick={handleClickBook}
        title={title}
        className="bookCover"
        style={{ backgroundImage: `url(${cover})` }}
      />
      <BookTitle onClick={handleClickBook} title={title}>
        {title}
      </BookTitle>
      <BookInfo
        onClick={handleClickBook}
        title={`${oneAuthor} · ${publisher}`}
      >{`${oneAuthor} · ${publisher}`}</BookInfo>
      <HeartBlast book={book} />
    </BookContentContainer>
  );
}

export function BookLoader() {
  return (
    <BookContentContainer className={GRID_SIZE}>
      <BookCover className="loader">
        <ContentLoader
          speed={1}
          width={'100%'}
          height={'100%'}
          viewBox="0 0 220 360"
          backgroundColor="#ffffff"
          foregroundColor="#b3c3ea"
        >
          <rect x="0" y="350" rx="2" ry="2" width="300" height="10" />
          <rect x="0" y="330" rx="2" ry="2" width="140" height="10" />
          <rect x="0" y="0" rx="2" ry="2" width="400" height="310" />
        </ContentLoader>
      </BookCover>
    </BookContentContainer>
  );
}
