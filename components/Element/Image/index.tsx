import NextImage from 'next/image';
import { useState } from 'react';

import classes from './index.module.scss';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const [ratio, setRatio] = useState('16 / 9');

  const imageLoadedHandler = ({
    naturalWidth,
    naturalHeight,
  }: {
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    if (naturalWidth === 1 || naturalHeight === 1) return;

    setRatio(`${naturalWidth} / ${naturalHeight}`);
  };

  return (
    <div className={classes.image} style={{ aspectRatio: ratio }}>
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        onLoadingComplete={imageLoadedHandler}
      />
    </div>
  );
};

export default Image;
