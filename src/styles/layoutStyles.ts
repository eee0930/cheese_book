import styled from 'styled-components';

export const BaseLayoutContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const CheeseContainer = styled.div`
  padding: ${(props) => props.theme.padding.sm};
  min-height: calc(100vh - ${(props) => props.theme.sideMenu.xs});
  margin-top: ${(props) => props.theme.sideMenu.xs};
  @media (min-width: 768px) {
    padding: ${(props) => props.theme.padding.md};
    margin-top: 0;
    margin-bottom: 2rem;
    min-height: 100vh;
  }
  @media (min-width: 1199.5px) {
    padding: ${(props) => props.theme.padding.lg};
  }
`;

export const CheeseMainContainer = styled.div`
  overflow-y: auto;
  max-height: 100vh;
`;

export const BaseLayoutMenu = styled.div`
  width: ${(props) => props.theme.sideMenu.sm} !important;
  transition: width 0.3s ease;
  &.fold {
    width: 100px !important;
  }
  @media (min-width: 991.5px) {
    width: ${(props) => props.theme.sideMenu.md} !important;
    &.fold {
      width: 110px !important;
    }
  }
  @media (min-width: 1199.5px) {
    width: ${(props) => props.theme.sideMenu.lg} !important;
    &.fold {
      width: 140px !important;
    }
  }
`;

export const MobileSideMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: none !important;
  }
`;
