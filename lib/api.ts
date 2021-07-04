import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

type Items = {
  [key: string]: string;
};

type News = {
  date: {
    [key: string]: string;
  };
  content: string;
};

const NEWS_PATH = join(process.cwd(), '_news');

export const getNewsFilePath = (): string[] => {
  return fs.readdirSync(NEWS_PATH).filter((path) => /\.mdx?$/.test(path));
};

export const getNews = (slug: string) => {
  const fullPath = join(NEWS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
};

export const getNewsItems = (
  filePath: string,
  fields: string[] = []
): Items => {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getNews(slug);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
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

export const getAllNews = (fields: string[] = [], limit: number = 0) => {
  const filePaths = getNewsFilePath();

  // default zero means full
  if (limit === 0) {
    limit = filePaths.length;
  }

  const news = filePaths
    .map((filePath) => getNewsItems(filePath, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(0, limit);
  return news;
};
