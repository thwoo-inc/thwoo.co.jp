const Menu = () => {
  return (
    <div className="flex mb-12 justify-center space-x-8 sm:space-x-12 lg:space-x-16">
      <a
        href="#news"
        className="text-corporate-font text-sm md:text-md lg:text-lg tracking-widest"
      >
        NEWS
      </a>
      <a
        href="#service"
        className="text-corporate-font text-sm md:text-md lg:text-lg tracking-widest"
      >
        SERVICE
      </a>
      <a
        href="#about"
        className="text-corporate-font text-sm md:text-md lg:text-lg tracking-widest"
      >
        ABOUT
      </a>
    </div>
  );
};

export default Menu;
