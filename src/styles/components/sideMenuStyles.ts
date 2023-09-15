import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  padding: 1.8rem 1.2rem 1.2rem 1rem;
  width: 100%;
  height: 100vh;
  @media (min-width: 1199.5px) {
    padding: 1.8rem 1.2rem 1rem 1rem;
  }
`;

export const SideMenuCover = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const MenuBtnCover = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.main3.main2};
  width: 20px;
  height: 45px;
  border: ${(props) => props.theme.boxLine.md};
  border-left: none;
  border-radius: 0 5px 5px 0;
  top: 55px;
  right: calc(-20px + 2.5px);
  z-index: 5;
  @media (min-width: 1199.5px) {
    border: ${(props) => props.theme.boxLine.lg};
    border-left: none;
    right: calc(-20px + 3px);
  }
`;
export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0;
  text-align: center;
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.title};
  color: ${(props) => props.theme.black.darker};
  outline: none;
  &:hover {
    color: ${(props) => props.theme.main1.main2};
  }
`;
export const LogoImg = styled.img`
  position: absolute;
  top: -1.2rem;
  right: -2.5rem;
  width: 70px;
  transform: rotate(15deg);
  z-index: 10;
  @media (min-width: 1199.5px) {
    right: -2.8rem;
    width: 75px;
  }
`;
const BoxStyle = styled.div`
  background-color: ${(props) => props.theme.main3.main2};
  border: ${(props) => props.theme.boxLine.md};
  overflow: hidden;
  height: 100%;
  transition: color 1s ease-in-out 0s, background-color 1s ease-in-out 0s;
  @media (min-width: 1199.5px) {
    border: ${(props) => props.theme.boxLine.lg};
  }
`;
export const AnimationBoxCover = styled(BoxStyle)`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  width: 100%;
`;
export const AnimationBox = styled.span`
  position: absolute;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  top: -20px;
  left: -20px;
  pointer-events: none;
  background-image: radial-gradient(rgb(26, 26, 26) 30%, transparent 30%),
    radial-gradient(rgb(26, 26, 26) 30%, transparent 30%);
  background-position: 0px 0px, 20px 20px;
  background-size: 8px 8px;
  transition: inherit;
  animation: 4s linear 0s infinite normal none running bURGXq;
`;
export const SideMenuIn = styled(BoxStyle)`
  position: relative;
  max-height: 100%;
  z-index: 4;
`;
export const TitleSection = styled.div`
  height: 100px;
`;
export const TitleCover = styled(TitleSection)`
  padding-top: 65px;
  .title {
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000,
      0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000,
      0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000;
    color: ${(props) => props.theme.main3.main2};
  }
  @media (min-width: 991.5px) {
    padding-top: 60px;
    .title {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 1199.5px) {
    .title {
      font-size: 2rem;
    }
  }
`;

export const SideMenus = styled.ul`
  padding: 2rem 0.8rem;
  position: relative;
  margin-bottom: 1.5rem;
  &:before,
  &:after {
    position: absolute;
    left: 1rem;
    right: 1rem;
    width: calc(100% - 2rem);
    border-top: solid 2px rgba(255, 255, 255, 0.5);
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  li {
    font-family: ${(props) => props.theme.title};
    height: 45px;
    position: relative;
    color: ${(props) => props.theme.black.darker};
    text-transform: uppercase;
    i,
    a {
      transition: color 0.3s ease;
    }
    i {
      font-size: 1.2rem;
      position: relative;
      top: 1.5px;
    }
    span {
      margin-left: 0.3rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:hover,
    &.active {
      color: ${(props) => props.theme.main1.main2};
    }
  }
  .icon-cover {
    width: 22px;
    text-align: center;
    display: inline-block;
    position: relative;
    transition: left 0.3s 0.5s ease-in-out;
  }
  .text-cover {
    font-size: 1rem;
    opacity: 1;
    transition: font-size 0.3s ease, opacity 0.3s ease-in-out;
  }
  &.fold .icon-cover {
    position: absolute;
    left: calc(50% - 0.5rem);
    transform: translateX(-50%);
  }
  &.fold .text-cover {
    display: inline;
    font-size: 0px;
    opacity: 0;
    visibility: hidden;
  }
  @media (min-width: 991.5px) {
    li {
      height: 50px;
      i {
        font-size: 1.5rem;
      }
      span {
        margin-left: 0.5rem;
      }
    }
    .icon-cover {
      width: 32px;
    }
    .text-cover {
      font-size: 1.2rem;
    }
  }
`;

export const SearchSection = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 1rem;
  right: 1rem;
  width: calc(100% - 2rem);
  form,
  input {
    height: 100%;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 5px;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;
export const SearchCover = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border: solid 3px ${(props) => props.theme.black.veryDark};
  padding-left: 1.7rem;
  background-color: ${(props) => props.theme.white.lighter};
  i {
    position: absolute;
    top: 50%;
    left: 5px;
    font-size: 1.2rem;
    transform: translateY(-50%);
  }
  &.active {
    border: solid 3px ${(props) => props.theme.main1.main2};
  }
`;

export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 60;
  transition: background-color 0.5s ease;
`;
export const MobileMenuCover = styled(motion.div)`
  background-color: inherit;
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  border: 3px solid rgb(26, 26, 26);
  transition: background-color 0.5s ease;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MobileMenuList = styled.ul`
  list-style: none;
  text-align: center;
  margin-bottom: 2rem;
`;
export const MenuLi = styled(motion.li)`
  margin-bottom: 2.5rem;
`;
export const MenuNameCover = styled.span`
  font-family: ${(props) => props.theme.title};
  font-size: 2.5rem;
  text-transform: uppercase;
  position: relative;
`;
export const ActiveMenuImg = styled(motion.img)`
  width: 50px;
  position: absolute;
  top: -40%;
  left: -35px;
`;
export const MenuName = styled.span`
  display: flex;
  transform: scaleY(1.5) scaleX(0.8);
`;
export const MobileAnimationBoxCover = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 100%;
  height: 100%;
`;
export const MobileAnimationBox = styled.div`
  position: absolute;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  top: -20px;
  left: -20px;
  pointer-events: none;
  background-image: radial-gradient(rgb(26, 26, 26) 30%, transparent 30%),
    radial-gradient(rgb(26, 26, 26) 30%, transparent 30%);
  background-position: 0px 0px, 20px 20px;
  background-size: 8px 8px;
  transition: inherit;
  animation: 4s linear 0s infinite normal none running bURGXq;
`;

export const menuFade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const menuIn = {
  initial: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
  },
  animate: {
    top: '1rem',
    left: '1rem',
    right: '1rem',
    bottom: '1rem',
    width: 'calc(100vw - 2rem)',
    height: 'calc(100vh - 2rem)',
    transition: {
      duration: 0.5,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const menuUp = {
  initial: {
    opacity: 0,
    marginTop: 100,
  },
  animate: {
    opacity: 1,
    marginTop: 0,
    transition: {
      duration: 0.5,
    },
  },
};
