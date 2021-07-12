import INews from '../types/news';
import NewsCard from './NewsCard';

type Props = {
  news: INews[];
  tag: string;
};

const NewsList = ({ news, tag = '' }: Props) => {
  return (
    <div className="grid grid-row lg:grid-cols-2 2xl:grid-cols-4 gap-4 mb-6">
      {news &&
        news.length > 0 &&
        news
          .filter(
            (newsOne) => tag === '' || newsOne.tags.split(',').includes(tag)
          )
          .map((newsOne) => (
            <NewsCard
              key={newsOne.slug}
              slug={newsOne.slug}
              title={newsOne.title}
              description={newsOne.description}
              date={newsOne.date}
              thumbnail={newsOne.thumbnail}
              tags={newsOne.tags}
            />
          ))}
    </div>
  );
};

export default NewsList;
