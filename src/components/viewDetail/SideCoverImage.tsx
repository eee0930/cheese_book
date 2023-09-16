import { useLayoutEffect, useRef, useState } from 'react';
import { SideCover, SideImgCover } from '../../styles/components/coverStyles';

interface ISideCover {
  cover: string;
}
function SideCoverImage({ cover }: ISideCover) {
  const sideCover = useRef<HTMLImageElement>(null);
  const [sideCoverSize, setSideCoverSize] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (sideCover.current) {
        setSideCoverSize(sideCover.current?.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cover, sideCover.current]);

  return (
    <SideImgCover style={{ left: `${sideCoverSize / -2}px` }}>
      <SideCover ref={sideCover} src={cover} alt="cheese book" />
    </SideImgCover>
  );
}

export default SideCoverImage;
