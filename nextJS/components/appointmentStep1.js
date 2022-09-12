import { Box, Stepper, Group, Button, Text, Chip, createStyles } from '@mantine/core';
import React from "react";


const useStyles = createStyles((theme, _params, getRef) => ({
  label: {
    '&[data-checked]': {
      '&, &:hover': {
        backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
        color: theme.white,
      },

      [`& .${getRef('iconWrapper')}`]: {
        color: theme.white,
      },
    },
  },

  iconWrapper: {
    ref: getRef('iconWrapper'),
  },
}));

export default function appointmentStep1({ childToParent1 }) {
  const { classes } = useStyles();
  // const [active, setActive] = React.useState(1);
  // const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const [step1a, setStep1a] = React.useState(0);
  const [step1b, setStep1b] = React.useState(0);

  React.useEffect(() => {
    console.log(step1a, '<<setp1int');
    console.log(step1b, '<<setp1int');
  })


  // What Box Style?
  const boxStyle = {
    width: '70%',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '1rem 0',
  };


  const chip1 = (e) => {
    setStep1a(e);
    // console.log(step1a, '<<setp1');
  }

  const chip2 = (e) => {
    setStep1b(e);
    // console.log(step1b, '<<setp1');
    childToParent1({ chip1service: step1a, chip2service: e });


  }

  return (
    <div className='flex_subitem'>
      <h1>Fancy something for you?</h1>
      <div className='flex_nested_box'>
        <Chip.Group className='flex_nested_item' position="center" name="chip1" onChange={(e) => chip1(e)} >
          <Chip className="flex_nested_subitem" value="Cutting / Styling">Cutting / Styling</Chip>
          <Chip className="flex_nested_subitem" value="Shave">Shave</Chip>
          <Chip className="flex_nested_subitem" value="Color">Color</Chip>
          <Chip className="flex_nested_subitem" value="Treatments">Treatments</Chip>
        </Chip.Group>
        <Chip.Group className='flex_nested_item' position="center" name="chip2" onChange={(e) => chip2(e)} >
          <Chip className="flex_nested_subitem" value="Hair Cut">Hair Cut</Chip>
          <Chip className="flex_nested_subitem" value="Hair Cut + Rinse">Hair Cut + Rinse</Chip>
          <Chip className="flex_nested_subitem" value="Hair Cut + Foot Massage WTF?">Hair Cut + Foot Massage WTF?</Chip>
        </Chip.Group>
      </div>
    </div>
  );
}
//   export default appointmentStep1;