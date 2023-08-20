import styled from 'styled-components';

export const BaseLayoutContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const CheeseContainer = styled.div`
  padding: ${(props) => props.theme.padding.sm};
  min-height: 80vh;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    padding: ${(props) => props.theme.padding.md};
    margin-bottom: 2rem;
  }
  @media (min-width: 1200px) {
    padding: ${(props) => props.theme.padding.lg};
  }
`;

export const CheeseMainContainer = styled.div`
  overflow-y: auto;
  max-height: 100vh;
`;

export const BaseLayoutMenu = styled.div`
  width: ${(props) => props.theme.sideMenu.md} !important;
  @media (min-width: 1200px) {
    width: ${(props) => props.theme.sideMenu.lg} !important;
  }
`;

export const MobileSideMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: none !important;
  }
`;
