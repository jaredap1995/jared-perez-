import Head from 'next/head';

import Introduction from './Introduction';
import Resume_2 from './resume_2';


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Welcome to my website, portfolio, and blog"
        />
        <meta
          name="keywords"
          content="Jared,Perez,portfolio,data,engineer,software,machine,learning"
        />
        <meta name="author" content="Jared perez" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jared Perez</title>
        <link rel="canonical" href="http://www.jaredperez.com" />
        <html lang="en" />
      </Head>

      <Introduction></Introduction>
      <Resume_2></Resume_2>
    </>
  );
}
