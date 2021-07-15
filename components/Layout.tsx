import Meta from './Meta';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
  thumbnail?: string;
};

const Layout = ({ children, title, description, url, thumbnail }: Props) => {
  return (
    <>
      <Meta
        title={title}
        description={description}
        url={url}
        thumbnail={thumbnail}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
