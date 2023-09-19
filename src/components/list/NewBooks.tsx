import { useQuery } from 'react-query';
import { IAladinRequestList, fetchNewestBookList } from '../../apis/aladinApi';
import { Book, BookLoader } from '../mixins/Book';

interface INewBooks {
  isKorea?: boolean;
  cateNum?: number;
  maxSize?: number;
}
function NewBooks({ isKorea = true, cateNum = 0, maxSize = 20 }: INewBooks) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['newBooks', cateNum],
    () => fetchNewestBookList(isKorea, cateNum, maxSize),
    { retry: 0 }
  );

  return (
    <div className="row">
      {isLoading ? (
        <>
          {new Array(12).fill(0).map((_, i) => (
            <BookLoader key={i} />
          ))}
        </>
      ) : (
        <>
          {data?.item?.map((book, i) => (
            <Book key={book.isbn} book={book} />
          ))}
        </>
      )}
    </div>
  );
}

export default NewBooks;
