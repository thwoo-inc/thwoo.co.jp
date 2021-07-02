import Meta from './Meta';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
