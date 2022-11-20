import { ElementType, FC, HTMLAttributes, ReactNode } from 'react';

import './style.scss';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  className?: string;
  tag?: ElementType;
  children: ReactNode;
  [x: string]: any;
}

const index: FC<Props> = (props) => {
  const { tag: Tag = 'div', className = '', children, ...otherProps } = props;
  return (
    <Tag className={`container ${className}`} {...otherProps}>
      {children}
    </Tag>
  );
};

export default index;
