import '../styles/main.css';
import FooterComponent from '../components/footercomponent';
import { SessionProvider } from "next-auth/react"


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <FooterComponent/>
    </SessionProvider>
  )
}
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }