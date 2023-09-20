import {
  ButtonGroupContainer,
  ButtonGroupEle,
} from '../../styles/components/buttonStyles';

interface IButtonGroup {
  groupInfo: {
    id: string;
    name: string;
  }[];
  callBack: (idx: number) => void;
}

function NavTaps({ groupInfo, callBack }: IButtonGroup) {
  return (
    <ButtonGroupContainer>
      {groupInfo.map((info, i) => (
        <ButtonGroupEle key={i} onClick={() => callBack(i)}>
          {info.name}
        </ButtonGroupEle>
      ))}
    </ButtonGroupContainer>
  );
}

export default NavTaps;
