import Meta from './Meta';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
