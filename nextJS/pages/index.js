import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
//   console.log('Node is installed!');
// console.log('git is installed!');
// console.log('mark is here!'); //add line console.log(yourname is here)
// console.log('Genesis was here!'); //add line console.log(yourname is here)
// console.log('Gab was here!'); //add line console.log(yourname is here)
// console.log('mark\'s branch');

  return (
    // <div className="container">
    //   <Head>
    //     <title>Project template</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main>
    //     <h1 className="title">
    //       Welcome to <a href="https://nextjs.org">Team MAGG!</a>
    //     </h1>

    //     <p className="description">
    //      Genesis
    //      Gab
    //      Albert
    //      Mark
    //     </p>
    //     <h4 className="title">
    //      <Link href="/login">Login Here!</Link>
    //     <Link href="/register">Register Here!</Link>

    //     </h4>


    //   </main>

    //   <footer>
    //   Powered by  <code>React/Next.js</code>
    //   </footer>

    //   <style jsx>{`
    //     .container {
    //       min-height: 100vh;
    //       padding: 0 0.5rem;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     main {
    //       padding: 5rem 0;
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer {
    //       width: 100%;
    //       height: 100px;
    //       border-top: 1px solid #eaeaea;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer img {
    //       margin-left: 0.5rem;
    //     }

    //     footer a {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     a {
    //       color: inherit;
    //       text-decoration: none;
    //     }

    //     .title a {
    //       color: #0070f3;
    //       text-decoration: none;
    //     }

    //     .title a:hover,
    //     .title a:focus,
    //     .title a:active {
    //       text-decoration: underline;
    //     }

    //     .title {
    //       margin: 0;
    //       line-height: 1.15;
    //       font-size: 4rem;
    //     }

    //     .title,
    //     .description {
    //       text-align: center;
    //     }

    //     .description {
    //       line-height: 1.5;
    //       font-size: 1.5rem;
    //     }

    //     code {
    //       background: #fafafa;
    //       border-radius: 5px;
    //       padding: 0.75rem;
    //       font-size: 1.1rem;
    //       font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    //         DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    //     }

    //     .grid {
    //       display: flex;
    //       align-items: center;
    //       justify-content: center;
    //       flex-wrap: wrap;

    //       max-width: 800px;
    //       margin-top: 3rem;
    //     }

    //     .card {
    //       margin: 1rem;
    //       flex-basis: 45%;
    //       padding: 1.5rem;
    //       text-align: left;
    //       color: inherit;
    //       text-decoration: none;
    //       border: 1px solid #eaeaea;
    //       border-radius: 10px;
    //       transition: color 0.15s ease, border-color 0.15s ease;
    //     }

    //     .card:hover,
    //     .card:focus,
    //     .card:active {
    //       color: #0070f3;
    //       border-color: #0070f3;
    //     }

    //     .card h3 {
    //       margin: 0 0 1rem 0;
    //       font-size: 1.5rem;
    //     }

    //     .card p {
    //       margin: 0;
    //       font-size: 1.25rem;
    //       line-height: 1.5;
    //     }

    //     .logo {
    //       height: 1em;
    //     }

    //     @media (max-width: 600px) {
    //       .grid {
    //         width: 100%;
    //         flex-direction: column;
    //       }
    //     }
    //   `}</style>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       padding: 0;
    //       margin: 0;
    //       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    //         Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    //         sans-serif;
    //     }

    //     * {
    //       box-sizing: border-box;
    //     }
    //   `}</style>
    // </div>
    <>
    <Head>
    {/* <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <link rel="stylesheet" href="/styles/main.css"/>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>


    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
    <title>Home</title>
  </Head>
        <nav class="main_nav">
        <div class="nav_item">
            <div>
                Barbershop/Salon
            </div>
        </div>
        <div class="nav_item">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Link 1</a>
            <a href="#">Contact</a>
        </div>
        <div class="nav_item">
            <a>Login</a>
            <button class="btn_primary">Book an Appointment</button>
        </div>
    </nav>
    <body>
    <div class="section_hero">
        <div class="flex_box">
            <div class="flex_item">
                <h1>EVEN MEN NEED PAMPERING</h1>
                <button class="btn_primary">Let us take care of you</button>
            </div>
        </div>
    </div>
    <div class="section_services">
        <div class="flex_box">
            <div class="flex_item">
                <h2>Some of the things we can do for you.</h2>
            </div>
            <div class="flex_box_nested">
                <div class="flex_item">
                    <div class="flex_img"></div>
                    <div class="flex_subitem">
                        <h2>Cutting & Styling</h2>
                        <p>Just tell us the hair you want or feel you want to get and we'll make it happen. We can only
                            reduce hair.</p>
                        <ul>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                        </ul>
                        <p>*footernotes</p>
                    </div>
                </div>
                <div class="flex_item">
                    <div class="flex_subitem">
                        <h2>Shave</h2>
                        <p>Reveal what was once obscured by keratin folicles grown through wear and tear. Maybe the
                            wildlife preserve could use some housekeeping to get things nice and clean.</p>
                        <ul>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                        </ul>
                        <p>*footernotes</p>
                    </div>
                    <div class="flex_img"></div>
                </div>
                <div class="flex_item">
                    <div class="flex_img"></div>
                    <div class="flex_subitem">
                        <h2>Cutting & Styling</h2>
                        <p>Breakup? Personal revelation? Perhaps curiosity? Coming out celebration? Well we might have
                            the color for that.</p>
                        <ul>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                            <li><span>item</span><span>000.00</span></li>
                        </ul>
                        <p>*footernotes</p>
                    </div>
                </div>
            </div>
            <div class="flex_item">
                <button class="btn_primary">View More...</button>
            </div>
        </div>
    </div>
    <div class="section_testimonials">
        <div class="flex_box">
            <div class="flex_item">
                <h2>Here's what our customers had to say</h2>
            </div>
            <div class="flex_item">
                <div class="flex_box_nested">
                    <div class="flex_item">
                        <p>Fantastic Experience</p>
                        <span>-Jake Ponce</span>
                    </div>
                    <div class="flex_item">
                        <p>Will definitely be my new go-to</p>
                        <span>-William Salamanca</span>
                    </div>
                    <div class="flex_item">
                        <p>i feel like a new man</p>
                        <span>-Dennis Quirino</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section_hero section_hero02">
        <div class="flex_box">
            <div class="flex_item">
                <h1 class="hero_title02">Grab a seat. At a later date of course</h1>
                <button class="btn_primary">Book that appointment</button>
            </div>
        </div>
    </div>
</body>

<footer class="main_footer">
    <div class="flex_box">
        <div class="flex_item">
            <h2>Barbers</h2>
        </div>
        <div class="flex_item">
            <span>+63 917 683 5431 - 02 8 351 5649</span>
        </div>
        <div class="flex_item">
            <span>Ramdp, address preferrably in BGC, Makati CBD Villages, Ortigas, Nuvali, Araneta Center, etc. Metro,
                Philippines</span>
        </div>
        <div class="flex_item">
            <a href="#"><button class="btn-ecl"><i class="bi bi-instagram"></i></button></a>
            <a href="#"><button class="btn-ecl"><i class="bi bi-twitter"></i></button></a>
            <a href="#"><button class="btn-ecl"><i class="bi bi-facebook"></i></button></a>
        </div>
    </div>
</footer>
    </>
  )
}
