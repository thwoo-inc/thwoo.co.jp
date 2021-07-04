import INews from '../types/news';
import NewsCard from './NewsCard';
import Section from './Section';

type Props = {
  news: INews[];
};

const News = ({ news }: Props) => {
  return (
    <Section id="news" label="NEWS">
      <div className="grid grid-row lg:grid-cols-2 2xl:grid-cols-3 gap-4 mb-6">
        {news.length > 0 &&
          news.map((newsOne) => (
            <NewsCard
              key={newsOne.slug}
              slug={newsOne.slug}
              title={newsOne.title}
              description={newsOne.description}
              date={newsOne.date}
              thumbnail={newsOne.thumbnail}
            />
          ))}
      </div>
      <p className="text-center underline text-gray-500">NEWS一覧を見る</p>
    </Section>
  );
};

export default News;
