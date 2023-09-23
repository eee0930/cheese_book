import { styled } from 'styled-components';

export const ProgressCover = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  padding: 0;
`;
export const Progress = styled.div`
  height: 100%;
  transition: width 0.3s ease;
  background-color: ${(props) => props.theme.main2.main1};
`;
