import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/Image';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { getAllNews, getNews } from '../../lib/api';
import { SITE_URL } from '../../lib/constants';
import INews from '../../types/news';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<INews, 'slug'>;
};

const NewsPage = ({ source, frontMatter }: Props) => {
  const ogImage = SITE_URL + frontMatter.thumbnail;

  const dateStr = getDateString(new Date(frontMatter.date));

  console.log('===');
  console.log(frontMatter.thumbnail);

  return (
    <Layout pageTitle={frontMatter.title}>
      <Head>
        <meta
          name="descritpion"
          content={frontMatter.description}
          key="ogDescription"
        />
        <meta property="og:image" content={ogImage} key="ogImage" />
      </Head>

      <Header />

      <article className="container mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold mt-8 lg:mt-12 mb-2">
          {frontMatter.title}
        </h1>
        <p className="text-right text-sm lg:text-xl text-gray-500 mb-6">
          {dateStr}
        </p>
        <p className="text-md mb-6">{frontMatter.description}</p>
        <div className="relative flex">
          <Image src={frontMatter.thumbnail} layout="fill" objectFit="cover" />
        </div>
        <MDXRemote {...source} />
        <button className="m-6 text-center text-gray-500">戻る</button>
      </article>

      <Footer />
    </Layout>
  );
};

export default NewsPage;

export const getStaticProps = async ({ params }) => {
  const { content, data } = getNews(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const newss = getAllNews(['slug']);

  const paths = newss.map((news) => {
    return {
      params: {
        slug: news.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

const getDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}/${month}/${day}`;
};
