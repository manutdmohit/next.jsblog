import Head from 'next/head';
import Header from './Header';
import Search from './Search';

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header />

      <Search />

      <link rel="icon" href="/favicon.ico" />

      <main className="container mx-auto my-7">{children}</main>
    </>
  );
}

Layout.defaultProps = {
  title: 'Welcome to Blog',
  keywords: 'development,coding,programming,blog',
  description:
    'Get news about web development and related programming languages',
};
