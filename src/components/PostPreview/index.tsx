import React from 'react';

type Props = {
  post: any;
  author: any;
};

// style
import './style.scss';

// ui
import ButtonLink from '@/ui/ButtonLink';
import Image from '@/ui/Image';
import Link from '@/ui/Link';

// components
import GetIcon from '@/components/GetIcon';

// util
import formatDate from '@/utils/formatDate.util';

const index: React.FC<Props> = (props) => {
  const { post, author } = props;

  return (
    <article className={'article__post'}>
      <div className={'article__post-data'}>
        <div className={'article__post-box'}>
          <Image
            className={'article__post-box--img'}
            src={post.frontmatter.image}
          />
        </div>
      </div>

      <div className={'article__post-content'}>
        <div className={'article__info'}>
          <Link
            href={`/blog/post/${post.frontmatter.slug}`}
            aria-label={`Read ${post.frontmatter.title}`}
          >
            <h2 className={'article__info-title'}>{post.frontmatter.title}</h2>
          </Link>
          <div className={'article__info-container'}>
            <div className={'article__info-container--author'}>
              <Image
                className={'article__info-container--author-img'}
                src={author.image}
              />
              <Link
                className={'article__info-container--author-name'}
                href={`/author/${post.frontmatter.author}`}
              >
                {author.name}
              </Link>
            </div>

            <div className={'article__info-container--createdAt'}>
              <span className={'article__info-container--createdAt-icon'}>
                <GetIcon icon={'CalendarIcon'} />
              </span>
              <time
                className={'article__info-container--createdAt-date'}
                dateTime={post.frontmatter.date}
              >
                {formatDate(post.frontmatter.date)}
              </time>
            </div>
          </div>

          <p className={'article__info-excerpt'}>
            {post.frontmatter.description}
          </p>

          <div className={'article__info-tags'}>
            Tags:
            {post.frontmatter.tags.map((tag, index) => {
              return (
                <Link
                  key={index}
                  href={`/tag/${tag}`}
                  className={'article__info-tag'}
                >
                  {tag}
                </Link>
              );
            })}
          </div>

          <div className={'article__info-buttons'}>
            <ButtonLink
              className={'button--flex button--small article__info-button'}
              href={`/blog/post/${post.frontmatter.slug}`}
              aria-label={`Read ${post.frontmatter.title}`}
            >
              Continue Reading
              <span className={'article__info-button--icon'}>
                <GetIcon icon={'RightArrowIcon'} />
              </span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default index;
