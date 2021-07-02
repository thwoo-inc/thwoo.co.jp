import Image from 'next/Image';
import Link from 'next/link';

// import { SITE_NAME } from '../lib/constants'

const Header = () => {
  return (
    <header className="text-center pt-4 pb-2 shadow">
      <Link href="/">
        <Image src="/logo.png" width={70} height={20} alt="ロゴ画像" />
      </Link>
    </header>
  );
};

export default Header;
