import { styled } from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 120px;
  }
  @media (min-width: 768px) {
    img {
      display: none;
    }
  }
`;
export const QuestionCover = styled.div`
  width: 100%;
  max-width: 600px;
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
  line-height: 1.3;
  //font-weight: bold;
  height: 100%;
  @media (min-width: 768px) {
    padding: 1.2rem;
    font-size: 1rem;
  }
`;
