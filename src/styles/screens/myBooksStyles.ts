import styled from 'styled-components';

export const MyBooksSetContainer = styled.div`
  @media (min-width: 991.5px) {
    min-height: 280px;
    position: relative;
    margin: 3rem auto 0;
  }
  @media (min-width: 1199.5px) {
    min-height: 300px;
  }
`;
export const BookShelves = styled.div`
  @media (min-width: 991.5px) {
    position: absolute;
    top: 255px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 700px;
    margin: 0 auto;
    height: 20px;
    background-color: ${(props) => props.theme.main3.main2};
    border-radius: 5px;
    box-shadow: -3px 5px 10px rgba(0, 0, 0, 0.15);
  }
  @media (min-width: 1199.5px) {
    top: 265px;
    width: 750px;
    height: 25px;
  }
  @media (min-width: 1300px) {
    top: 290px;
    width: 820px;
    height: 30px;
  }
`;
export const MyBooksSetCover = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 991.5px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

export const MyBook = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 10 / 15;
  min-height: 1px;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 10px;
  padding: 5px;
  @media (min-width: 767.5px) {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding: 0.7rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 991.5px) {
    -ms-flex: unset;
    flex: unset;
    max-width: unset;
    position: unset;
    width: 170px;
    margin: 0 -35px;
    z-index: 0;
    padding: 0;
    transition: transform 0.4s, filter 0.4s, z-index 0.2s;
    box-shadow: -2px 3px 5px 1px rgba(0, 0, 0, 0.15);
    & > div {
      filter: brightness(50%);
    }
    &:hover {
      z-index: 1;
      transform: translateY(-25px);
    }
    &:hover > div {
      filter: brightness(100%);
      box-shadow: 0 15px 20px 10px rgba(0, 0, 0, 0.15);
    }
  }
  @media (min-width: 1199.5px) {
    width: 180px;
    margin: 0 -40px;
  }
  @media (min-width: 1300px) {
    width: 190px;
  }
`;
export const MyBookCover = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2px;
`;
