import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchTasteResult } from '../apis/localApi';

interface ITestResult {
  result: string;
}

function TasteResults() {
  const { result } = useOutletContext<ITestResult>();
  const { data: mbtis, isLoading } = useQuery('mytaste', fetchTasteResult);
  return <>{!isLoading && mbtis[result][0]?.cover}</>;
}

export default TasteResults;
