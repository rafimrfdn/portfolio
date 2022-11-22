import { FC } from 'react';

// iu
import Link from '@/ui/Link';

//components
import GetIcon from '@/components/GetIcon';

type Props = {
  href?: string;
  icon?: string;
  [x: string]: any;
};

const index: FC<Props> = (props) => {
  const { href, icon, ...otherProps } = props;
  return (
    <Link href={href} target={'__blank'} {...otherProps}>
      <GetIcon icon={icon} />
    </Link>
  );
};

export default index;
