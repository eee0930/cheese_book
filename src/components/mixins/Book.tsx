import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { latestBookListState } from '../../atom';

import { useAuthors } from '../../hooks/redesignData';
// styles
import {
  BookContentContainer,
  BookCover,
  BookInfo,
  BookTitle,
  Rank,
} from '../../styles/components/bookStyles';

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

function Book({ book, rankInfo }: IBook) {
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
    console.log(idx);
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
    <BookContentContainer className={GRID_SIZE} onClick={handleClickBook}>
      {rankInfo && (
        <>
          {rankInfo === 1 && <i className="rankCrown fa fa-crown" />}
          <Rank>{rankInfo}</Rank>
        </>
      )}
      <BookCover title={title} style={{ backgroundImage: `url(${cover})` }} />
      <BookTitle title={title}>{title}</BookTitle>
      <BookInfo
        title={`${oneAuthor} · ${publisher}`}
      >{`${oneAuthor} · ${publisher}`}</BookInfo>
    </BookContentContainer>
  );
}

export default Book;
