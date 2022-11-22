import { FC, ReactNode } from 'react';

type Props = {
  htmlFor?: string;
  children?: ReactNode;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const { htmlFor, children, ...otherProps } = props;

  return (
    <label htmlFor={htmlFor} {...otherProps}>
      {children}
    </label>
  );
};

export default index;
