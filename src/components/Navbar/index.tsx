import { FC, useEffect, useState } from 'react';

// style
import './style.scss';

// iu
import Container from '@/components/ui/Container';
import Header from '@/components/ui/Header';
import Link from '@/components/ui/Link';

// components
import GetIcon from '@/components/GetIcon';

// data
import NavLinksData from '@/data/nav-link.json';

//features
import ScrollToTop from '@/features/ScrollToTop';

type Props = {
  isBlog?: boolean;
  isTree?: boolean;
  isCheatSheets?: boolean;
  isDailyQuote?: boolean;
};

const index: FC<Props> = (props) => {
  const {
    isBlog = false,
    isTree = false,
    isCheatSheets = false,
    isDailyQuote = false,
  } = props;

  let sections: any[] | NodeListOf<Element>;

  const [isLight, setIsLight] = useState(false);
  const [scrollHeaderShadow, setScrollHeaderShadow] = useState(false);

  const handleTheme = () => {
    const lightTheme = 'light-theme';

    const getCurrentTheme = () =>
      document.body.classList.contains(lightTheme) ? 'light' : 'dark';

    if (document.body.classList.contains(lightTheme)) {
      document.body.classList.remove(lightTheme);
      setIsLight(false);
    } else {
      document.body.classList.add(lightTheme);
      setIsLight(true);
    }

    localStorage.setItem('selected-theme', getCurrentTheme());
  };

  const scrollHeader = () => {
    const scrollY = window.pageYOffset;

    setScrollHeaderShadow(scrollY >= 50 ? true : false);

    if (!isBlog && !isTree) {
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active-link');
        } else {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
        }
      });
    }
  };

  useEffect(() => {
    if (localStorage) {
      const selectedTheme = localStorage.getItem('selected-theme');
      const lightTheme = 'light-theme';

      if (selectedTheme === 'light') {
        document.body.classList.add(lightTheme);
        setIsLight(true);
      } else {
        document.body.classList.remove(lightTheme);
        setIsLight(false);
      }
    }

    if (!isBlog && !isTree) {
      sections = document.querySelectorAll('section[id]');
    }

    window.addEventListener('scroll', scrollHeader);
  }, [scrollHeaderShadow, isLight]);

  return (
    <Header
      className={`${scrollHeaderShadow ? 'scroll-header' : ''}`}
      id={'header'}
    >
      <Container tag={'nav'} className={'nav'}>
        <Link href={'/'} className={'nav__logo'}>
          <span>
            <GetIcon icon={'MKAbuMattarIcon'} fill={'#d52128'} size={'25'} />
          </span>
          Mohammad Abu Mattar
        </Link>

        <div className="nav__menu">
          <ul className="nav__list">
            {NavLinksData.map((link: any, index: number) => (
              <li key={index} className="nav__item">
                <Link
                  href={link.href}
                  title={link.title}
                  className={`nav__link ${
                    link?.blog === 'notblog'
                      ? `${
                          !isBlog && !isTree && !isCheatSheets && !isDailyQuote
                            ? 'active-link'
                            : ''
                        }`
                      : link?.blog === 'blog'
                      ? `${isBlog ? 'active-link' : ''}`
                      : link?.tree === 'linktr.ee'
                      ? `${isTree ? 'active-link' : ''}`
                      : link?.cheatsheets === 'cheatsheets'
                      ? `${isCheatSheets ? 'active-link' : ''}`
                      : link?.dailyquote === 'dailyquote'
                      ? `${isDailyQuote ? 'active-link' : ''}`
                      : ''
                  }`}
                >
                  <GetIcon icon={link.icon} size={'20'} />
                </Link>
              </li>
            ))}
          </ul>
          <ScrollToTop smooth />
        </div>

        <span className="change-theme" id="theme-button" onClick={handleTheme}>
          {isLight === true ? (
            <GetIcon icon={'MoonIcon'} size={'20'} />
          ) : (
            <GetIcon icon={'SunIcon'} size={'20'} />
          )}
        </span>
      </Container>
    </Header>
  );
};

export default index;
