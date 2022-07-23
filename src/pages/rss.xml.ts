import rss from '@astrojs/rss'

const { SITE } = import.meta.env

const postImportResult = import.meta.globEager('../posts/*.md')
const posts = Object.values(postImportResult)

export const get = () =>
  rss({
    title: 'Mohammad Abu Mattar | Portfolio',
    description:
      'Personal website, to show my software engineering skills at web development.',
    site: SITE,
    items: posts.map((post) => ({
      link: `${SITE}blog/${post.frontmatter.slug}`,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
    })),
  })
