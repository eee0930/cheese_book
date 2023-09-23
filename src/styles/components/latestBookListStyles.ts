import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const LatestBookBtnCover = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 45px;
  height: 45px;
  z-index: 50;
  @media (min-width: 991.5px) {
    width: 50px;
    height: 50px;
    bottom: 1.5rem;
    right: 2rem;
  }
  @media (min-width: 1199.5px) {
    width: 55px;
    height: 55px;
    bottom: 2rem;
    right: 2.5rem;
    &:hover {
      -webkit-animation: jelly 0.3s ease;
      animation: jelly 0.3s ease;
    }
  }
`;
export const CountLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 11px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  padding: 4px 2px 0 2px;
  background-color: ${(props) => props.theme.main1.main1};
`;
export const LatestBookBtnContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: ${(props) => props.theme.boxLine.sm};
  @media (min-width: 991.5px) {
    border: ${(props) => props.theme.boxLine.md};
  }
  @media (min-width: 1199.5px) {
    border: ${(props) => props.theme.boxLine.lg};
  }
`;
export const LatestBookBtnImgCover = styled.div`
  width: 100%;
  height: 90px;
  transition: transform 0.3s ease-in-out;
  &.active {
    transform: translateY(calc(-50% + 2px));
  }
  @media (min-width: 991.5px) {
    height: 100px;
    &.active {
      transform: translateY(calc(-50% + 4px));
    }
  }
  @media (min-width: 1199.5px) {
    height: 110px;
    &.active {
      transform: translateY(calc(-50% + 6px));
    }
  }
`;
export const LatestBookBtnImg = styled.div`
  width: 100%;
  height: 43px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: background-image 0.3s ease;
  &.empty {
    background-color: #fff;
    background-position: bottom center;
    background-size: 80% 80%;
    cursor: default;
  }
  @media (min-width: 991.5px) {
    height: 46px;
  }
  @media (min-width: 1199.5px) {
    height: 49px;
  }
`;
export const LatestBookCloseBtn = styled.button`
  width: 100%;
  height: 43px;
  background-color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.black.darker};
  font-size: 1.5rem;
  @media (min-width: 991.5px) {
    height: 46px;
  }
  @media (min-width: 1199.5px) {
    height: 49px;
  }
`;

export const LatestBookListSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 40;
`;
export const LatestBookOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`;
export const LatestBookListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  @media (min-width: 991.5px) {
    top: 1rem;
    left: unset;
    right: 1.5rem;
    bottom: 1rem;
    width: calc(50vw - 1rem);
    height: calc(100vh - 2rem);
  }
  @media (min-width: 1199.5px) {
    top: 1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    width: calc(30vw - 3rem);
    height: calc(100vh - 3rem);
  }
`;
export const LatestBookListCover = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #f5f5f7;
  border: ${(props) => props.theme.boxLine.sm};
  padding: ${(props) => props.theme.sideMenu.xs} 1rem 1rem;
  @media (min-width: 991.5px) {
    padding: 1rem;
    border: ${(props) => props.theme.boxLine.md};
  }
  @media (min-width: 1199.5px) {
    padding: 1.5rem;
    border: ${(props) => props.theme.boxLine.lg};
  }
`;
export const Title = styled.h3`
  margin: 0.5rem 0;
  font-family: ${(props) => props.theme.title};
  font-size: 1.5rem;
  color: ${(props) => props.theme.black.darker};
`;
export const BookListInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1199.5px) {
    margin-top: 1.5rem;
  }
`;
export const BookInfoCount = styled.div`
  padding-left: 5px;
  font-size: 1rem;
  font-weight: 600;
`;
export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 0.9rem;
  color: ${(props) => props.theme.black.lighter};
`;
export const BookListContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 1rem;
  @media (min-width: 1199.5px) {
    margin-top: 1.5rem;
  }
`;
export const BookListUl = styled.ul`
  list-style: none;
`;
export const BookList = styled(motion.li)`
  padding: 0.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  @media (min-width: 991.5px) {
    margin-bottom: 1rem;
    border-radius: 10px;
  }
`;
export const DeleteOneBtn = styled.button`
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 50px;
  height: 50px;
  font-size: 16px;
  z-index: 1;
`;
export const BookCover = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 991.5px) {
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }
  @media (min-width: 1199.5px) {
    width: 80px;
    height: 80px;
    border-radius: 15px;
  }
`;
export const BookTitle = styled.div`
  padding-left: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  max-width: calc(100% - 60px - 1rem);
  @media (min-width: 991.5px) {
    max-width: calc(100% - 70px - 1rem);
  }
  @media (min-width: 1199.5px) {
    max-width: calc(100% - 80px - 1rem);
  }
`;
export const slideUp = {
  initial: {
    x: 100,
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.2,
    },
  },
};

export const slideLeft = {
  initial: {
    x: '0',
  },
  animate: {
    x: '200%',
    transition: { delay: 0.1, duration: 0.3 },
  },
};
