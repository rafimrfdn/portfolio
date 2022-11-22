import { FC, ReactNode } from 'react';

import './style.scss';

type Props = {
  href: string;
  type?: string | 'primary' | 'outline';
  className?: string;
  children?: ReactNode;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const {
    href,
    type = 'primary',
    className = '',
    children,
    ...otherProps
  } = props;

  return (
    <a
      href={href}
      className={`${
        type === 'primary' ? 'button' : 'button button--ghost'
      } ${className}`}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default index;
