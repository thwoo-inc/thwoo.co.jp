import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const newsDirectory = join(process.cwd(), '_news');

export const getNewsSlugs = () => {
  return fs.readdirSync(newsDirectory);
};

export const getNewsBySlug = (slug: string, fields: string[]) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(newsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllNews = (fields: string[] = []) => {
  const slugs = getNewsSlugs();
  const news = slugs
    .map((slug) => getNewsBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return news;
};
