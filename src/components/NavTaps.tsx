import { styled } from 'styled-components';

const NavTapsContainer = styled.div`
  margin: 2rem 0 3rem;
  padding: 0 0.5rem;
  border-bottom: ${(props) => props.theme.boxLine};
`;

const NavTap = styled.button`
  border: none;
  background: transparent;
  padding: 5px 8px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
  color: ${(props) => props.theme.black.lighter};
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: ${(props) => props.theme.main1.side};
  }
`;

interface IBtns {
  value: string;
  handleBtn: () => void;
}
interface INavTaps {
  btns: IBtns[];
}

function NavTaps({ btns }: INavTaps) {
  return (
    <NavTapsContainer>
      {btns.map((btn, i) => (
        <NavTap
          className={`${i === 0 && 'active'}`}
          key={i}
          onClick={btn.handleBtn}
        >
          {btn.value}
        </NavTap>
      ))}
    </NavTapsContainer>
  );
}

export default NavTaps;
