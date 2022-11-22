import { FC } from 'react';

// type
import type Props from '@/features/ScrollToTop/types/scrollToTop';

// style
import './style.scss';

// component
import GetIcon from '@/components/GetIcon';

// hook
import useScrollToTop from '@/features/ScrollToTop/hooks/useScrollToTop';

// util
import scrollToTop from '@/features/ScrollToTop/utils/scrollToTop.util';

const index: FC<Props> = (props) => {
  const {
    top = 20,
    className = '',
    icon = 'ChevronUpIcon',
    smooth,
    children,
    ...otherProps
  } = props;

  const { visible } = useScrollToTop(top);

  return (
    <>
      {visible && (
        <button
          type={'button'}
          className={`scrollToTop ${className}`}
          title={'Scroll to top'}
          onClick={() => scrollToTop(smooth)}
          {...otherProps}
        >
          {children || <GetIcon icon={icon} />}
        </button>
      )}
    </>
  );
};

export default index;
