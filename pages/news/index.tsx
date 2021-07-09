import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import NewsList from '../../components/NewsList';
import { getAllNews } from '../../lib/api';
import INews from '../../types/news';

type Props = {
  allNews: INews[];
};

const NewsIndex = ({ allNews }: Props) => {
  const router = useRouter();

  return (
    <Layout pageTitle="NEWS一覧">
      <Head>
        <meta name="description" content="content" key="ogDescription" />
      </Head>

      <Header />
      <div className="container mx-auto">
        <div className="items-center">
          <h1 className="w-48 mb-12 pb-1 mx-auto text-corporate-font text-center text-xl md:text-2xl tracking-widest border-b-2 border-corporate-primary">
            NEWS一覧
          </h1>
          <NewsList news={allNews} />

          <div className="text-center mb-8 lg:mb-12">
            <button
              className="text-news-back text-md lg:text-lg"
              type="button"
              onClick={() => router.back()}
            >
              戻る
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default NewsIndex;

export const getStaticProps = async () => {
  const allNews = getAllNews([
    'slug',
    'title',
    'description',
    'date',
    'thumbnail',
  ]);

  return {
    props: { allNews },
  };
};
