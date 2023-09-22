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
  padding: 0;
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95),
    box-shadow 0.5s ease;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: perspective(1800px) rotateY(45deg);
    box-shadow: -3px 5px 25px rgba(0, 0, 0, 0.3);
  }
  &:hover .side::after,
  &:hover .side img {
    transform: perspective(400px) rotateY(-35deg) translateX(-50%);
  }
`;
const BookImage = styled.img`
  height: 60vw;
  max-height: 85vh;
  border-radius: 3px;
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  @media (min-width: 991.5px) {
    height: 40vw;
    max-height: 65vh;
  }
`;
export const SideImgCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.03);
    transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
    transform: perspective(500px) rotateY(-89deg) translateX(-50%);
  }
  .SideCover {
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
  }
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
export const FrontImageCover = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 12px 3px rgba(0, 0, 0, 0.05);
  }
  .FrontCover {
    height: 60vw;
    max-height: 85vh;
    border-radius: 3px;
    transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
    @media (min-width: 991.5px) {
      height: 40vw;
      max-height: 65vh;
    }
  }
`;
export const FrontCover = styled(BookImage)``;
export const UndefinedImg = styled(BookImage)`
  height: 35vw;
  max-height: 50vh;
`;
