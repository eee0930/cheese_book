import { Helmet, HelmetProvider } from 'react-helmet-async';

function Login() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Login;
