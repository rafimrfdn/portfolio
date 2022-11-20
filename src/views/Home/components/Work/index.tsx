import { FC } from 'react';

// type
import type Portfolio from '@/views/Home/components/Work/types/portfolio';

// style
import './style.scss';

// ui
import Container from '@/ui/Container';
import Section from '@/ui/Section';
import Subtitle from '@/ui/Subtitle';
import Title from '@/ui/Title';

// components
import Card from '@/views/Home/components/Work/components/Card';

// hook
import useMixitup from '@/views/Home/components/Work/hooks/useMixitup';

// data
import portfolio from '@/views/Home/components/Work/data/portfolio.json';

const index: FC = () => {
  useMixitup();

  return (
    <>
      <Section className={'work'} id={'work'}>
        <Subtitle>Recent Works</Subtitle>
        <Title>My Portfolio</Title>

        <div className="work__filters">
          <span className="work__item active-work" data-filter="all">
            All
          </span>
          <span className="work__item" data-filter=".frontend">
            Frontend
          </span>
          <span className="work__item" data-filter=".backend">
            Backend
          </span>
          <span className="work__item" data-filter=".package">
            Package
          </span>
          <span className="work__item" data-filter=".android">
            Android
          </span>
          <span className="work__item" data-filter=".desktop">
            Desktop
          </span>
        </div>

        <Container className={'work__container'}>
          {portfolio.map((portfolio: Portfolio, index: number) => (
            <Card portfolio={portfolio} key={index} />
          ))}
        </Container>
      </Section>
    </>
  );
};

export default index;
