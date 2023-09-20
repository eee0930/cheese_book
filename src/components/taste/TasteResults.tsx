import { useQuery } from 'react-query';
import { fetchTasteResult } from '../../apis/localApi';
import { useRecoilValue } from 'recoil';
import { myTasteResultState } from '../../atom';
import {
  ResultCover,
  ResultDescription,
  Star,
  StarsContainer,
  TestResultContainer,
  TestResultMent,
  ButtonContainer,
} from '../../styles/components/mbtiStyles';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

interface ITasteResults {
  callBack: () => void;
}
function TasteResults({ callBack }: ITasteResults) {
  const navigate = useNavigate();
  const result = useRecoilValue(myTasteResultState);
  const { data: mbtis, isLoading } = useQuery('mytaste', fetchTasteResult);
  const handleClickBookView = (id: number) => navigate(`/book/${id}`);
  return (
    <>
      {!isLoading && (
        <TestResultContainer>
          <TestResultMent
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/taste_ment2.png)`,
            }}
          />
          <ResultCover
            onClick={() => handleClickBookView(mbtis[result][0]?.itemId)}
            style={{
              backgroundImage: `url(${mbtis[result][0]?.cover})`,
            }}
          >
            <StarsContainer>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </StarsContainer>
          </ResultCover>
          <ResultDescription>
            <h3 onClick={() => handleClickBookView(mbtis[result][0]?.itemId)}>
              {mbtis[result][0]?.title}
            </h3>
            <div>{mbtis[result][0]?.ment}</div>
          </ResultDescription>
          <ButtonContainer>
            <Button handleBtn={callBack} size="lg">
              RETRY <i className="fa-solid fa-undo" />
            </Button>
          </ButtonContainer>
        </TestResultContainer>
      )}
    </>
  );
}

export default TasteResults;
