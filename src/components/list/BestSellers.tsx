import { useQuery } from 'react-query';
import {
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';
// components
import { Book, BookLoader } from '../mixins/Book';

interface IBestSellers {
  isKorea?: boolean;
  cateNum?: number;
  maxSize?: number;
}

function BestSellers({
  isKorea = true,
  cateNum = 0,
  maxSize = 20,
}: IBestSellers) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['bestSellers', cateNum],
    () => fetchBestSellerBookList(isKorea, cateNum, maxSize),
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
            <Book key={book.isbn} rankInfo={i + 1} book={book} />
          ))}
        </>
      )}
    </div>
  );
}

export default BestSellers;
