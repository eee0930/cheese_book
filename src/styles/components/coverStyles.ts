import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const BookContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const BookImagesCovers = styled(motion.div)`
  display: inline-block;
  position: relative;
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  &:hover {
    transform: perspective(1800px) rotateY(45deg);
  }
  &:hover > div > img {
    transform: perspective(400px) rotateY(-35deg) translateX(-50%);
  }
`;
const BookImage = styled.img`
  height: 60vw;
  max-height: 85vh;
  border-radius: 3px;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  @media (min-width: 991.5px) {
    height: 40vw;
    max-height: 65vh;
  }
`;
export const SideImgCover = styled.div`
  position: absolute;
  top: 0;
`;
export const SideCover = styled(motion.img)`
  height: 60vw;
  max-height: 85vh;
  border-radius: 3px;
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  @media (min-width: 991.5px) {
    height: 40vw;
    max-height: 65vh;
  }
  border-radius: 3px 1px 1px 3px;
  transform: perspective(500px) rotateY(-89deg) translateX(-50%);
`;
export const FrontCover = styled(BookImage)`
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 12px 3px rgba(0, 0, 0, 0.05);
  }
`;
export const UndefinedImg = styled(BookImage)`
  height: 35vw;
  max-height: 50vh;
`;
