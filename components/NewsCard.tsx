import Image from 'next/Image';
import Link from 'next/link';
import { getDateString } from '../lib/date';

const NewsCard = ({ slug, title, description, date, thumbnail, tags }) => {
  const dateStr = getDateString(new Date(date));

  return (
    <Link as={`/news/${slug}`} href="/news/[slug]">
      <a className="flex flex-col border rounded-lg overflow-hidden shadow-md hover:shadow-xl">
        <div className="relative flex">
          <h3 className="absolute bottom-0 w-full bg-gray-200 bg-opacity-75 px-4 py-2 text-md sm:text-lg font-bold z-10">
            {title}
          </h3>
          <Image
            src={thumbnail}
            width="1200"
            height="630"
            alt={`${title}`}
            className="z-0"
          />
        </div>
        <div className="flex flex-col flex-1 p-4 align-bottom">
          <p className="flex-1 text-sm mb-2">{description}</p>
          <div className="flex">
            {tags.split(',').map((tag) => (
              <p
                key={tag}
                className="flex-none text-xs px-2 py-1 mr-1 border rounded-lg text-left"
              >
                {tag}
              </p>
            ))}
            <p className="flex-grow text-xs py-1 text-right">{dateStr}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
