import NewsCard from './NewsCard';

const News = () => {
  const newsObjects = [
    {
      title: 'スオウパーティ山口を開校しました',
      description:
        '山口市の商店街にIT塾スオウパーティの山口教室を開校しました。防府市に続き2校目となります。',
      thumbnail: '/news/news-thumbnail_20210313.jpg',
    },
    {
      title: '社会人向けプログラミング体験の講師を務めました',
      description:
        '代表の原田が、宇部市のイノベーション創出拠点うべスタにて、社会人向けプログラミング体験講座の講師を務めました。 社会人の方を対象としたプログラミングの講座は初となります。',
      thumbnail: '/news/news-thumbnail_20201205.jpg',
    },
    {
      title: 'スオウ流ITコンサルの紹介',
      description:
        '代表の原田が2020年1月から周南市にある株式会社京瀧(以下「京瀧」、敬称略) にIT技術顧問として携わっています。',
      thumbnail: '/news/news-thumbnail_20200629.jpg',
    },
    {
      title: 'プログラミング教育実証事業の講師をしました',
      description:
        '山口市教育委員会の実証事業として、9月から11月にかけて行われた大内小学校のプログラミング教育実証事業に代表の原田が講師として参加しました。',
      thumbnail: '/news/news-thumbnail_20191209.jpg',
    },
  ];

  return (
    <div id="news" className="items-center justify-center mb-12">
      <h2 className="w-32 m-8 pb-1 mx-auto text-corporate-font text-center text-xl md:text-2xl tracking-widest border-b-2 border-corporate-primary">
        NEWS
      </h2>
      <div className="px-4 m-1 grid grid-row lg:grid-cols-2 2xl:grid-cols-3 gap-4 mb-4">
        {newsObjects.map((obj) => (
          <NewsCard
            key={obj.title}
            title={obj.title}
            description={obj.description}
            thumbnail={obj.thumbnail}
          />
        ))}
      </div>
      <p className="text-center underline text-gray-500">NEWS一覧を見る</p>
    </div>
  );
};

export default News;
