import { Helmet, HelmetProvider } from 'react-helmet-async';

function Taste() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My Taste | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Taste;
