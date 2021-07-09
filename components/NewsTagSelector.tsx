type Props = {
  tag: string;
  tagCandidates: string[];
  setTag: any;
};

const NewsTagSelector = ({ tag, tagCandidates, setTag }: Props) => {
  return (
    <div className="flex mb-8 justify-center">
      {tagCandidates &&
        tagCandidates.map((candidate) => (
          <button
            className={`mx-2 px-4 py-2 lg:text-lg lg:mx-4 lg:px-8 lg:py-4 border rounded-xl ${
              candidate === tag ? 'bg-red-200' : ''
            }`}
            onClick={() => (candidate === tag ? setTag('') : setTag(candidate))}
          >
            {candidate}
          </button>
        ))}
    </div>
  );
};

export default NewsTagSelector;
