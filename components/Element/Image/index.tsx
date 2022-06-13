import NextImage from 'next/image';

import classes from './index.module.scss';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className={classes.image}>
      <NextImage src={src} alt={alt} layout="fill" priority />
    </div>
  );
};

export default Image;
