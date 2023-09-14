import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import Color from 'color-thief-react';

import {
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';

const BannerContainer = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    padding-left: 0;
    margin-top: 1.5rem;
    padding-left: 0.2rem;
    margin-left: 0;
    margin-right: -1rem;
    margin-bottom: 5rem;
  }
  @media (min-width: 1199.5px) {
    padding-left: 0.5rem;
    margin-right: -2rem;
    margin-bottom: 6rem;
  }
`;
const BannerBackground = styled(motion.div)`
  width: 100%;
  height: 27vh;
  opacity: 0.7;
  background-size: auto 90%;
  background-position: left center;
  background-image: url(${process.env.PUBLIC_URL}/img/banner_twinkle.png);
  @media (min-width: 768px) {
    border-radius: 2rem 0 0 3px;
    margin-top: 5vh;
    height: 35vh;
  }
  @media (min-width: 991.5px) {
    border-radius: 3rem 0 0 3px;
    margin-top: 7vh;
    height: 38vh;
  }
  @media (min-width: 1199.5px) {
    margin-top: 10vh;
    height: 40vh;
  }
`;
const BookCoverContainer = styled(motion.div)`
  position: absolute;
  left: 8%;
  height: 30vh;
  cursor: pointer;
  &.small {
    left: 0;
    transform: scale(0.9) translateY(20%) rotateZ(-20deg);
  }
  @media (min-width: 768px) {
    height: 40vh;
  }
  @media (min-width: 991.5px) {
    height: 45vh;
  }
  @media (min-width: 1199.5px) {
    height: 50vh;
  }
`;
const BookCoverPerspect = styled.div`
  position: absolute;
  top: 12.5%;
  left: 7%;
  right: 0;
  height: 109%;
  width: 55%;
  z-index: 0;
  perspective: 1800px;
  @media (min-width: 768px) {
    top: 17%;
    left: 10%;
    right: 0;
    height: 104%;
    width: 55%;
  }
  @media (min-width: 1199.5px) {
    top: 18.5%;
    left: 11.5%;
    right: 0;
    height: 103%;
    width: 51.5%;
    perspective: 1700px;
  }
`;
const BookCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: yellow;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 102% 102%;
  box-shadow: inset 3px 0px 3px rgba(0, 0, 0, 0.2);
  transform: rotateZ(44.8deg) rotateY(-22deg) rotateX(-21deg) skew(6deg);
  @media (min-width: 768px) {
    transform: rotateZ(43deg) rotateY(-20deg) rotateX(-12deg) skew(9deg);
  }
  @media (min-width: 1199.5px) {
    border-radius: 7px;
    transform: rotateZ(44.8deg) rotateY(-7deg) rotateX(-10deg) skew(13deg);
  }
`;
const BannerBook = styled.img`
  position: relative;
  height: 88%;
  z-index: 3;
  @media (min-width: 768px) {
    height: 100%;
  }
`;
const BannerTitle = styled(motion.div)`
  position: absolute;
  font-family: ${(props) => props.theme.title};
  font-size: 6vmin;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 1px #000, 0 0 1px #000, 0 0 1px #000;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 50vh;
    text-align: right;
    width: 100%;
    left: unset;
    right: 1.5rem;
    font-size: 1.5rem;
    transform: translateY(20%);
  }
  @media (min-width: 991.5px) {
    width: 45vh;
    font-size: 1.8rem;
  }
  @media (min-width: 1199.5px) {
    width: 50vh;
    right: 2.5rem;
    font-size: 2rem;
  }
`;
const JumpBook = {
  initial: {
    top: '100%',
  },
  animate: {
    top: '1rem',
    transition: { type: 'spring', bounce: 0.3, delay: 0.3, duration: 0.7 },
  },
};
const JumpTitle = {
  initial: {
    top: '100%',
  },
  animate: {
    top: '50%',
    transition: { type: 'spring', bounce: 0.6, delay: 0.6, duration: 1 },
  },
};
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
