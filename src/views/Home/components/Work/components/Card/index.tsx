import { FC } from 'react';

// type
import type LinkType from '@/views/Home/components/Work/types/link';
import type Portfolio from '@/views/Home/components/Work/types/portfolio';
import type TagType from '@/views/Home/components/Work/types/tag';

type Props = {
  portfolio: Portfolio;
};

// ui
import Image from '@/ui/Image';

// component
import Link from '@/views/Home/components/Work/components/Link';
import Tag from '@/views/Home/components/Work/components/Tag';

const index: FC<Props> = (props) => {
  const { portfolio } = props;

  return (
    <>
      <div className={`work__card ${portfolio?.type}`}>
        <Image
          className="work__img"
          src={portfolio?.src}
          alt={`${portfolio?.headline}\r\n${portfolio?.direction}`}
        />
        <h3 className="work__title">{portfolio?.headline}</h3>
        <p className="work__direction">
          <span>Description:</span> {portfolio?.direction}
        </p>
        <div className="work__tags">
          {portfolio?.tags?.map((tag: TagType, index: number) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <div className={'work__buttons'}>
          {portfolio?.links?.map((link: LinkType, index: number) => (
            <Link key={index} link={link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
