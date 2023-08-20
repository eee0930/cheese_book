import { useEffect, useState } from 'react';
import { IBookItem, fetchBestSellerBookList } from '../apis/aladinApi';

function BestSellerList() {
  const [isLoading, setIsLoading] = useState(true);
  const [bestSellerList, setBestSellerList] = useState<IBookItem[]>([]);

  useEffect(() => {
    if (!bestSellerList.length) {
      getBestSellerList();
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBestSellerList = async () => {
    const fetchedbestSellerList = await fetchBestSellerBookList(true, 0);
    setBestSellerList(fetchedbestSellerList?.item);
  };

  return (
    <>
      {!isLoading && (
        <ul>
          {bestSellerList?.map((book, i) => (
            <li key={i}>
              <div>
                <img src={book.cover} alt={book.title} />
              </div>
              <div>
                {i + 1} {book.title} {book.adult && 'YES'}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default BestSellerList;
