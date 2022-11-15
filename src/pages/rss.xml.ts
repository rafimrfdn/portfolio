import rss from '@astrojs/rss';

const { SITE } = import.meta.env;

const postImportResult = import.meta.globEager('../posts/*.md');
const posts = Object.values(postImportResult);
posts.sort(
  (a, b) =>
    new Date(b.frontmatter.date).valueOf() -
    new Date(a.frontmatter.date).valueOf(),
);

export const get = () =>
  rss({
    stylesheet: '/rss/styles.xsl',
    title: 'RSS Feed | Mohammad Abu Mattar',
    description:
      'RSS feed for Mohammad Abu Mattar, a software engineer and a web developer.',
    site: SITE,
    items: posts.map((post) => ({
      link: `${SITE}blog/post/${post.frontmatter.slug}`,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
    })),
  });
