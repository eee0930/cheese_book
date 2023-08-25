import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IAladinBookItem, fetchBookListByQuery } from '../apis/aladinApi';
import { Loader } from '../utils/globalStyles';
import Book from '../components/mixins/Book';
import { styled } from 'styled-components';

export const ContentTitle = styled.div`
  margin: 1rem 0;
  padding: 0 5px;
  font-size: 1.2rem;
  span {
    font-size: 1.1em;
    color: ${(props) => props.theme.main1.main1};
  }
  i {
    width: 1.5em;
    position: relative;
    left: 5px;
    color: ${(props) => props.theme.main1.main1};
  }
  @media (min-width: 768px) {
    padding: 0 0.7rem;
  }
  @media (min-width: 1199.5px) {
    margin: 1.5rem 0;
    padding: 0 1rem;
  }
`;

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState<IAladinBookItem[]>();
  const [sortResult, setSortResult] = useState('');

  useEffect(() => {
    window.moveTo(0, 0);
    if (query) {
      getBookListByQuery(query);
    } else {
      setIsLoading(true);
    }
  }, [query]);

  const getBookListByQuery = async (q: string) => {
    const data = await fetchBookListByQuery(q, true, 40);
    setBookList(data?.item);
    setIsLoading(false);
  };

  const handleSort = (e: any) => {
    const sort = e.target.value;
    setSortResult(sort);
  };

  const sortBooks = (data: IAladinBookItem[]) => {
    const sortedBooks = data.sort((a, b) => {
      if (sortResult === 'Newest') {
        return (parseInt(b.pubDate.substring(0, 4)) -
          parseInt(a.pubDate.substring(0, 4))) as number;
      } else if (sortResult === 'Oldest') {
        return (parseInt(a.pubDate.substring(0, 4)) -
          parseInt(b.pubDate.substring(0, 4))) as number;
      } else {
        return 0;
      }
    });
    setBookList(sortedBooks);
  };

  return (
    <>
      {isLoading ? (
        <Loader>
          <div>
            <div></div>
            <div></div>
          </div>
        </Loader>
      ) : (
        <>
          <ContentTitle className="title">
            Search Result <span>{query}</span>
            <i className="fa fa-caret-down" />
          </ContentTitle>
          <div className="row">
            {bookList && bookList.map((book) => <Book book={book} />)}
          </div>
        </>
      )}
    </>
  );
}

export default SearchResults;
