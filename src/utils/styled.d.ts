// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      1: string;
      2: string;
      3: string;
    };
    sub: {
      1: string;
      2: string;
      3: string;
    };
    title: string;
    padding: {
      lg: string;
      md: string;
      sm: string;
    };
    sideMenu: {
      lg: string;
      md: string;
      sm: string;
    };
  }
}
