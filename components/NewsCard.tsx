import Image from 'next/Image';

const NewsCard = (props) => {
  const descriptionMax = 60;
  const descriptionShort =
    props.description.length < descriptionMax
      ? props.description
      : props.description.substr(0, descriptionMax) + '...';
  return (
    <a href="" className="border rounded-lg overflow-hidden shadow-md">
      <div className="relative mb-4">
        <Image
          src={props.thumbnail}
          width="1200"
          height="630"
          alt={`${props.title}`}
        />
        <h3 className="absolute bottom-1.5 w-full bg-white bg-opacity-75 px-4 py-2 text-md sm:text-lg font-bold">
          {props.title}
        </h3>
      </div>
      <div className="mx-4 mb-2">
        <p className="text-sm mb-1">{descriptionShort}</p>
        {/* TODO: 日付の型や文字列が決まってから動的にする */}
        <p className="text-xs text-right mb-4">2021/06/29</p>
      </div>
    </a>
  );
};

export default NewsCard;
