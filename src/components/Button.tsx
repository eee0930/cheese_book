import { styled } from 'styled-components';

const ButtonCover = styled.button`
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  position: relative;
  border: 0.2rem solid ${(props) => props.theme.black.darker};
  background-color: ${(props) => props.theme.black.darker};
  border-radius: 0.6rem;
  transition: transform 0.3s ease 0s, color 1s ease-in-out 0s,
    background-color 1s ease-in-out 0s;
  font-family: ${(props) => props.theme.title};
  z-index: 1;
  span {
    position: relative;
    top: -0.15rem;
    left: -0.15rem;
    display: block;
  }
  &.sm {
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    border-radius: 0.5rem;
  }
  &.sm span {
    top: -0.075rem;
    left: -0.075rem;
    font-size: 0.75rem;
    padding: 0.2rem 0.2rem;
  }
  &.md span {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
  &.lg span {
    font-size: 1.3rem;
    padding: 0.5rem 0.9rem;
  }
  &.square span {
    padding: 0.2rem 0.3rem 0.35rem;
  }
  &.btn-primary span {
    color: ${(props) => props.theme.white.lighter};
  }
  &.btn-secondary span,
  &.btn-third span {
    color: ${(props) => props.theme.black.darker};
  }

  &::before {
    content: '';
    top: -0.4rem;
    left: -0.4rem;
    position: absolute;
    z-index: 0;
    border: inherit;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
  &.sm::before {
    top: -0.3rem;
    left: -0.3rem;
  }
  &.btn-primary::before {
    background-color: ${(props) => props.theme.main1.main1};
  }
  &.btn-secondary::before {
    background-color: ${(props) => props.theme.main3.main2};
  }
  &.btn-third::before {
    background-color: ${(props) => props.theme.white.lighter};
  }
`;

const BTN_COLOR = ['btn-primary', 'btn-secondary', 'btn-third'];

interface IButton {
  value: string;
  styleIdx?: number;
  isSquare?: boolean;
  size?: string;
  handleBtn: () => void;
}

function Button({
  value,
  styleIdx = 0,
  isSquare = false,
  size = 'md',
  handleBtn,
}: IButton) {
  return (
    <ButtonCover
      className={`${isSquare && 'square'} ${BTN_COLOR[styleIdx]} ${size}`}
      onClick={handleBtn}
    >
      <span>{value}</span>
    </ButtonCover>
  );
}

export default Button;
