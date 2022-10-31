import { FC } from 'react';

type Social = {
  icon: string;
  title: string;
  url: string;
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

const index: FC = () => {
  return (
    <>
      <footer className="footer">
        <Container className={'footer__container'}>
          <h1 className="footer__title">Mohammad Abu Mattar</h1>

          <div className="footer__list">
            <div className="">
              <Link href="/#about" className="footer__link" title={'About'}>
                About
              </Link>
            </div>
            <span className={'footer__divider'}>|</span>
            <div className="">
              <Link href="/#skills" className="footer__link" title={'Skills'}>
                Skills
              </Link>
            </div>
            <span className={'footer__divider'}>|</span>
            <div className="">
              <Link href="/#work" className="footer__link" title={'Portfolio'}>
                Portfolio
              </Link>
            </div>
            <span className={'footer__divider'}>|</span>
            <div className="">
              <Link
                href="/#contact"
                className="footer__link"
                title={'Contact Me'}
              >
                Contact Me
              </Link>
            </div>
            <span className={'footer__divider'}>|</span>
            <div className="">
              <Link href="/blog" className="footer__link" title={'Blog'}>
                Blog
              </Link>
            </div>
            <span className={'footer__divider'}>|</span>
            <div className="">
              <Link
                href="/cheatsheets"
                className="footer__link"
                title={'CheatSheets'}
              >
                CheatSheets
              </Link>
            </div>
            <span className={'footer__divider'}>|</span>
            <div className="">
              <Link
                href="/daily-quote"
                className="footer__link"
                title={'Daily Quote'}
              >
                Daily Quote
              </Link>
            </div>
            <span className={'footer__divider'}>|</span>
            <div className="">
              <Link
                href="/linktr.ee"
                className="footer__link"
                title={'Link tree'}
              >
                Link tree
              </Link>
            </div>
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
          By Mohammad Khaled Abu Mattar
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
