// import { Box, Button, Title, Text, TextInput  } from '@mantine/core';
import React from "react";
import { TimeRangeInput  } from '@mantine/dates';

function appointmentStep4() {
    // const now = new Date();
    // const newDateObj = new Date(now.getTime() + 60000);
    const [value, setValue] = React.useState();
    return (
        <>
         <TimeRangeInput 
            // defaultValue={new Date()}
            label="Appointment time"
            format="12"
            // value={now}
            withAsterisk
            onChange={setValue}
            clearable
            />
        </>
    );
  }
  export default appointmentStep4;