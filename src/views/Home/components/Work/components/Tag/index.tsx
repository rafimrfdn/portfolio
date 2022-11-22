import { FC } from 'react';

// type
import type Tag from '@/views/Home/components/Work/types/tag';

type Props = {
  tag: Tag;
};

// component
import GetIcon from '@/components/GetIcon';

const index: FC<Props> = (props) => {
  const { tag } = props;
  return (
    <>
      <div className="work__tag">
        <GetIcon icon={tag?.icon} />
        {tag?.name}
      </div>
    </>
  );
};

export default index;
