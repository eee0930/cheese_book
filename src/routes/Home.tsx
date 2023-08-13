import { useEffect, useState } from 'react';
import { ISearchResult, fetchVolumeListByQuery } from '../apis/volumeApi';
import { fetchBestSellerList } from '../apis/nytApi';
import { ISortBestSeller, getBestSellerList } from '../services/nytService';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [searchResult, setSearchResult] = useState<ISearchResult>();
  const [bestSeller, setBestSeller] = useState<ISortBestSeller[]>();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getBestSeller();
  }, []);

  const handleSearchValue = (e: any) => setSearchValue(e.target.value);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = (await fetchVolumeListByQuery(
      searchValue,
      true
    )) as ISearchResult;
    setSearchResult(data);
    setIsLoading(false);
  };
  const getBestSeller = async () => {
    const data = await fetchBestSellerList();
    const newData = (await getBestSellerList(data)) as ISortBestSeller[];
    setBestSeller(newData);
    setIsLoading2(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="search"
            value={searchValue}
            onChange={handleSearchValue}
          />
        </div>
        <div>
          <button>search</button>
        </div>
      </form>
      {!isLoading && (
        <div>
          <ul>
            {searchResult?.items?.map((volume) => (
              <li key={volume.id}>{volume?.volumeInfo?.title}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Best Seller</h3>
        <div>
          {!isLoading2 &&
            bestSeller?.map((book, i) => {
              return (
                <div key={i}>
                  <div>{book?.rank}</div>
                  <div>{book?.img}</div>
                  <div>{book?.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
