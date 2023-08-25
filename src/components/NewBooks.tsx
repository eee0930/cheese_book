import { useEffect, useState } from 'react';
import { IAladinBookItem, fetchNewestBookList } from '../apis/aladinApi';

function NewBooks() {
  const [isLoading, setIsLoading] = useState(true);
  const [newestSellerList, setNewestSellerList] = useState<IAladinBookItem[]>(
    []
  );

  useEffect(() => {
    if (!newestSellerList.length) {
      getNewestSellerList();
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNewestSellerList = async () => {
    const fetchedNewestSellerList = await fetchNewestBookList(true, 20);
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

export default NewBooks;
