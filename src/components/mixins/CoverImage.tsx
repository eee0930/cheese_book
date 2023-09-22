import { Variants, motion } from 'framer-motion';

interface ICoverImage {
  src: string;
  alt: string;
  variants?: Variants;
  motionArr?: string[];
  className?: string;
  replace?: string;
  callback?: () => void;
  onClick?: () => void;
}
function CoverImage({
  src,
  alt,
  variants,
  motionArr = [],
  className = '',
  replace,
  callback,
  onClick,
}: ICoverImage) {
  const onImageError = (target: EventTarget & HTMLImageElement) => {
    target.onerror = null;
    if (callback) {
      callback();
    }
    if (replace) {
      target.src = replace;
    } else {
      target.style.display = 'none';
    }
  };

  if (onClick) {
    return (
      <>
        {variants ? (
          <motion.img
            src={src}
            alt={alt}
            variants={variants}
            initial={motionArr.at(0)}
            animate={motionArr.at(1)}
            exit={motionArr.at(2)}
            className={className}
            onError={({ currentTarget }) => onImageError(currentTarget)}
            onClick={onClick}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className={className}
            onError={({ currentTarget }) => onImageError(currentTarget)}
            onClick={onClick}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        {variants ? (
          <motion.img
            src={src}
            alt={alt}
            variants={variants}
            initial={motionArr.at(0)}
            animate={motionArr.at(1)}
            exit={motionArr.at(2)}
            className={className}
            onError={({ currentTarget }) => onImageError(currentTarget)}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className={className}
            onError={({ currentTarget }) => onImageError(currentTarget)}
          />
        )}
      </>
    );
  }
}

export default CoverImage;
