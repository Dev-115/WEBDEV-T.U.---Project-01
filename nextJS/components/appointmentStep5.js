import { Text, Title, Chip } from '@mantine/core';

function appointmentStep5({ parentToChild }) {
    console.log(parentToChild);
    let dataFull = parentToChild.dateAppointment.toString();
    let datashort = dataFull.substring(0, 15);

    return (
        <div className='flex_subitem'>
            <div className='flex_summary_box'>
                <h1>Does this sound right?</h1>
                <div className='flex_summary_item'>
                    <p>Appointment for jeremy de guszman</p>
                    <p>{parentToChild.serviceSelection} P 500.00</p>
                    <p>Your barber is {parentToChild.staffBarber}</p>
                    <p>at address of shop on {parentToChild.timeAppoint}</p>
                    <p>at {datashort}</p>
                </div>
            </div>
        </div>
    );
}
export default appointmentStep5;