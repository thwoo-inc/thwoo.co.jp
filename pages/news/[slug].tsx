import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/Image';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { getAllNews, getNews } from '../../lib/api';
import { SITE_URL } from '../../lib/constants';
import { getDateString } from '../../lib/date';
import INews from '../../types/news';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<INews, 'slug'>;
};

const NewsPage = ({ source, frontMatter }: Props) => {
  const router = useRouter();
  const ogImage = SITE_URL + frontMatter.thumbnail;
  const dateStr = getDateString(new Date(frontMatter.date));

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

      <article className="container-lg max-w-screen-lg mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold mb-8 px-4">
          {frontMatter.title}
        </h1>
        <p className="text-sm lg:text-md text-news-date text-right mb-6 px-4">
          {dateStr}
        </p>

        <p className="text-md lg:text-lg text-news-paragraph mb-6 px-4">
          {frontMatter.description}
        </p>

        <div className="px-4 mb-8">
          <Image src={frontMatter.thumbnail} width={1200} height={630} />
        </div>

        <div className="prose lg:prose-lg max-w-screen-lg px-4 mb-16 lg:mb-24">
          <MDXRemote {...source} />
        </div>

        <div className="text-center mb-8 lg:mb-12">
          <button
            className="text-news-back text-md lg:text-lg"
            type="button"
            onClick={() => router.back()}
          >
            戻る
          </button>
        </div>
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
