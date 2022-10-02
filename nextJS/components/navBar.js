import Link from 'next/link';
import LoginBtn from '../components/login-btn';
import { useSession, getSession } from "next-auth/react"

export default function NavComponent() {
  const { data: session, status } = useSession()

  // if (status === "loading") {
  //   return(
  //   <>

  //     </>
  //   )
  // }

  // if (status === "unauthenticated") {
  //   return (
  //     <><p>Access Denied</p>
  //     <LoginBtn></LoginBtn></>
  //   )
  // }
  return (
    <>
      <nav className="main_nav">
        <div className='nav_box'>
          <div className="nav_item">
            <div>
              Barbershop/Salon
            </div>
          </div>
          <div className="nav_item">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/About">About Us</Link>
            {status === "unauthenticated" ? null : <><Link href="/Staff/manageBarber">ManageBarber</Link>
            </>}
            {/* <LoginBtn>hello</LoginBtn>
            <Link href="/register2"><button class="btn_primary">Register</button></Link> */}
            {status === "unauthenticated" ? <><Link href="/link1">Link 1</Link>
            </> : <Link href="/Appointments">Book Appointment</Link>}
            <Link href="/Contact">Contact</Link>
          </div>
          <div className="nav_item">
            {/* <LoginBtn>hello</LoginBtn>
            <Link href="/register2"><button class="btn_primary">Register</button></Link> */}
            {status === "unauthenticated" ? <><LoginBtn></LoginBtn><Link href="/register2"><button className="btn_primary">Register</button></Link>
            </> : <LoginBtn>hello</LoginBtn>}

          </div>
        </div >
      </nav >
    </>
  );
}
