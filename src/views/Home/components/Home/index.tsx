import { FC } from 'react';

//style
import './style.scss';

// ui
import Grid from '@/components/ui/Grid';
import ButtonLink from '@/ui/ButtonLink';
import Container from '@/ui/Container';
import Link from '@/ui/Link';
import Picture from '@/ui/Picture';
import Section from '@/ui/Section';

//components
import GetIcon from '@/components/GetIcon';
import Social from './components/Social';

//data
import ButtonsData from '@/data/home-buttons.json';
import SocialData from '@/data/home-social.json';

const index: FC = () => {
  return (
    <Section className={'home'} id={'home'}>
      <Container className={'home__container'}>
        <Grid>
          <div className="home__data">
            <span className="home__greeting">Hello, I'm</span>
            <h1 className="home__name">Mohammad Abu Mattar</h1>
            <h2 className="home__education">Software Engineering</h2>

            <div className="home__buttons">
              {ButtonsData.map((button, index) => (
                <ButtonLink
                  key={index}
                  href={button.href}
                  type={button?.type}
                  download={button?.download}
                >
                  {button.title}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="home__handle">
            <Picture
              avif={'assets/img/about/profile.avif'}
              webp={'assets/img/about/profile.webp'}
              png={'assets/img/about/profile.png'}
              src={'assets/img/about/profile.png'}
              className={'home__img'}
              alt={'Mohammad Abu Mattar | Profile Picture'}
              with={'293'}
              height={'293'}
            />
          </div>

          <div className="home__social">
            {SocialData.map((item, index) => (
              <Social
                key={index}
                href={item.url}
                icon={item.iconName}
                title={item.title}
                className={'home__social-link'}
              />
            ))}
          </div>

          <Link
            href={'#about'}
            className={'home__scroll'}
            title={'Scroll to about me'}
          >
            <GetIcon icon={'MouseIcon'} />
            <span className="home__scroll-name">Scroll Down</span>
          </Link>
        </Grid>
      </Container>
    </Section>
  );
};

export default index;
