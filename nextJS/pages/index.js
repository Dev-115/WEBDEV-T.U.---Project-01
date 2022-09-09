import Head from 'next/head'
import Link from 'next/link';
import HeaderComponent from '../components/headercomponent'
import NavComponent from '../components/navBar';

export default function Home() {


  return (
    <>
    {/* <Image
                  priority
                  src="/images/R.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                /> */}
  <HeaderComponent>Welcome</HeaderComponent>
  <NavComponent/>
    <main>
    <div className="section_hero">
        <div className="flex_box">
            <div className="flex_item">
                <h1>EVEN MEN NEED PAMPERING</h1>
                <button className="btn_primary">Let us take care of you</button>
            </div>
        </div>
    </div>
    <div className="section_services">
        <div className="flex_box">
            <div className="flex_item">
                <h2>Some of the things we can do for you.</h2>
            </div>
            <div className="flex_box_nested">
                <div className="flex_item">
                    <div className="flex_img"></div>
                    <div className="flex_subitem">
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
                <div className="flex_item">
                    <div className="flex_subitem">
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
                    <div className="flex_img"></div>
                </div>
                <div className="flex_item">
                    <div className="flex_img"></div>
                    <div className="flex_subitem">
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
            <div className="flex_item">
                <button className="btn_primary">View More...</button>
            </div>
        </div>
    </div>
    <div className="section_testimonials">
        <div className="flex_box">
            <div className="flex_item">
                <h2>Here's what our customers had to say</h2>
            </div>
            <div className="flex_item">
                <div className="flex_box_nested">
                    <div className="flex_item">
                        <p>Fantastic Experience</p>
                        <span>-Jake Ponce</span>
                    </div>
                    <div className="flex_item">
                        <p>Will definitely be my new go-to</p>
                        <span>-William Salamanca</span>
                    </div>
                    <div className="flex_item">
                        <p>i feel like a new man</p>
                        <span>-Dennis Quirino</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="section_hero section_hero02">
        <div className="flex_box">
            <div className="flex_item">
                <h1 className="hero_title02">Grab a seat. At a later date of course</h1>
                <button className="btn_primary">Book that appointment</button>
            </div>
        </div>
    </div>
</main>
    </>
  )
}
