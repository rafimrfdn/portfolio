import { FC, ReactNode } from 'react';

// style
import './style.scss';

type Props = {
  className?: string;
  children: ReactNode;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const { className = '', children, ...otherProps } = props;
  return (
    <h2 className={`section__title ${className}`} {...otherProps}>
      {children}
    </h2>
  );
};

export default index;
