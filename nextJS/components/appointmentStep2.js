import React from "react";
import { Box, Title, Text, Switch, NativeSelect } from '@mantine/core';

const boxStyle = {
    width: '70%',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '1rem 0',
  };

function appointmentStep2() {
    const [active, setActive] = React.useState(2);
    const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    return (
      <Box
        sx={boxStyle}
      >
        <Text>whats the stylist's name</Text>
        <Box
          sx={{
            margin: '1rem 0',
          }}
        >
            <Switch
            label="AM / PM"
            />
            <NativeSelect
                data={[{ value: '1', label: 'NAMe' }, { value: '2', label: 'Runes' }, { value: '2', label: 'sky' }, { value: '2', label: 'powdser' }]}
                placeholder="Pick one"
                label="Select your favorite Barber"
                description="the stylist's name"
                // error="Please select"
                withAsterisk
            />
          {/* <TextInput
            placeholder="John Doe"
            required
          /> */}
        </Box>
      </Box>
    );
  }
  export default appointmentStep2;