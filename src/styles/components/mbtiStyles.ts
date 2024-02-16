import { styled } from 'styled-components';

// [mbti test]------------------------------------------------------------------
export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 120px;
    margin-top: 60px;
  }
  @media (min-width: 768px) {
    img {
      display: none;
    }
  }
`;
export const ProgressBarContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 0.5rem;
  width: calc(100% - 1rem);
  @media (min-width: 768px) {
    top: 1rem;
    left: 2rem;
    width: calc(100% - 4rem);
  }
`;
export const QuestionCover = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 1rem auto 2rem;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.title};
  text-align: center;
  position: relative;
  @media (min-width: 768px) {
    margin: 0rem auto 2rem;
    font-size: 1.8rem;
    img {
      display: none;
    }
  }
`;
export const AnswersCover = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;
export const AnswerCover = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  @media (min-width: 768px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 1rem;
    margin-bottom: 3rem;
  }
`;
export const Answer = styled.div`
  background-color: ${(props) => props.theme.main1.main1};
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.5;
  height: 100%;
  font-family: ${(props) => props.theme.title};
  font-weight: 400;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 1.2rem;
    font-size: 1rem;
    max-width: 390px;
    min-width: 150px;
  }
`;

// [test result]----------------------------------------------------------------

export const TestResultContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1199.5px) {
    min-height: 70vh;
  }
`;
export const TestResultMent = styled.div`
  width: 200px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 10px;
`;
export const ResultCover = styled.div`
  width: 250px;
  aspect-ratio: 10 / 15;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top center;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
`;
export const ResultDescription = styled.div`
  margin-top: 2rem;
  width: 100%;
  padding: 1rem 1.2rem;
  text-align: center;
  background-color: ${(props) => props.theme.white.lighter};
  font-size: 15px;
  line-height: 1.5;
  h3 {
    color: ${(props) => props.theme.main1.main1};
    font-family: ${(props) => props.theme.title};
    font-size: 1.5rem;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    cursor: pointer;
    word-spacing: 2px;
  }
  @media (min-width: 768px) {
    max-width: 450px;
  }
  @media (min-width: 1199.5px) {
    padding: 1rem 1.5rem;
    max-width: 500px;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 2rem;
`;
export const StarsContainer = styled.ul`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  list-style: none;
`;
export const Star = styled.li`
  list-style: none;
  position: absolute;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: #f9cc73;
    border-radius: 50%;
  }
  &:before {
    width: 20px;
    height: 4px;
  }
  &:after {
    height: 18px;
    width: 4px;
    left: 8px;
    top: -6px;
  }
  &:first-child {
    top: 30%;
    left: 5%;
    animation: twinkle 1s ease-in-out 1s infinite;
  }
  &:nth-child(2) {
    top: -5%;
    left: -10%;
    animation: twinkle 2s ease-in-out 1s infinite;
    &:before {
      height: 2px;
      width: 10px;
    }
    &:after {
      width: 2px;
      height: 10px;
      top: -4px;
      left: 4px;
    }
  }
  &:nth-child(3) {
    top: 5%;
    left: 110%;
    animation: twinkle 1s ease-in-out infinite;
  }
  &:nth-child(4) {
    top: 0%;
    left: 80%;
    animation: twinkle 2s ease-in-out infinite;
  }
  &:nth-child(5) {
    top: 10%;
    left: -9%;
    animation: twinkle 0.8s ease-in-out infinite;
    &:before {
      height: 6px;
      width: 30px;
    }
    &:after {
      width: 6px;
      height: 30px;
      top: -12px;
      left: 12px;
    }
  }
`;
