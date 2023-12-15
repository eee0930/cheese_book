import { useCallback } from 'react';
import {
  ButtonGroupContainer,
  ButtonGroupEle,
} from '../../styles/components/buttonStyles';

interface IButtonGroup {
  groupInfo: {
    id: number;
    name: string;
  }[];
  callBack: (idx: number) => void;
}

function NavTaps({ groupInfo, callBack }: IButtonGroup) {
  const handleClickBtn = useCallback((i: number) => callBack(i), []);

  return (
    <ButtonGroupContainer>
      {groupInfo.map((info, i) => (
        <ButtonGroupEle key={i} onClick={() => handleClickBtn(i)}>
          {info.name}
        </ButtonGroupEle>
      ))}
    </ButtonGroupContainer>
  );
}

export default NavTaps;
