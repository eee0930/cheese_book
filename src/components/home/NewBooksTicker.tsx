import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { latestBookListState } from '../../atom';
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchNewestBookList,
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

const imgWidth = 10;

function BestSellerTicker({
  isKorea = true,
  cateNum = 0,
  maxSize = 10,
}: IBestSellers) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['tickerNewBooks', cateNum],
    () => fetchNewestBookList(isKorea, cateNum, maxSize),
    { retry: 0 }
  );
  const [latestBooks, setLatestBooks] = useRecoilState(latestBookListState);
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
      <TickerJumboTitle>New Books</TickerJumboTitle>
      <TickerSubTitle>
        <span>어서와! 따끈 따끈 신상 책</span>
        <TickerLinkSection>
          <Link to="/new">
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
