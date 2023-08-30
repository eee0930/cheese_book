import { useQuery } from 'react-query';
import { IAladinRequestList, fetchNewestBookList } from '../apis/aladinApi';
import Book from './mixins/Book';

interface INewBooks {
  isHome?: boolean;
  maxSize?: number;
}
function NewBooks({ isHome, maxSize }: INewBooks) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    'newBooks',
    () => fetchNewestBookList(isHome ? isHome : true, maxSize ? maxSize : 20),
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
