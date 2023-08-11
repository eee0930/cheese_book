// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      i: string;
      j: string;
      k: string;
    };
    sub: {
      i: string;
      j: string;
      k: string;
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
