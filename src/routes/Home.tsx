import { useState } from 'react';
import { ISearchResult, fetchVolumeListByQuery } from '../apis/volumeApi';
import BestSeller from '../components/BestSellerList';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState<ISearchResult>();
  const [searchValue, setSearchValue] = useState('');

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
        <BestSeller />
      </div>
    </div>
  );
}

export default Home;
