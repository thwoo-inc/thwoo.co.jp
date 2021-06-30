import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import News from '../components/News';
import Service from '../components/Service';
import { getAllNews } from '../lib/api';
import NewsType from '../types/news';

type Props = {
  allNews: NewsType[];
};

const Home = ({ allNews }: Props) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto drop-shadow">
        <Hero />
        <Menu />
        <News news={allNews} />
        <Service />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allNews = getAllNews([
    'slug',
    'title',
    'description',
    'date',
    'thumbnail',
  ]);

  return {
    props: { allNews },
  };
};
