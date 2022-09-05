import '../styles/main.css';
import Script from 'next/script'
import FooterComponent from '../components/footercomponent';
import { SessionProvider } from "next-auth/react"

//bootstra
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" type="text/css" strategy="beforeInteractive" />
    <Script src="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" type="text/css" strategy="beforeInteractive" />
    <Script src="https://fonts.googleapis.com/css2?family=Inter&display=swap" type="text/css" strategy="beforeInteractive" />
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <FooterComponent/>
    </SessionProvider>
    </>


  )
}
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }