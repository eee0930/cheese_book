import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const BookImagesGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  max-width: 80vw;
  height: 100%;
  max-height: 80vh;
  justify-content: center;
  align-items: center;
`;

export const CoverSideImage = styled(motion.img)`
  min-height: 50%;
  max-width: 45vw;
  max-height: 80vh;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;
`;

export const nexPageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};
