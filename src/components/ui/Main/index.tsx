import { FC, ReactNode } from 'react';

import './style.scss';

type Props = {
  className?: string;
  children: ReactNode;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const { className = '', children, ...otherProps } = props;
  return (
    <main className={`main ${className}`} {...otherProps}>
      {children}
    </main>
  );
};

export default index;
