import { ButtonGroupContainer } from '../../styles/components/buttonStyles';
import { Button } from '../Button';

interface IButtonGroup {
  styleIdx?: number;
  btnGroup: {
    value: string;
    handleBtn: () => void;
  }[];
}

function NavTaps({ styleIdx = 0, btnGroup }: IButtonGroup) {
  return (
    <ButtonGroupContainer>
      {btnGroup.map((btn, i) => (
        <Button
          key={i}
          size={'sm'}
          styleIdx={styleIdx}
          handleBtn={btn.handleBtn}
        >
          {btn.value}
        </Button>
      ))}
    </ButtonGroupContainer>
  );
}

export default NavTaps;
