import { styled } from 'styled-components';

export const BookContentResultContainer = styled.div`
  margin: 1rem 0;
`;
export const PrevBtnContainer = styled.div`
  padding: 5px 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.title};
  color: ${(props) => props.theme.black.lighter};
  i {
    margin-right: 0.5rem;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    padding: 0.7rem 1.2rem;
    &:hover {
      color: ${(props) => props.theme.main1.main2};
    }
  }
  @media (min-width: 1199.5px) {
    padding: 1rem 1.5rem;
  }
`;
export const BookContentContainer = styled.div`
  margin-top: 1rem;
  padding: 5px;
  @media (min-width: 768px) {
    padding: 0 0.7rem;
    margin-top: 2rem;
  }
  @media (min-width: 1199.5px) {
    padding: 0 1rem;
    margin-top: 2.5rem;
  }
`;
export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h1 {
    font-family: ${(props) => props.theme.title};
    font-size: 1.8rem;
    color: ${(props) => props.theme.black.veryDark};
    margin-bottom: 0.3rem;
    font-weight: 400;
    &.subTitle {
      font-size: 1.4rem;
    }
  }
  h3 {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.black.lighter};
  }
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 1199.5px) {
    margin-bottom: 2.5rem;
  }
`;
export const BookContentSection = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 1199.5px) {
    margin-bottom: 2.5rem;
  }
`;
export const BookImageSection = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PreviewBtnSection = styled.div`
  margin-top: 1rem;
`;
export const PreviewBtn = styled.button`
  border: none;
`;
export const BoxContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  top: 5px;
  left: 5px;
  bottom: 5px;
  right: 5px;
  width: 100%;
  max-width: calc(100vw - 10px);
  height: calc(100vh - 10px);
  background-color: pink;
  border-radius: 10px;
  @media (min-width: 768px) {
    top: 1rem;
    left: 1rem;
    bottom: 1rem;
    right: 1rem;
    max-width: calc(100vw - 2rem);
    height: calc(100vh - 2rem);
  }
  @media (min-width: 1199.5px) {
    top: 1rem;
    left: 50%;
    bottom: 3rem;
    right: unset;
    max-width: 33vw;
    height: calc(100vh - 4rem);
    transform: translateX(-50%);
  }
`;
export const DetialInfoContainer = styled.div`
  margin: 4rem 0;
  background-color: #fff;
  padding: 4rem 5rem;
`;
export const DetialInfoContainer2 = styled.div`
  margin: 4rem 0;
  background-color: transparent;
  padding: 0rem 5rem;
`;
export const DetailInfoTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5;
  font-family: ${(props) => props.theme.tilte};
  margin-bottom: 2rem;
  @media (max-width: 991.5px) {
    magin-bottom: 0;
  }
`;
export const DetailInfoCover = styled.h3`
  font-size: 15px;
  line-height: 2;
  .label {
    font-weight: bold;
    margin-right: 10px;
  }
  div {
    margin-bottom: 1rem;
  }
`;
export const CardReview = styled.div`
  text-align: center;
  img {
    width: 100%;
    max-width: 300px;
  }
  @media (min-width: 768px) {
    img {
      max-width: 400px;
    }
  }
  @media (min-width: 991.5px) {
    text-align: left;
  }
  @media (min-width: 1199.5px) {
    img {
      max-width: 600px;
    }
  }
`;
