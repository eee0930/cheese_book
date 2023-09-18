import { useRecoilState } from 'recoil';
import { ButtonCover, HeartButton } from '../styles/components/buttonStyles';
import { likedBookListState } from '../atom';
import { useEffect, useState } from 'react';

const BTN_COLOR = ['btn-primary', 'btn-secondary', 'btn-third'];

interface IButton {
  value: string;
  styleIdx?: number;
  isSquare?: boolean;
  size?: string;
  handleBtn: () => void;
}

export function Button({
  value,
  styleIdx = 0,
  isSquare = false,
  size = 'md',
  handleBtn,
}: IButton) {
  return (
    <ButtonCover
      className={`${isSquare && 'square'} ${BTN_COLOR[styleIdx]} ${size}`}
      onClick={handleBtn}
    >
      <span>{value}</span>
    </ButtonCover>
  );
}

interface IHeartBlast {
  book: {
    itemId: number;
    title: string;
    cover: string;
  };
}
export function HeartBlast({ book }: IHeartBlast) {
  const [likedBooks, setLikedBooks] = useRecoilState(likedBookListState);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const isLiked = likedBooks.some((liked) => liked.itemId === book.itemId);
    if (isLiked) {
      setIsActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClickBtn = () => {
    console.log('하핫');
    if (isActive) {
      const likedIdx = likedBooks.findIndex(
        (liked) => liked.itemId === book.itemId
      );
      setLikedBooks((prev) => [
        ...prev.slice(0, likedIdx),
        ...prev.slice(likedIdx + 1),
      ]);
    } else {
      console.log('오호');
      setLikedBooks((prev) => [...prev, book]);
    }
    setIsActive((isLiked) => !isLiked);
  };
  return (
    <HeartButton
      className={`${isActive ? 'active' : ''}`}
      onClick={handleClickBtn}
    >
      <i className="fa-solid fa-heart" />
    </HeartButton>
  );
}
