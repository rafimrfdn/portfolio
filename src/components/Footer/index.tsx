import { FC, Fragment } from 'react';

type Social = {
  icon: string;
  title: string;
  url: string;
};

type Links = {
  href: string;
  title: string;
};

// style
import './style.scss';

// component
import GetIcon from '@/components/GetIcon';

// ui
import Container from '@/ui/Container';
import Link from '@/ui/Link';

// util
import getYear from '@/utils/getYear.util';

// data
import footerData from '@/data/footer-social.json';
import footerLinks from '@/data/footer-links.json';

const index: FC = () => {
  return (
    <>
      <footer className="footer">
        <Container className={'footer__container'}>
          <h1 className="footer__title">Mohammad Abu Mattar</h1>

          <div className="footer__list">
            {/* <span className={'footer__divider'}>|</span> */}
            {footerLinks.map((link: Links, index: number) => (
              <Fragment key={index}>
                <div className="">
                  <Link
                    href={link.href}
                    className="footer__link"
                    title={link.title}
                  >
                    {link.title}
                  </Link>
                </div>
                {/* <span className={'footer__divider'}>|</span> */}
              </Fragment>
            ))}
          </div>
        </Container>

        <div className="footer__social">
          {footerData?.map((result: Social, index: number) => {
            return (
              <Link
                href={result.url}
                title={result.title}
                target="__blank"
                className="footer__social-link"
                key={index}
              >
                <GetIcon icon={result.icon} />
              </Link>
            );
          })}
        </div>

        <span className="footer__copy">
          All Copyrights Reserved &#169;{' '}
          {getYear() >= '2019' ? `2019 - ${getYear()}` : getYear()}, Made With ❤
          By Mohammad Abu Mattar
        </span>

        <span className="footer__Build">
          <span className="footer__Build-box">
            Build With
            <span className="footer__Build-logo">
              <GetIcon icon="AstroIcon" />
            </span>
            <a
              href="https://astro.build/"
              target="__blank"
              className="footer__Build-link"
            >
              Astro
            </a>
            , and
            <span className="footer__Build-logo">
              <GetIcon icon="ReactIcon" />
            </span>
            <a
              href="https://reactjs.org/"
              target="__blank"
              className="footer__Build-link"
            >
              React
            </a>
          </span>
        </span>
      </footer>
    </>
  );
};

export default index;
