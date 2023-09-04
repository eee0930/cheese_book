import { Link } from 'react-router-dom';
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
  const { title, author, cover, publisher, itemId } = book;
  const oneAuthor = useAuthors(author);

  return (
    <BookContentContainer className={GRID_SIZE}>
      {rankInfo && (
        <>
          {rankInfo === 1 && <i className="rankCrown fa fa-crown" />}
          <Rank>{rankInfo}</Rank>
        </>
      )}
      <Link to={`/book/${itemId}`}>
        <BookCover title={title} style={{ backgroundImage: `url(${cover})` }} />
        <BookTitle title={title}>{title}</BookTitle>
        <BookInfo
          title={`${oneAuthor} · ${publisher}`}
        >{`${oneAuthor} · ${publisher}`}</BookInfo>
      </Link>
    </BookContentContainer>
  );
}

export default Book;
