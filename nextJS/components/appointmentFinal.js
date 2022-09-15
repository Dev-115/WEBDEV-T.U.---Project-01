import { Text, Title } from '@mantine/core';

function appointmentStepFinal() {
    return (
        <div className='flex_subitem'>
            <h1>You're all set!</h1>
            <div className='flex_summary_box'>
                <div className='flex_summary_item'>
                    <p>Just in case things go sideways, here’s your apppointment code</p>
                    <h2>XR5V SR67</h2>
                </div>
                <div className='flex_summary_item'>
                    <p>Our staff should see your reservation very soon.</p>
                    <p>
                        Check your inbox for the appointment email from us.
                        If you have any questions, send us an email at
                    </p>
                    <p>hello@barbershop.com</p>
                    <p>You can contact us through</p>
                    <p>(02) 923-2342 or (+63) 983-233-0092</p>
                </div>
            </div>
        </div>
    );
}
export default appointmentStepFinal;