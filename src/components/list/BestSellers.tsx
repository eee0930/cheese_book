import { useQuery } from 'react-query';
import {
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';
// components
import { Book, BookLoader } from '../mixins/Book';

interface IBestSellers {
  isHome?: boolean;
  cateNum?: number;
  maxSize?: number;
}

function BestSellers({
  isHome = true,
  cateNum = 0,
  maxSize = 20,
}: IBestSellers) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['bestSellers', cateNum ? cateNum : 0],
    () => fetchBestSellerBookList(isHome, cateNum, maxSize),
    { retry: 0 }
  );

  return (
    <>
      {isLoading ? (
        <div className="row">
          {new Array(12).fill(0).map((_, i) => (
            <BookLoader key={i} />
          ))}
        </div>
      ) : (
        <div className="row">
          {data?.item?.map((book, i) => (
            <Book key={book.isbn} rankInfo={i + 1} book={book} />
          ))}
        </div>
      )}
    </>
  );
}

export default BestSellers;
