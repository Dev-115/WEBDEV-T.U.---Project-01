import React from "react";
import { Box, Text, Select } from '@mantine/core';

const boxStyle = {
    width: '70%',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '1rem 0',
  };

  export default function appointmentStep2({childToParent2}) {
    // const [active, setActive] = React.useState(2);
    // const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
    // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const [step2, setStep2] = React.useState(0);

    const chip1 = (e) =>{
        // setStep2(e);
        childToParent2({barberName: e});
        // console.log(e);

    }
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
            <Select
                data={[{ value: 'NAMe', label: 'NAMe' }, { value: 'Runes', label: 'Runes' }, { value: 'sky', label: 'sky' }, { value: 'powdser', label: 'powdser' }]}
                placeholder="Pick one"
                label="Select your favorite Barber"
                description="the stylist's name"
                // error="Please select"
                name="eee"
                withAsterisk
                onChange={ (e) => chip1(e) }
                
            />
        </Box>
      </Box>
    );
  }
//   export default appointmentStep2;