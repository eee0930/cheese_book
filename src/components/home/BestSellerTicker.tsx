import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { latestBookListState } from '../../atom';
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';
// components
import { Ticker } from '../Ticker';
import {
  ItemTitle,
  TickerContainer,
  TickerItem,
  TickerItemCover,
  TickerJumboTitle,
  TickerLinkSection,
  TickerSubTitle,
} from '../../styles/components/tickerStyles';

interface IBestSellers {
  isKorea?: boolean;
  cateNum?: number;
  maxSize?: number;
}

interface IClickBook {
  itemId: number;
  title: string;
  cover: string;
}

function BestSellerTicker({
  isKorea = true,
  cateNum = 0,
  maxSize = 10,
}: IBestSellers) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['tickerBestSellers', cateNum],
    () => fetchBestSellerBookList(isKorea, cateNum, maxSize),
    { retry: 0 }
  );
  const [latestBooks, setLatestBooks] = useRecoilState(latestBookListState);
  const imgWidth = 10;
  let bookDatas;
  if (!isLoading) {
    bookDatas = data?.item as IAladinBookItem[];
  }
  const navigate = useNavigate();

  const handleClickBook = ({ itemId, title, cover }: IClickBook) => {
    saveLastestBook(itemId, title, cover);
    navigate(`/book/${itemId}`);
  };
  const saveLastestBook = (itemId: number, title: string, cover: string) => {
    const len = latestBooks.length;
    const nowBook = { itemId, title, cover };
    const idx = latestBooks.findIndex(
      (latestBook) => latestBook.itemId === itemId
    );
    if (idx > -1) {
      setLatestBooks((prevArr) => {
        return [...prevArr.slice(0, idx), ...prevArr.slice(idx + 1), nowBook];
      });
    } else {
      setLatestBooks((prevArr) => {
        return len >= 10
          ? [...prevArr.slice(1), nowBook]
          : [...prevArr, nowBook];
      });
    }
  };
  return (
    <TickerContainer>
      <TickerJumboTitle>Best Sellers</TickerJumboTitle>
      <TickerSubTitle>
        <span>급상승! 많이 보고 있는 책</span>
        <TickerLinkSection>
          <Link to="/best">
            더 보기 <i className="fa-solid fa-plus" />
          </Link>
        </TickerLinkSection>
      </TickerSubTitle>
      {bookDatas && (
        <Ticker width={imgWidth}>
          {bookDatas?.map((book, i) => (
            <TickerItemCover
              key={book.isbn}
              onClick={() => handleClickBook(book)}
              style={{
                width: `${imgWidth}rem`,
                backgroundImage: `url(${book.cover})`,
              }}
            >
              <TickerItem>
                <ItemTitle>{book.title.split('-')[0]}</ItemTitle>
              </TickerItem>
            </TickerItemCover>
          ))}
        </Ticker>
      )}
    </TickerContainer>
  );
}

export default BestSellerTicker;
