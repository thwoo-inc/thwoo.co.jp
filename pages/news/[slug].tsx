import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { getAllNews, getNewsBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import NewsType from '../../types/news';

type Props = {
  news: NewsType;
};

const News = ({ news }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !news?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {/* ToDo: 既存サイトを再現しやすい方法を決めてスタイルをあてる */}
      <h1 className="text-2xl">{news.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
    </>
  );
};

export default News;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const news = getNewsBySlug(params.slug, [
    'slug',
    'title',
    'description',
    'thumbnail',
    'date',
    'content',
  ]);
  const content = await markdownToHtml(news.content || '');

  return {
    props: {
      news: {
        ...news,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const news = getAllNews(['slug']);

  return {
    paths: news.map((newsOne) => {
      return {
        params: {
          slug: newsOne.slug,
        },
      };
    }),
    fallback: false,
  };
};
