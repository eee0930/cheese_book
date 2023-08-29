import { useNavigate } from 'react-router-dom';
import { useAuthors } from '../../hooks/redesignData';
// styles
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
    isbn: string;
    isbn13: string;
  };
}

function Book({ book }: IBook) {
  const { title, author, cover, publisher, isbn } = book;
  const oneAuthor = useAuthors(author);
  const navigate = useNavigate();

  const handleClickBox = () => {
    navigate(`/book/${isbn}`);
  };

  return (
    <BookContentContainer
      onClick={handleClickBox}
      className="col-6 col-md-3 col-xl-2"
    >
      <BookCover title={title} style={{ backgroundImage: `url(${cover})` }} />
      <BookTitle title={title}>{title}</BookTitle>
      <BookInfo
        title={`${oneAuthor} · ${publisher}`}
      >{`${oneAuthor} · ${publisher}`}</BookInfo>
    </BookContentContainer>
  );
}

export default Book;
