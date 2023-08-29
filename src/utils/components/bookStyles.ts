import { styled } from 'styled-components';

export const BookContentContainer = styled.div`
  padding: 5px !important;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    padding: 0.7rem !important;
    margin-bottom: 1rem;
  }
  @media (min-width: 1199.5px) {
    margin-bottom: 1.5rem;
  }
`;
export const BookCover = styled.div`
  width: 100%;
  aspect-ratio: 10 / 15;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  margin-bottom: 5px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
  }
  @media (min-width: 1199.5px) {
    margin-bottom: 0.8rem;
  }
`;
const OneLineContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
`;
export const BookTitle = styled(OneLineContent)`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const BookInfo = styled(OneLineContent)`
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
`;
