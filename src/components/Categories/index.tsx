import React from 'react';

type Props = {
  categories: any;
  allPosts: any;
};

// style
import './style.scss';

// ui
import Link from '@/ui/Link';

const index: React.FC<Props> = (props) => {
  const { categories, allPosts } = props;

  return (
    <section className="categories__container">
      <h2 className="section__title categories__container-title">Categories</h2>
      {categories.map((category: any, index: number) => {
        return (
          <div className="categories__container-item" key={index}>
            <Link
              href={`/categorie/${category}`}
              className="categories__container-item--link"
            >
              <p className="categories__container-item--link-title">
                {category}
              </p>
              <span className="categories__container-item--link-counter">
                {
                  allPosts.filter((post: any, index: number) => {
                    return post.frontmatter.categories.includes(category);
                  }).length
                }
              </span>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default index;
