import { FC, ReactNode } from 'react';

type Props = {
  href: string;
  children?: ReactNode;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const { href, children, ...otherProps } = props;

  return (
    <a href={href} {...otherProps}>
      {children}
    </a>
  );
};

export default index;
