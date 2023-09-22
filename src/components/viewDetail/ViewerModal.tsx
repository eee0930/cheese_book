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
  isbn: string;
  title: string;
  cover: string;
  closeModal: () => void;
}

function ViewerModal({ itemId, isbn, title, cover, closeModal }: IViewerModal) {
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
          <BookViewer itemId={itemId} isbn={isbn} title={title} cover={cover} />
        </Modal>
      </ModalContainer>
    </>
  );
}

export default ViewerModal;
