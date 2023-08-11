import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeState } from './atom';
// utiles
import { lightTheme, darkTheme } from './utils/theme';
import { BasicStyle, GlobalStyle } from './utils/globalStyles';

function App() {
  const isLight = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BasicStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
