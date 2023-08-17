import { useState } from 'react';
import {
  ISearchResult,
  IVolume,
  fetchVolumeListByQuery,
} from '../apis/volumeApi';
import BestSeller from '../components/BestSellerList';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState<IVolume[]>();
  const [searchField, setSearchField] = useState('');
  const [sortResult, setSortResult] = useState('');

  const handleSearch = (e: any) => setSearchField(e.target.value);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = (await fetchVolumeListByQuery(
      searchField,
      true
    )) as ISearchResult;
    setSearchResult(data?.items);
    setIsLoading(false);
  };
  const handleSort = (e: any) => {
    const sort = e.target.value;
    setSortResult(sort);
  };
  const cleanData = (data: IVolume[]) => {
    const cleanedData = data.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo['publishedDate'] = '0000';
      } else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo['imageLinks'] = {
          thumbnail: process.env.PUBLIC_URL + '/img/default_profile.jpg',
        };
      }
      return book;
    });
    return cleanedData;
  };
  const sortBooks = (data: IVolume[]) => {
    const sortedBooks = data.sort((a, b) => {
      if (sortResult === 'Newest') {
        return (parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4))) as number;
      } else if (sortResult === 'Oldest') {
        return (parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4))) as number;
      } else {
        return 0;
      }
    });
    setSearchResult(sortedBooks);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="search" value={searchField} onChange={handleSearch} />
        </div>
        <div>
          <button>search</button>
        </div>
      </form>
      {!isLoading && (
        <div>
          <ul>
            {searchResult?.map((volume) => (
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
