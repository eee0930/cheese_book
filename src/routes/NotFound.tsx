import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column;
`;
const Image = styled.img`
  width: 250px;
`;

function NotFound() {
  return (
    <ErrorContainer>
      <Link to="/">
        <Image src={process.env.PUBLIC_URL + '/img/error.png'} />
      </Link>
      <h1>404 Not Found.</h1>
    </ErrorContainer>
  );
}

export default NotFound;
