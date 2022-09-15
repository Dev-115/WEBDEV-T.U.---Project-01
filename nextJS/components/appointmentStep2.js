import React from "react";
import { Box, Text, Select } from '@mantine/core';

const boxStyle = {
  width: '70%',
  margin: '1rem auto',
  textAlign: 'center',
  padding: '1rem 0',
};

export default function appointmentStep2({ updateRefCode, childToParent2 }) {
  // const [active, setActive] = React.useState(2);
  // const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const [step2, setStep2] = React.useState(0);

  const chip1 = (e) => {
    // setStep2(e);
    childToParent2({ barberName: e });
    // console.log(e);

  }

  return (
    <div className='flex_subitem'>
      <h1>Prefer someone in our shop?</h1>
      <div className='flex_nested_box'>
        <Select
          data={[{ value: 'NAMe', label: 'Name' }, { value: 'Runes', label: 'Runes' }, { value: 'sky', label: 'sky' }, { value: 'powdser', label: 'powdser' }]}
          placeholder="Samuel"
          // error="Please select"
          name="eee"
          withAsterisk
          onChange={(e) => chip1(e)}

        />
      </div>
    </div>
  );
}

// Select Additional Components ========
// label="Select your favorite Barber"
// description="the stylist's name"


//   export default appointmentStep2;