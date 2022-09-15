import HeaderComponent from '../components/headercomponent'
import NavComponent from '../components/navBar';
import Link from 'next/link';

export default function link1() {


    return (
        <>
                <HeaderComponent>LINK1</HeaderComponent>
                <NavComponent/>
                
                <main><br/><br/><br/><br/><Link href={{
            pathname: '/multiStepAppointment',
            query: { serviceCategory:'hair cut', serviceSelection:'shave n cutt',staffBarber:"samuel",dateAppointment:'Thu Sep 08 2022 00:00:00 GMT+0800 (China Standard Time)', dateDNT:"AM",timeAppoint:'6:00-7:00PM', },
          }}>Appointment Edit</Link></main>
        </>
    )
}