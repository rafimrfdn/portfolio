import { FC } from 'react';

type Props = {
  src: string;
  avif?: string;
  webp?: string;
  png?: string;
  jpeg?: string;
  className?: string;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const { src, avif, webp, png, jpeg, className = '', ...otherProps } = props;

  return (
    <picture>
      {avif && <source srcSet={avif} type={'image/avif'} />}
      {webp && <source srcSet={webp} type={'image/webp'} />}
      {png && <source srcSet={png} type={'image/png'} />}
      {jpeg && <source srcSet={jpeg} type={'image/jpeg'} />}

      <img src={src} className={className} {...otherProps} loading={'lazy'} />
    </picture>
  );
};

export default index;
