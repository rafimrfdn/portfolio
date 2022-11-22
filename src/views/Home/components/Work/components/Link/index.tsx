import { FC } from 'react';

// type
import type LinkType from '@/views/Home/components/Work/types/link';

type Props = {
  link: LinkType;
};

// ui
import Link from '@/ui/Link';

// component
import GetIcon from '@/components/GetIcon';

const index: FC<Props> = (props) => {
  const { link } = props;
  return (
    <>
      <Link href={link?.url} className={'work__button'} target="__blank">
        {link?.name}{' '}
        <span className="work__icon">
          <GetIcon icon="RightArrowIcon" />
        </span>
      </Link>
    </>
  );
};

export default index;
