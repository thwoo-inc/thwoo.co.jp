import Image from 'next/Image';
import Link from 'next/link';

// import { SITE_NAME } from '../lib/constants'

const Header = () => {
  return (
    <header className="text-center p-4 lg:p-8 mb-8 lg:mb-12 shadow">
      <Link as={`/`} href="/">
        <div className="w-10 lg:w-20 mx-auto">
          <Image src="/logo.png" width={210} height={60} alt="ロゴ画像" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
