
/** strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */
import { getProviders, signIn, getSession, csrfToken, getCsrfToken } from "next-auth/react";
import Image from 'next/image';
import HeaderComponent from '../components/headercomponent';
import NavComponent from '../components/navBar';
import Link from 'next/link';

// const TennorGif  = () => (
//   <Image
//     src="/images/f7f97425cafd67695409db84dc60871a.gif" // Route of the image file //
//     height={144} // Desired size with correct aspect ratio
//     width={144} // Desired size with correct aspect ratio
//     alt="Your Name"
//   />
// );

export default function LoginPagePost({ providers, csrfToken  }) {
    return (
        <>
        <HeaderComponent>Login</HeaderComponent>
        <NavComponent/>
            
            <div class="login_modal">
        <div class="login_box"></div>
        <div class="login_box">
            <div class="login_continer">
              {/* LOGO HERE */}
                <h1>Barbershop</h1>
            </div>
            <form class="login_container" method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                <div class="login_item">
                    <input placeholder="email" name="username" id="username"type="text"/>
                </div>
                <div class="login_item">
                    <input placeholder="Password" name="password" id="password" type="password"/>
                </div>
                <div class="login_item">
                </div>
                <div class="login_item">

                <button type="submit">Sign in</button>
 
                </div>
            </form>
                    <div class="login_item">
                    <Link href="/register2"><button class="btn_secondary" type="button">REGISTER</button></Link>
                </div>
            <div class="login_container">
                <div class="login_item">
                    <span class="login_span">or</span>
                </div>
                <div class="login_item">
                                    {/* {Object.values(providers).slice(1).map((provider) => (
                        <div key={provider.name}>
                        <button class="btn-ecl" onClick={() => signIn(provider.id)}><i class="bi bi-google"></i></button>
                        </div>
                    ))} 
                                    console.log(providers) */}
                    <button class="btn-ecl" onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/multiStepAppointment' })}><i class="bi bi-google"></i></button>
                    <button class="btn-ecl"><i class="bi bi-twitter"></i>not working</button>
                    <button class="btn-ecl"><i class="bi bi-facebook"></i>not working</button>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }

  export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
      props: { providers,  csrfToken: await getCsrfToken(context), },
    }
  }