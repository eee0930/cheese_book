import {
  Modal,
  ModalContainer,
  OverlayContainer,
} from '../styles/components/modalStyles';
import BookViewer from './BookViewer';

interface IViewerModal {
  itemId: number;
  title: string;
  cover: string;
  handleClickOverview: () => void;
}

function ViewerModal({
  itemId,
  title,
  cover,
  handleClickOverview,
}: IViewerModal) {
  return (
    <>
      <ModalContainer>
        <OverlayContainer onClick={handleClickOverview} />
        <Modal>
          <BookViewer itemId={itemId} title={title} cover={cover} />
        </Modal>
      </ModalContainer>
    </>
  );
}

export default ViewerModal;
