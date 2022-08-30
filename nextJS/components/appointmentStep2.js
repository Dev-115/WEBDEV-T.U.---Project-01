import React from "react";
import { Box, Title, Text, TextInput } from '@mantine/core';

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
        <Text>whats your beautiful namestep2?</Text>
        <Box
          sx={{
            margin: '1rem 0',
          }}
        >
          <TextInput
            placeholder="John Doe"
            required
          />
        </Box>
      </Box>
    );
  }
  export default appointmentStep2;