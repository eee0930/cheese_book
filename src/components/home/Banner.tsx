import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Color from 'color-thief-react';

import {
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';
import {
  BannerBackground,
  BannerBook,
  BannerContainer,
  BannerTitle,
  BookCover,
  BookCoverContainer,
  BookCoverPerspect,
  JumpBook,
  JumpTitle,
} from '../../styles/components/bannerStyles';

function Banner() {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    'bestSellersBanner',
    () => fetchBestSellerBookList(true, 0, 3)
  );
  const navigate = useNavigate();
  const handleClickBanner = (id: number) => navigate(`/book/${id}`);
  return (
    <BannerContainer>
      {!isLoading && (
        <>
          <Color
            src={`${data?.item[0].cover}`}
            format={'hex'}
            crossOrigin={'anonymous'}
          >
            {({ data }) => (
              <BannerBackground
                style={{ backgroundColor: data, color: data }}
              />
            )}
          </Color>
          <BookCoverContainer
            variants={JumpBook}
            initial="initial"
            animate="animate"
            onClick={() => handleClickBanner(data?.item[0]?.itemId as number)}
          >
            <BookCoverPerspect>
              <BookCover
                style={{
                  backgroundImage: `url(${data?.item[0].cover})`,
                }}
              />
            </BookCoverPerspect>
            <BannerBook
              alt="cheese book"
              src={`${process.env.PUBLIC_URL}/img/banner_book2.png`}
            />
          </BookCoverContainer>
          <BannerTitle
            variants={JumpTitle}
            initial="initial"
            animate="animate"
            onClick={() => handleClickBanner(data?.item[0]?.itemId as number)}
          >
            CHEESE BOOK <br /> 급상승, 많이 보고 있는 책
          </BannerTitle>
        </>
      )}
    </BannerContainer>
  );
}

export default Banner;
