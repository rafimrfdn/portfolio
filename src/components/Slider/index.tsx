import React, { useState } from 'react';

import './style.scss';

import BtnSlider from './BtnSlider';
import Image from '../ui/Image';
import Link from '../ui/Link';
import GetIcon from '../GetIcon';
import formatDate from '@/utils/formatDate.util';

const Slider = ({ dataSlider, authors }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((post, index) => {
        return (
          <div
            key={post.frontmatter.slug}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <div className={'featuredpost__image'}>
              <Image src={post.frontmatter.image} />
              <div
                className={'featuredpost__overlay featuredpost__overlay--dark'}
              >
                <div className={'featuredpost__overlay-content'}>
                  <Link
                    href={`/blog/post/${post.frontmatter.slug}`}
                    className={'featuredpost__title'}
                  >
                    {post.frontmatter.title}
                  </Link>

                  <div className={'featuredpost__author'}>
                    <Image
                      className={'featuredpost__author-img'}
                      src={authors[post.frontmatter.author].image}
                    />
                    <Link
                      className={'featuredpost__author-info'}
                      href={`/author/${post.frontmatter.author}`}
                    >
                      {authors[post.frontmatter.author].name}
                    </Link>
                  </div>

                  <div className={'featuredpost__createdAt'}>
                    <span className={'featuredpost__createdAt-icon'}>
                      <GetIcon icon={'CalendarIcon'} />
                    </span>
                    <time
                      className={'featuredpost__createdAt-date'}
                      dateTime={post.frontmatter.date}
                    >
                      {formatDate(post.frontmatter.date)}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
