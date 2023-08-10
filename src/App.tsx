import { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/theme';
import { BasicStyle, GlobalStyle } from './utils/globalStyles';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BasicStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
