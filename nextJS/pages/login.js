import Link from 'next/link';
import Head from 'next/head';//heder editw
import Script from 'next/script'; // add scripts 
/** strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */
import Layout from '../components/layout';
import Image from 'next/image';

const TennorGif  = () => (
  <Image
    src="/images/f7f97425cafd67695409db84dc60871a.gif" // Route of the image file //
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function LoginPagePost() {
    return (
        <>
        <Layout>
        <Head>
        <title>Login</title>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      </Head>

            <h1>Login Here</h1>
            <TennorGif  />
            <h3>
            <Link href="/">Back to home</Link>
            </h3>
            </Layout>
      </>
    )
  }