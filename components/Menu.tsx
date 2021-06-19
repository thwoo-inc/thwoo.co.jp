import Link from 'next/link';

const Menu = () => {
  const menuObjects = [
    {
      href: '#news',
      label: 'NEWS',
    },
    {
      href: '#service',
      label: 'SERVICE',
    },
    {
      href: '#about',
      label: 'ABOUT',
    },
  ];

  return (
    <div className="flex mb-12 justify-center space-x-8 sm:space-x-12 lg:space-x-16">
      {menuObjects.map((obj) => (
        <Link key={obj.href} href={obj.href}>
          <span className="text-corporate-font text-sm md:text-md lg:text-lg tracking-widest px-4 pb-1 border-b-2">
            {obj.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
