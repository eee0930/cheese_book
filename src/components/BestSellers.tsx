import { useEffect, useState } from 'react';
import { IAladinBookItem, fetchBestSellerBookList } from '../apis/aladinApi';
// components
import Book from './mixins/Book';

interface IBestSellers {
  isHome: boolean;
  cateNum?: number;
  maxSize?: number;
}

function BestSellers({ isHome, cateNum, maxSize }: IBestSellers) {
  const [isLoading, setIsLoading] = useState(true);
  const [bestSellerList, setBestSellerList] = useState<IAladinBookItem[]>();

  useEffect(() => {
    if (!bestSellerList) {
      let categoryNum = 0;
      let resultSize = 20;
      if (cateNum) {
        categoryNum = cateNum;
      }
      if (maxSize) {
        resultSize = maxSize;
      }
      getBestSellerList(categoryNum, resultSize);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBestSellerList = async (categoryNum: number, resultSize: number) => {
    const fetchedbestSellerList = await fetchBestSellerBookList(
      isHome,
      categoryNum,
      resultSize
    );
    setBestSellerList(fetchedbestSellerList?.item);
  };

  return (
    <>
      {!isLoading && (
        <div className="row">
          {bestSellerList?.map((book) => (
            <Book key={book.isbn} book={book} />
          ))}
        </div>
      )}
    </>
  );
}

export default BestSellers;
