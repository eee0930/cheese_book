import { Link } from 'react-router-dom';
import { cheesePaths } from '../../data/cheeseMainData';
import {
  HomeTapsContainer,
  MainMenuConver,
  MainMenuImg,
  MainMenuText,
} from '../../styles/components/buttonStyles';

function HomeMenu() {
  return (
    <HomeTapsContainer>
      {cheesePaths.map((cheesePath, i) => (
        <Link key={cheesePath.name_sm} to={cheesePath.path}>
          <MainMenuConver>
            <MainMenuImg
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese${i}.png)`,
              }}
            />
            <MainMenuText>{cheesePath.name_kr}</MainMenuText>
          </MainMenuConver>
        </Link>
      ))}
    </HomeTapsContainer>
  );
}

export default HomeMenu;
