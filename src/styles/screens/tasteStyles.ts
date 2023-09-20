import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const TasteTestIntro = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    max-width: 200px;
  }
`;
export const IntroImg = styled.div`
  width: 250px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const IntroMent = styled.div`
  width: 200px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 10px;
`;
export const TasteTestContainer = styled(motion.div)`
  width: 100%;
  //min-height: 90vh;
  margin: 3rem auto 0;
  @media (min-width: 911.5px) {
    width: 80%;
    height: 70vh;
    min-height: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
`;
export const testContainerVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

export const TasteTestResultContainer = styled.div`
  text-align: center;
`;
