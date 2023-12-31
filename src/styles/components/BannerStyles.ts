import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const BannerContainer = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 2rem;
  margin-top: -${(props) => props.theme.sideMenu.xs};
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    padding-left: 0;
    margin-top: 1.5rem;
    padding-left: 0.2rem;
    margin-left: 0;
    margin-right: -1rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 1199.5px) {
    padding-left: 0.5rem;
    margin-right: -2rem;
  }
`;
export const BannerBackground = styled(motion.div)`
  width: 100%;
  height: calc(27vh + ${(props) => props.theme.sideMenu.xs});
  opacity: 0.7;
  background-size: auto 90%;
  background-position: left center;
  background-image: url(${process.env.PUBLIC_URL}/img/banner_twinkle.png);
  transition: background-color 0.2s ease;
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
export const BookCoverContainer = styled(motion.div)`
  position: absolute;
  margin-top: ${(props) => props.theme.sideMenu.xs};
  left: 8%;
  height: 30vh;
  cursor: pointer;
  &.small {
    left: 0;
    transform: scale(0.9) translateY(20%) rotateZ(-20deg);
  }
  @media (min-width: 768px) {
    margin-top: 0;
    height: 40vh;
  }
  @media (min-width: 991.5px) {
    height: 45vh;
  }
  @media (min-width: 1199.5px) {
    height: 50vh;
  }
`;
export const BookCoverPerspect = styled.div`
  position: absolute;
  right: 0;
  z-index: 0;
  perspective: 1800px;
  &.style1 {
    top: 10%;
    left: 16%;
    height: 92.5%;
    width: 59%;
  }
  &.style2 {
    top: 12.5%;
    left: 7%;
    height: 109%;
    width: 55%;
  }
  @media (min-width: 768px) {
    right: 0;
    &.style1 {
      top: 10.5%;
      left: 16%;
      height: 105.5%;
      width: 59%;
    }
    &.style2 {
      top: 17%;
      left: 10%;
      height: 104%;
      width: 55%;
    }
  }
  @media (min-width: 1199.5px) {
    perspective: 1700px;
    right: 0;
    &.style1 {
      top: 10.5%;
      left: 16%;
      height: 105.5%;
      width: 59%;
    }
    &.style2 {
      top: 18.5%;
      left: 11.5%;
      height: 103%;
      width: 51.5%;
    }
  }
`;
export const BookCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: yellow;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 102% 102%;
  box-shadow: inset 3px 0px 3px rgba(0, 0, 0, 0.2);
  &.style1 {
    transform: rotateZ(37deg) rotateY(-13deg) rotateX(0deg) skew(2.5deg);
  }
  &.style2 {
    transform: rotateZ(44.8deg) rotateY(-22deg) rotateX(-21deg) skew(6deg);
  }
  @media (min-width: 768px) {
    &.style1 {
      transform: rotateZ(38deg) rotateY(-13deg) rotateX(0deg) skew(3.5deg);
    }
    &.style2 {
      transform: rotateZ(43deg) rotateY(-20deg) rotateX(-12deg) skew(9deg);
    }
  }
  @media (min-width: 1199.5px) {
    border-radius: 7px;
    &.style1 {
      transform: rotateZ(37deg) rotateY(-13deg) rotateX(0deg) skew(2.5deg);
    }
    &.style2 {
      transform: rotateZ(44.8deg) rotateY(-7deg) rotateX(-10deg) skew(13deg);
    }
  }
`;
export const BannerBook = styled.img`
  position: relative;
  height: 88%;
  z-index: 3;
  @media (min-width: 768px) {
    height: 100%;
  }
`;
export const BannerTitle = styled(motion.div)`
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
    width: 50vh;
    font-size: 1.8rem;
  }
  @media (min-width: 1199.5px) {
    right: 5rem;
    font-size: 2rem;
  }
`;
export const BannerPagination = styled.div`
  display: none;
  position: absolute;
  top: 0rem;
  right: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 40px;
  z-index: 10;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 991.5px) {
    right: 1.5rem;
  }
  @media (min-width: 1199.5px) {
    top: 3rem;
    right: 5rem;
  }
`;
export const BannerBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.4);
`;
export const BannerPages = styled.div`
  width: 150px;
  display: grid;
  text-align: center;
  font-size: 0.5rem;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-content: center;
`;
export const PageDots = styled(motion.div)`
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 0 auto;
  transition: width 0.4s ease-in-out, background-color 0.4s ease;
  &.active {
    width: 20px;
    background-color: ${(props) => props.theme.main1.main2};
  }
`;
export const jumpBook = {
  initial: {
    top: '100%',
  },
  animate: {
    top: '1rem',
    transition: { type: 'spring', bounce: 0.3, delay: 0.3, duration: 0.7 },
  },
};

export const jumpBookVariants = {
  hidden: {
    top: '100%',
  },
  visible: {
    top: '1rem',
    transition: { type: 'spring', bounce: 0.3, delay: 0.3, duration: 0.7 },
  },
  exit: {
    top: '100%',
  },
};
export const jumpTitleVariants = {
  initial: { top: '100%' },
  animate: {
    top: '50%',
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 0.2,
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
  exit: { top: '100%' },
};
export const jumpTitle = {
  initial: {
    x: '100%',
  },
  animate: {
    x: '0%',
  },
  exit: {
    x: '100%',
  },
};
