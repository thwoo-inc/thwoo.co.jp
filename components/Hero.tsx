const Hero = () => {
  return (
    <div className="bg-corporate-primary text-center bg-contain bg-bottom bg-no-repeat bg-hero-bg-wave">
      <p className="text-white pt-20 xl:pt-30 2xl:pt-40 text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl pb-2 tracking-wider">
        人は成りたい自分に成れる
      </p>
      <p className="text-white pb-12 sm:pb-16 md:pb-20 lg:pb-40 xl:pb-48 2xl:pb-54 text-sm">
        Be who you want to be.
      </p>
      <div>
        <h1 className="text-corporate-font text-md md:text-lg lg:text-xl pb-1 sm:pb-4 xl:pb-8 2xl:pb-10">
          株式会社スオウ
        </h1>
        <div className="flex sm:pb-4 md:pb-8 lg:pb-10 2xl:pb-16 justify-center sm:space-x-4 lg:space-x-6 border-color-corporate-primary">
          <a
            href="#news"
            className="text-corporate-font px-4 pb-2 text-sm md:text-md lg:text-lg hover:underline rounded-full"
          >
            NEWS
          </a>
          <a
            href="#service"
            className="text-corporate-font px-4 pb-2 text-sm md:text-md lg:text-lg rounded-full"
          >
            SERVICE
          </a>
          <a
            href="#about"
            className="text-corporate-font px-4 pb-2 text-sm md:text-md lg:text-lg rounded-full"
          >
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
