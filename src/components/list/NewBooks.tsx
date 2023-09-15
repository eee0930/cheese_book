import { useQuery } from 'react-query';
import { IAladinRequestList, fetchNewestBookList } from '../../apis/aladinApi';
import Book from '../mixins/Book';

interface INewBooks {
  isHome?: boolean;
  cateNum?: number;
  maxSize?: number;
}
function NewBooks({ isHome = true, cateNum = 0, maxSize = 20 }: INewBooks) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['newBooks', cateNum],
    () => fetchNewestBookList(isHome, cateNum, maxSize),
    { retry: 0 }
  );

  return (
    <>
      {!isLoading && (
        <div className="row">
          {data?.item?.map((book) => (
            <Book key={book.isbn} book={book} />
          ))}
        </div>
      )}
    </>
  );
}

export default NewBooks;
