import {
  DetailInfoCover,
  DetailInfoTitle,
  DetialInfoContainer,
} from '../../styles/screens/viewDetailStyles';

interface IDetailContainer {
  title: string;
  children: React.ReactNode;
}

function DetailContainer({ title, children }: IDetailContainer) {
  return (
    <DetialInfoContainer className="row">
      <DetailInfoTitle className="col-12 col-lg-3">{title}</DetailInfoTitle>
      <DetailInfoCover className="col-12 col-lg-9">{children}</DetailInfoCover>
    </DetialInfoContainer>
  );
}

export default DetailContainer;
