import INews from '../types/news';
import NewsCard from './NewsCard';

type Props = {
  news: INews[];
};

const NewsList = ({ news }: Props) => {
  return (
    <div className="grid grid-row lg:grid-cols-2 2xl:grid-cols-3 gap-4 mb-6">
      {news &&
        news.length > 0 &&
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
  );
};

export default NewsList;
