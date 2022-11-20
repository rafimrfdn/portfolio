import { FC } from 'react';

// type
import type Props from '@/types/icon';

const index: FC<Props> = (props) => {
  const { fill = 'currentColor', size = '24', ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill={fill}
      {...otherProps}
    >
      <path d="M4.87 64.74a17.28 17.28 0 1017.28-17.29A17.31 17.31 0 004.87 64.74zM108 4c-9.5 0-15.16 7.65-15.16 20.46v78.7c0 12.81 5.65 20.46 15.14 20.46s15.16-7.65 15.16-20.46V24.51C123.13 11.7 117.47 4 108 4z"></path>
      <path d="M81.45 5.71H19.37a15.09 15.09 0 000 30.16V36h31.77V64.74a29 29 0 01-29 29h-.78l-.08.1c-.43 0-.86-.07-1.3-.07A15.11 15.11 0 1020 124c.45 0 .91 0 1.35-.07v.05h.79a59.33 59.33 0 0059.31-59.24v-.55-9.7-.11V5.71z"></path>
    </svg>
  );
};

export default index;
