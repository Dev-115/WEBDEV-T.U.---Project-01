import Link from 'next/link';
import Head from 'next/head';//heder editw
import Script from 'next/script'; // add scripts 
/** strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */
import Layout from '../components/layout';
import LoginBtn from '../components/login-btn';
import Image from 'next/image';
import { useSession, getSession } from "next-auth/react"


export default function trailPost() {
    const { data: session, status } = useSession()

  if (status === "loading") {
    return(
    <>

      </>
    )
  }

  if (status === "unauthenticated") {
    return (
      <><p>Access Denied</p>
      <LoginBtn></LoginBtn></>
    )
  }

  
  return (
    <>

<Layout>
        <Head>
        <title>Auth</title>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      </Head>

            <LoginBtn></LoginBtn>
            <h1>Protected Page</h1>
            <p>You can view this page because you are signed in.</p>
            <br/>
            </Layout>

    </>
    )
  }
