import {
  Modal,
  ModalContainer,
  OverlayContainer,
  CloseButtonCover,
} from '../../styles/components/modalStyles';
import BookViewer from './BookViewer';
import { Button } from '../Button';

interface IViewerModal {
  itemId: number;
  title: string;
  cover: string;
  closeModal: () => void;
}

function ViewerModal({ itemId, title, cover, closeModal }: IViewerModal) {
  return (
    <>
      <ModalContainer>
        <OverlayContainer onClick={closeModal} />
        <Modal>
          <CloseButtonCover>
            <Button
              styleIdx={1}
              isSquare={true}
              size={'lg'}
              handleBtn={closeModal}
            >
              close
            </Button>
          </CloseButtonCover>
          <BookViewer itemId={itemId} title={title} cover={cover} />
        </Modal>
      </ModalContainer>
    </>
  );
}

export default ViewerModal;
