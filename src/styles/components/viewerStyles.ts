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
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  &.right {
    transform-origin: left center;
  }
`;

export const nexPageVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const pageVariants = {
  initial: {
    rotateY: 0,
  },
  animate: {
    rotateY: -180,
    transition: {
      duration: 0.5,
    },
  },
};
