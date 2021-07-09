import Link from 'next/link';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import NewsList from '../components/NewsList';
import ServiceList from '../components/ServiceList';
import { getAllNews } from '../lib/api';
import INews from '../types/news';

type Props = {
  allNews: INews[];
};

const Home = ({ allNews }: Props) => {
  const sectionStyle = 'items-center justify-center p-4 mb-12';
  const head2Style =
    'w-32 mb-8 pb-1 mx-auto text-corporate-font text-center text-xl md:text-2xl tracking-widest border-b-2 border-corporate-primary';

  return (
    <div className="bg-white">
      <div className="container mx-auto drop-shadow">
        <Hero />
        <Menu />

        <div id="news" className={sectionStyle}>
          <h2 className={head2Style}>NEWS</h2>
          <NewsList news={allNews} tag="" />
          <Link href="/news/">
            <a className="text-center">
              <p className="underline text-gray-500">NEWS一覧を見る</p>
            </a>
          </Link>
        </div>

        <div id="service" className={sectionStyle}>
          <h2 className={head2Style}>SERVICE</h2>
          <ServiceList />
        </div>

        <div id="about" className={sectionStyle}>
          <h2 className={head2Style}>ABOUT</h2>
          <About />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allNews = getAllNews(
    ['slug', 'title', 'description', 'date', 'thumbnail', 'tags'],
    4
  );

  return {
    props: { allNews },
  };
};
