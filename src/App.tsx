import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
// utiles
import { lightTheme } from './styles/theme';
import { BasicStyle, CheeseStyle, GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BasicStyle />
      <CheeseStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
