import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import {
  CustomH1,
  CustomH2,
  CustomLink,
  CustomP,
  CustomStrong,
  CustomUl,
} from '../../components/BlogMarkdown/BlogMarkdown';
import styles from './[slug].module.scss';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import TwoColumn from '../../components/Layouts/TwoColumn/TwoColumn';

const components = {
  a: CustomLink,
  h1: CustomH1,
  h2: CustomH2,
  p: CustomP,
  strong: CustomStrong,
  ul: CustomUl,
};

interface FrontMatter {
  author: string;
  description: string;
  title: string;
  created: string;
}

interface BlogInformationProps {
  frontMatter: FrontMatter;
}

interface BlogPostProps {
  source: string;
  frontMatter: FrontMatter;
}

const BlogInformation: React.FC<BlogInformationProps> = ({ frontMatter }) => {
  const date = new Date(frontMatter.created),
    createdDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <>
      <Link href="/blog">
        <a className={styles.crumb}>Blog</a>
      </Link>

      <p className={styles.title}>
        <i className="fa-solid fa-arrow-turn-down-right"></i>
        {frontMatter.title}
      </p>
      <p className={styles.date}>{createdDate}</p>
    </>
  );
};

const BlogPost: React.FC<BlogPostProps> = ({ source, frontMatter }) => {
  // @ts-ignore
  const content = hydrate(source, { components });

  return (
    <div className={styles.blogPost}>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <TwoColumn
        leftColumn={<BlogInformation frontMatter={frontMatter} />}
        rightColumn={<main className={styles.sectionInfo}>{content}</main>}
      />
    </div>
  );
};

export default BlogPost;

interface Slug {
  slug: string;
}

interface getStaticPropsParams {
  params: Slug;
}

export const getStaticProps = async ({ params }: getStaticPropsParams) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
