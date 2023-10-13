import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`;
export const CloseButtonCover = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
export const Modal = styled.div`
  position: absolute;
  width: calc(100vw - 10px);
  height: calc(100vh - 10px);
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background-color: ${(props) => props.theme.white.lighter};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border-radius: 15px;
    &.search {
      width: 80vw;
      height: 90vh;
      top: 5vh;
      left: 10vw;
      right: 10vw;
      bottom: 5vh;
      border-radius: 1rem;
    }
  }
  @media (min-width: 991.5px) {
    width: 80vw;
    height: 90vh;
    top: 5vh;
    left: 10vw;
    right: 10vw;
    bottom: 5vh;
    border-radius: 1rem;
  }
`;
