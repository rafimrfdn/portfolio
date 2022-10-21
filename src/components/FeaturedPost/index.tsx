import React from 'react'

type Props = {
  posts: any
  authors: any
}

// style
import './style.scss'

// ui
import Container from '@/ui/Container'
import Grid from '@/ui/Grid'
import Image from '@/ui/Image'
import Link from '@/ui/Link'
import Section from '@/ui/Section'

// component
import GetIcon from '@/components/GetIcon'
import Slider from '@/components/Slider'

// util
import formatDate from '@/utils/formatDate.util'

const index: React.FC<Props> = (props) => {
  const { posts, authors } = props

  return (
    <Section className={'featuredpost'} id={'featuredpost'}>
      <Slider dataSlider={posts} authors={authors} />
      <Container>
        <Grid className={'featuredpost__container'}>
          {/* {posts.map((post: any, index: number) => {
            return (
              <div className={'featuredpost__card'} key={index}>
                <div className={''}>
                  <div className={'featuredpost__image'}>
                    <Image src={post.frontmatter.image} />
                    <div
                      className={
                        'featuredpost__overlay featuredpost__overlay--dark'
                      }
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
              </div>
            )
          })} */}
        </Grid>
      </Container>
    </Section>
  )
}

export default index
