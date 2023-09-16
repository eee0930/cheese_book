import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Color from 'color-thief-react';
import { bannerMent } from '../../data/cheeseMainData';
import {
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';
import {
  BannerBackground,
  BannerBook,
  BannerBtn,
  BannerContainer,
  BannerPages,
  BannerPagination,
  BannerTitle,
  BookCover,
  BookCoverContainer,
  BookCoverPerspect,
  JumpBookVariants,
  JumpTitle,
  JumpTitleVariants,
} from '../../styles/components/bannerStyles';
import { useRecoilState } from 'recoil';
import { latestBookListState } from '../../atom';

const BANNER_LEN = bannerMent.length;

function Banner() {
  const [latestBooks, setLatestBooks] = useRecoilState(latestBookListState);
  const { data, isLoading } = useQuery<IAladinRequestList>(
    'bestSellersBanner',
    () => fetchBestSellerBookList(true, 0, BANNER_LEN)
  );
  const navigate = useNavigate();
  const handleClickBanner = (itemId: number, title: string, cover: string) => {
    saveLastestBook(itemId, title, cover);
    navigate(`/book/${itemId}`);
  };
  const [index, setIndex] = useState(0);
  const [bannerTimer, setBannerTimer] =
    useState<ReturnType<typeof setTimeout>>();

  const handlePrevIdx = () =>
    setIndex((prev) => (prev === 0 ? BANNER_LEN - 1 : prev - 1));
  const handleNextIdx = () =>
    setIndex((prev) => (prev === BANNER_LEN - 1 ? 0 : prev + 1));

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

  useEffect(() => {
    if (bannerTimer) {
      clearTimeout(bannerTimer);
    }
    const bannerTimeout = setTimeout(() => {
      setIndex((prev) => (prev === BANNER_LEN - 1 ? 0 : prev + 1));
    }, 5000);
    setBannerTimer(bannerTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <BannerContainer>
      {!isLoading && (
        <>
          <Color
            src={`${data?.item[index].cover}`}
            format={'hex'}
            crossOrigin={'anonymous'}
          >
            {({ data }) => (
              <>
                <BannerBackground style={{ backgroundColor: data }} />
                <BannerPagination>
                  <BannerBtn onClick={handlePrevIdx} style={{ color: data }}>
                    <i className="fa-solid fa-angle-left" />
                  </BannerBtn>
                  <BannerPages>
                    {new Array(BANNER_LEN).fill(0).map((_, i) => {
                      if (i === index) {
                        return (
                          <i
                            key={i}
                            onClick={() => setIndex(i)}
                            className="fa-solid fa-circle active"
                          />
                        );
                      } else {
                        return (
                          <i
                            key={i}
                            onClick={() => setIndex(i)}
                            className="fa-solid fa-circle"
                          />
                        );
                      }
                    })}
                  </BannerPages>
                  <BannerBtn onClick={handleNextIdx} style={{ color: data }}>
                    <i className="fa-solid fa-angle-right" />
                  </BannerBtn>
                </BannerPagination>
              </>
            )}
          </Color>
          <AnimatePresence>
            <BookCoverContainer
              variants={JumpBookVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={'book' + index}
              onClick={() =>
                handleClickBanner(
                  data?.item[index]?.itemId as number,
                  data?.item[index]?.title as string,
                  data?.item[index]?.cover as string
                )
              }
            >
              <BookCoverPerspect>
                <BookCover
                  style={{
                    backgroundImage: `url(${data?.item[index].cover})`,
                  }}
                />
              </BookCoverPerspect>
              <BannerBook
                alt="cheese book"
                src={`${process.env.PUBLIC_URL}/img/banner_book2.png`}
              />
            </BookCoverContainer>
            <BannerTitle
              variants={JumpTitleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={'title' + index}
              onClick={() =>
                handleClickBanner(
                  data?.item[index]?.itemId as number,
                  data?.item[index]?.title as string,
                  data?.item[index]?.cover as string
                )
              }
            >
              {bannerMent[index].map((ment, i) => (
                <motion.div variants={JumpTitle} key={i}>
                  {ment}
                </motion.div>
              ))}
            </BannerTitle>
          </AnimatePresence>
        </>
      )}
    </BannerContainer>
  );
}

export default Banner;
