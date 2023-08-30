import { useQuery } from 'react-query';
import { IAladinRequestList, fetchBestSellerBookList } from '../apis/aladinApi';
// components
import Book from './mixins/Book';

interface IBestSellers {
  isHome?: boolean;
  cateNum?: number;
  maxSize?: number;
}

function BestSellers({ isHome, cateNum, maxSize }: IBestSellers) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    'bestSellers',
    () =>
      fetchBestSellerBookList(
        isHome ? isHome : true,
        cateNum ? cateNum : 0,
        maxSize ? maxSize : 20
      ),
    { retry: 0 }
  );

  return (
    <>
      {!isLoading && (
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
