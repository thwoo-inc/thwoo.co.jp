import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import NewsList from '../../components/NewsList';
import NewsTagSelector from '../../components/NewsTagSelector';
import { getAllNews } from '../../lib/api';
import INews from '../../types/news';

type Props = {
  allNews: INews[];
};

const tagCandidates = ['会社', '教育', 'コンサル', '開発'];

const NewsIndex = ({ allNews }: Props) => {
  const [tag, setTag] = useState('');
  const router = useRouter();

  return (
    <Layout pageTitle="NEWS一覧">
      <Head>
        <meta name="description" content="content" key="ogDescription" />
      </Head>

      <Header />

      <div className="container mx-auto">
        <div className="p-4 mb-12">
          <h1 className="w-48 mb-12 pb-1 mx-auto text-corporate-font text-center text-xl md:text-2xl tracking-widest border-b-2 border-corporate-primary">
            NEWS一覧
          </h1>
          <NewsTagSelector
            tag={tag}
            tagCandidates={tagCandidates}
            setTag={setTag}
          />
          <NewsList news={allNews} tag={tag} />
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
    'tags',
  ]);

  return {
    props: { allNews },
  };
};
