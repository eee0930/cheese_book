import { Link } from 'react-router-dom';
import { useAuthors } from '../../hooks/redesignData';
import {
  BookContentContainer,
  BookCover,
  BookInfo,
  BookTitle,
} from '../../utils/components/bookStyles';

interface IBook {
  book: {
    title: string;
    author: string;
    cover: string;
    publisher: string;
    isbn13: string;
  };
}
function Book({ book }: IBook) {
  const author = useAuthors(book.author);
  return (
    <BookContentContainer className="col-6 col-md-3 col-xl">
      <Link to={`/book/${book.isbn13}`}>
        <BookCover style={{ backgroundImage: `url(${book.cover})` }} />
        <BookTitle>{book.title}</BookTitle>
        <BookInfo>{`${author} · ${book.publisher}`}</BookInfo>
      </Link>
    </BookContentContainer>
  );
}

export default Book;
