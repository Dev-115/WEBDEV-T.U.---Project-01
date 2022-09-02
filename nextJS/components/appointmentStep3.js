import { DatePicker } from '@mantine/dates';
import { Title, Switch } from '@mantine/core';


function appointmentStep3() {
  return (
    <>
    <Title>Let's set that date of ours</Title>
    <Switch
            label="AM / PM"
            />
    <DatePicker placeholder="Pick date" label="Event date" withAsterisk />
    </>
  )
}
export default appointmentStep3;