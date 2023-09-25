import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBlogBestBookList,
} from '../../apis/aladinApi';
// components
import { OneTicker } from '../Ticker';
import {
  ItemTitle,
  TickerContainer,
  TickerItem,
  TickerItemCover,
  TickerJumboTitle,
  TickerSubTitle,
} from '../../styles/components/tickerStyles';
interface IRecomend {
  isKorea?: boolean;
  cateNum?: number;
  maxSize?: number;
}
function CheeseRecommend({
  isKorea = true,
  cateNum = 0,
  maxSize = 10,
}: IRecomend) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['tickerNewBooks', cateNum],
    () => fetchBlogBestBookList(isKorea, cateNum, maxSize),
    { retry: 0 }
  );
  const imgWidth = 10;
  let bookDatas;
  if (!isLoading) {
    bookDatas = data?.item as IAladinBookItem[];
  }
  return (
    <TickerContainer>
      <TickerJumboTitle>Cheese's Recommend</TickerJumboTitle>
      <TickerSubTitle>
        <span>
          집중집중! <br />
          치즈북이 추천하는 이주의 도서!
        </span>
      </TickerSubTitle>
      {bookDatas && (
        <OneTicker width={imgWidth}>
          {bookDatas?.map((book, i) => (
            <TickerItemCover
              key={book.isbn}
              style={{
                width: `${imgWidth}rem`,
                backgroundImage: `url(${book.cover})`,
              }}
            >
              <Link to={`/book/${book.itemId}`}>
                <TickerItem>
                  <ItemTitle>{book.title.split('-')[0]}</ItemTitle>
                </TickerItem>
              </Link>
            </TickerItemCover>
          ))}
        </OneTicker>
      )}
    </TickerContainer>
  );
}

export default CheeseRecommend;
