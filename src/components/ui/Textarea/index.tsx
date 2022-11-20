import { FC } from 'react';

type Props = {
  name?: string;
  placeholder?: string;
  className?: string;
  cols?: number;
  rows?: number;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const {
    name,
    placeholder,
    className,
    cols = 30,
    rows = 10,
    ...otherProps
  } = props;

  return (
    <textarea
      name={name}
      className={className}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      required
      {...otherProps}
    ></textarea>
  );
};

export default index;
