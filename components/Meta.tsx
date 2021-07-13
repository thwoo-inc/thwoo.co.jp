import { NextSeo } from 'next-seo';
import {
  FACEBOOK_APP_ID,
  SITE_NAME,
  SITE_URL,
  TWITTER_ID,
} from '../lib/constants';

type Props = {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

const Meta = ({ title, description, url, thumbnail }: Props) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: url === SITE_URL ? 'website' : 'article',
        url: `${SITE_URL}${url}`,
        title: title,
        description: description,
        images: [
          {
            url: `${SITE_URL}${thumbnail}`,
            width: 1200,
            height: 630,
            alt: `${title}の画像`,
          },
        ],
        site_name: SITE_NAME,
      }}
      twitter={{
        handle: `@${TWITTER_ID}`,
        site: `@${TWITTER_ID}`,
        cardType: 'summary_large_image',
      }}
      facebook={{
        appId: FACEBOOK_APP_ID,
      }}
    />
  );
};

export default Meta;
