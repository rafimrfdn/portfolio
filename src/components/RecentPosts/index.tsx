import React from 'react'

type Props = {
  recentPosts: any
}

// style
import './style.scss'

// ui
import Image from '@/ui/Image'
import Link from '@/ui/Link'

// util
import formatDate from '@/utils/formatDate.util'

const index: React.FC<Props> = (props) => {
  const { recentPosts } = props

  return (
    <section className="recentposts__container">
      <h2 className="section__title recentposts__container-title">
        Recent Posts
      </h2>

      {recentPosts.map((post: any, index: number) => {
        return (
          <div className="recentposts__container-item" key={index}>
            <Link
              href={`/blog/post/${post.frontmatter.slug}`}
              className="recentposts__container-item--link"
            >
              <div className="recentposts__container-item--link-image">
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                />
              </div>
              <div className="recentposts__container-item--link-data">
                <span className="recentposts__container-item--link-date">
                  {formatDate(post.frontmatter.date)}
                </span>
                <p className="recentposts__container-item--link-title">
                  {post.frontmatter.title}
                </p>
              </div>
            </Link>
          </div>
        )
      })}
    </section>
  )
}

export default index
