import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import News from '../components/News';
import Service from '../components/Service';

const Home = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto drop-shadow">
        <Hero />
        <Menu />
        <News />
        <Service />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
