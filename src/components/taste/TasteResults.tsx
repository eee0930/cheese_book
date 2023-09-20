import { useQuery } from 'react-query';
import { fetchTasteResult } from '../../apis/localApi';
import { useRecoilValue } from 'recoil';
import { myTasteResultState } from '../../atom';

function TasteResults() {
  const result = useRecoilValue(myTasteResultState);
  const { data: mbtis, isLoading } = useQuery('mytaste', fetchTasteResult);
  return <>{!isLoading && mbtis[result][0]?.cover}</>;
}

export default TasteResults;
