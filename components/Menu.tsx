const Menu = () => {
  return (
    <div className="flex p-4 sm:p-6 md:p-8 lg:p-8 2xl:p-12 justify-center space-x-8 sm:space-x-12 lg:space-x-16">
      <a
        href="#news"
        className="text-corporate-font text-sm md:text-md lg:text-lg hover:underline rounded-full"
      >
        NEWS
      </a>
      <a
        href="#service"
        className="text-corporate-font text-sm md:text-md lg:text-lg rounded-full"
      >
        SERVICE
      </a>
      <a
        href="#about"
        className="text-corporate-font text-sm md:text-md lg:text-lg rounded-full"
      >
        ABOUT
      </a>
    </div>
  );
};

export default Menu;
