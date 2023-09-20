import { useState } from 'react';
import { tasteQuestions } from '../../data/cheeseMainData';
import {
  Answer,
  AnswerCover,
  AnswersCover,
  QuestionContainer,
  QuestionCover,
} from '../../styles/components/mbtiStyles';

interface IMbtiTest {
  callback: (result: string) => void;
}
interface IResultObj {
  [key: string]: number;
}

const mbtiSet = [
  ['I', 'E'],
  ['N', 'S'],
  ['F', 'T'],
  ['P', 'J'],
];
function MbtiTest({ callback }: IMbtiTest) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const handleClickAnswer = (idx: number, answer: string) => {
    setAnswers((prev) => [...prev, answer]);
    if (idx === tasteQuestions.length - 1) {
      getMbtiResult(answer);
    } else {
      setQIdx(idx + 1);
    }
  };
  const getMbtiResult = (answer: string) => {
    const newAnswers = [...answers];
    if (newAnswers.length < tasteQuestions.length) {
      newAnswers.push(answer);
    }
    let mbti = '';
    const resultObj: IResultObj = {
      I: 0,
      E: 0,
      N: 0,
      S: 0,
      F: 0,
      T: 0,
      P: 0,
      J: 0,
    };
    for (let i = 0; i < newAnswers.length; i++) {
      resultObj[newAnswers[i]] += 1;
    }
    for (let i = 0; i < 4; i++) {
      const [a, b] = mbtiSet[i];
      if (resultObj[a] > resultObj[b]) {
        mbti += a;
      } else {
        mbti += b;
      }
    }
    callback(mbti);
  };
  return (
    <>
      {tasteQuestions.map(
        (question, i) =>
          qIdx === i && (
            <QuestionContainer key={i}>
              <img
                src={`${process.env.PUBLIC_URL}/img/cheese3.png`}
                alt="cheese book"
              />
              <QuestionCover>
                <span>Q. {question.q}</span>
              </QuestionCover>
              <AnswersCover>
                {question.a.map((answer, j) => (
                  <AnswerCover
                    key={`${i}-${j}`}
                    onClick={() => handleClickAnswer(i, answer[0])}
                  >
                    <Answer>{answer[1]}</Answer>
                  </AnswerCover>
                ))}
              </AnswersCover>
            </QuestionContainer>
          )
      )}
    </>
  );
}

export default MbtiTest;
