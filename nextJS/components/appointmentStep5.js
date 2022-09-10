import { Text, Title, Chip} from '@mantine/core';

function appointmentStep5({parentToChild}) {
    console.log(parentToChild);
    let dataFull = parentToChild.dateAppointment.toString();
    let datashort = dataFull.substring(0, 15);

    return (
        <>
                <Title>Does this sound right</Title>
                <Text>Appointment for jeremy de guszman</Text>
                <Chip checked={true} value="1">{parentToChild.serviceSelection}</Chip>
                <Text>your Barber is {parentToChild.staffBarber}</Text>
                <Text>at address of shop on {parentToChild.timeAppoint}</Text>
                <Text>at {datashort}</Text>



        </> 
    );
  }
  export default appointmentStep5;