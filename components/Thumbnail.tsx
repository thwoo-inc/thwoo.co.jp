import Image from 'next/Image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const Thumbnail = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`${title}のサムネイル画像`}
      width={1200}
      height={630}
    />
  );

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Thumbnail;
