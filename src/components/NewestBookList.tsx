import { useEffect, useState } from 'react';
import { IBookItem, fetchNewestBookList } from '../apis/aladinApi';

function NewestSellerList() {
  const [isLoading, setIsLoading] = useState(true);
  const [newestSellerList, setNewestSellerList] = useState<IBookItem[]>([]);

  useEffect(() => {
    if (!newestSellerList.length) {
      getNewestSellerList();
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNewestSellerList = async () => {
    const fetchedNewestSellerList = await fetchNewestBookList(true);
    setNewestSellerList(fetchedNewestSellerList?.item);
  };

  return (
    <>
      {!isLoading && (
        <ul>
          {newestSellerList?.map((book, i) => (
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

export default NewestSellerList;
