import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const TickerContainer = styled.div`
  background-color: #fff;
  padding: 1rem 0;
  height: 451px;
  @media (min-width: 991.5px) {
    height: 500px;
  }
  @media (min-width: 1199.5px) {
    height: 535px;
  }
`;
export const TickerJumboTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0 0;
  font-family: ${(props) => props.theme.title};
  color: ${(props) => props.theme.black.darker};
  @media (min-width: 991.5px) {
    font-size: 2.5rem;
    margin: 3rem 0 0;
  }
`;
export const TickerSubTitle = styled.h5`
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem 0 3rem;
  line-height: 2;
  font-family: ${(props) => props.theme.title};
  color: ${(props) => props.theme.black.darker};
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
  //height: 300px;
  overflow: hidden;
  //white-space: nowrap;
  //height: 3.5rem;
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
  font-size: 16px;
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
