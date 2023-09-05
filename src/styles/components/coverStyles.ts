import { styled } from 'styled-components';

export const BookContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
`;

const BookImage = styled.img`
  height: 40vw;
  max-height: 65vh;
  border-radius: 3px;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;

export const SideCover = styled(BookImage)`
  border-radius: 3px 1px 1px 3px;
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
