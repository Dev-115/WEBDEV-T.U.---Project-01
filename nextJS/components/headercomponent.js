import Head from 'next/head';


export default function HeaderComponent({ children}) {
  return (
    <>
          <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>{children}</title>
      </Head>
    </>

  );
}