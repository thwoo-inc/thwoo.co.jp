import Image from 'next/Image';
import Link from 'next/link';
import { getDateString } from '../lib/date';

const NewsCard = ({ slug, title, description, date, thumbnail }) => {
  const dateStr = getDateString(new Date(date));

  return (
    <Link as={`/news/${slug}`} href="/news/[slug]">
      <a className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl">
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
        <div className="p-4">
          <p className="text-sm mb-1">{description}</p>
          <p className="text-xs text-right">{dateStr}</p>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
