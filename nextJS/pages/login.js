import Link from 'next/link';
import Head from 'next/head';//heder editw
import Script from 'next/script'; // add scripts 
/** strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */
import Layout from '../components/layout';
import LoginBtn from '../components/login-btn';

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
        <Head>
        <title>Login</title>
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="styles/main.css"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
    <title>Login</title>
      </Head>
            <LoginBtn></LoginBtn>
            <Link href="/trial">mypage</Link>
            <div class="login_modal">
        <div class="login_box"></div>
        <div class="login_box">
            <div class="login_continer">
              {/* LOGO HERE */}
                <h1>Barbershop</h1>
            </div>
            <form class="login_container">
                <div class="login_item">
                    <input placeholder="Username" type="text"/>
                </div>
                <div class="login_item">
                    <input placeholder="Password" type="text"/>
                </div>
                <div class="login_item">
                </div>
                <div class="login_item">
                    <button class="btn_primary" type="submit">LOGIN</button>
                </div>
                <div class="login_item">
                    <button class="btn_secondary" type="button">REGISTER</button>
                </div>
            </form>
            <div class="login_container">
                <div class="login_item">
                    <span class="login_span">or</span>
                </div>
                <div class="login_item">
                    <button class="btn-ecl"><i class="bi bi-google"></i></button>
                    <button class="btn-ecl"><i class="bi bi-twitter"></i></button>
                    <button class="btn-ecl"><i class="bi bi-facebook"></i></button>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }