import {
  Progress,
  ProgressCover,
} from '../styles/components/progressBarStyles';

interface IProgressBar {
  totalIdx: number;
  idx: number;
}

function ProgressBar({ totalIdx, idx }: IProgressBar) {
  return (
    <ProgressCover>
      <Progress style={{ width: `${(idx * 100) / totalIdx}%` }} />
    </ProgressCover>
  );
}

export default ProgressBar;
