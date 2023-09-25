import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const TickerContainer = styled(motion.div)`
  background-color: #fff;
  padding: 1rem 0;
  height: 451px;
  transition: background-color 0.4s ease;
  overflow: hidden;
  @media (min-width: 991.5px) {
    height: 500px;
  }
`;
export const TickerJumboTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  letter-spacing: -1px;
  margin: 2rem 0 0;
  color: inherit;
  font-family: ${(props) => props.theme.title};
  @media (min-width: 991.5px) {
    font-size: 2.5rem;
    margin: 3rem 0 0;
  }
`;
export const TickerSubTitle = styled.h5`
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem 0 3rem;
  line-height: 1.2;
  color: inherit;
  font-family: ${(props) => props.theme.title};
  @media (min-width: 991.5px) {
    font-size: 1.5rem;
    margin: 1rem 0 4rem;
  }
`;
export const TickerLinkSection = styled.div`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: ${(props) => props.theme.main1.main1};
  @media (min-width: 991.5px) {
    font-size: 1.2rem;
  }
`;
export const TickerWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const TickerCollection = styled(motion.div)`
  display: inline-flex;
`;

export const TickerItemCover = styled.div`
  margin: 0 0.5rem;
  height: 100%;
  aspect-ratio: 10 / 15;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
  &:hover {
    background-size: 110% 110%;
  }
`;
export const TickerItem = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
export const ItemTitle = styled.div`
  font-size: 15px;
  color: #fff;
  padding: 1rem 0.5rem;
  text-align: center;
`;
type ICuston = {
  imgWidth: number;
  len: number;
};
export const tickerVariants = {
  initial: { x: 0 },
  animate: ({ imgWidth, len }: ICuston) => {
    const width = imgWidth * len * -1 - len;
    return {
      x: width + 'rem',
      transition: { duration: 30, ease: 'linear', repeat: Infinity },
    };
  },
};

export const TickerOneCollection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3.5rem;
  left: 0;
  right: 0;
  transition: background-color 0.3s ease-in-out;
`;
export const SideItem = styled(motion.div)`
  width: 120px;
  margin: 0 0.1rem;
  @media (min-width: 991.5px) {
    margin: 0 0.5rem;
  }
`;
export const MiddleItem = styled(motion.div)`
  width: 120px;
  margin: 0 0.1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  @media (min-width: 991.5px) {
    margin: 0 0.5rem;
  }
  @media (min-width: 1199.5px) {
    margin: 0 1.5rem;
  }
`;
export const TickerOneItemCover = styled.div`
  width: 100%;
  aspect-ratio: 10 / 14;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out;
  &:hover {
    background-size: 110% 110%;
  }
`;

export const tickerOneVariants = {
  initial: { x: 100 },
  animate: {
    x: 0,
  },
  end: {
    x: -100,
  },
};

export const hideItem = {
  initial: { scale: 1.3 },
  animate: {
    scale: 1,
  },
  end: {
    scale: 0.8,
  },
};
export const middleItem = {
  initial: { scale: 1 },
  animate: {
    scale: 1.3,
  },
  end: {
    scale: 1,
  },
};
export const biggerItem = {
  initial: { scale: 0.8 },
  animate: {
    scale: 1,
  },
  end: {
    scale: 1.3,
  },
};
