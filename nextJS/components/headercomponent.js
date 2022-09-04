import Head from 'next/head';
import Script from 'next/script'


export default function HeaderComponent({ children}) {
  return (
    <>
          <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <Script src="https://fonts.googleapis.com" strategy="beforeInteractive" />
        <Script src="https://fonts.gstatic.com" strategy="beforeInteractive" />
        <Script src="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" strategy="beforeInteractive" />
        <Script src="https://fonts.googleapis.com" strategy="beforeInteractive" />
        <Script src="https://fonts.googleapis.com/css2?family=Inter&display=swap" strategy="beforeInteractive" />
        <title>{children}</title>
      </Head>
    </>

  );
}