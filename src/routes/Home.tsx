import { useState } from 'react';
import { ISearchResult, fetchVolumeListByQuery } from '../apis/volumeApi';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<ISearchResult>();
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValue = (e: any) => setSearchValue(e.target.value);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = (await fetchVolumeListByQuery(
      searchValue,
      true
    )) as ISearchResult;
    setSearchResult(data);
    setIsLoading(true);
    console.log('data', data);
    console.log('searchResult', searchResult);
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
      {isLoading && (
        <div>
          <ul>
            {/* {searchResult?.items?.map((volume) => {
              <li>{volume?.volumeInfo?.title}</li>;
            })} */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
