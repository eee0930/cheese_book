import { useEffect, useState } from 'react';
import { ISortBestSeller, getBestSeller } from '../services/nytService';
import { fetchBestSellerList } from '../apis/nytApi';

function BestSellerList() {
  const [isLoading, setIsLoading] = useState(true);
  const [bestSeller, setBestSeller] = useState<ISortBestSeller[]>([]);

  useEffect(() => {
    if (!bestSeller.length) {
      getBestSellerList();
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBestSellerList = async () => {
    const bestSellerList = await fetchBestSellerList();
    for (let i = 0; i < 10; i++) {
      const data = bestSellerList.results[i];
      const newData = await getBestSeller(data);
      setBestSeller((prev) => [...prev, newData]);
    }
  };

  return (
    <>
      {!isLoading && (
        <ul>
          {bestSeller.map((book) => (
            <li key={book.rank}>
              <div>
                <img src={book.img} alt={book.title} />
              </div>
              <div>
                {book.rank} {book.title}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default BestSellerList;
