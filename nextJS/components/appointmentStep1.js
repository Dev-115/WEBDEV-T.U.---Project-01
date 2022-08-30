import { Box, Stepper, Group, Button, Text, Chip, createStyles } from '@mantine/core';
import React from "react";

const boxStyle = {
    width: '70%',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '1rem 0',
  };

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

function appointmentStep1() {
    const { classes } = useStyles();
    const [active, setActive] = React.useState(1);
    const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <Box
          sx={boxStyle}
        >
          <Text>Fancy something for you?</Text>
          <Box>
          <Chip.Group position="center">
            <Chip size="xl" classNames={classes} value="1">Cutting / Styling</Chip>
            <Chip size="xl" classNames={classes} value="2">Shave</Chip>
            <Chip size="xl" classNames={classes} value="3">Color</Chip>
            <Chip size="xl" classNames={classes} value="4">Treatments</Chip>
        </Chip.Group>

        <Chip.Group position="center">
            <Chip value="1">Hair Cut</Chip>
            <Chip value="2">Hair Cut + Rinse</Chip>
            <Chip value="3">Hair Cut + Foot Massage WTF?</Chip>
        </Chip.Group>


          
          </Box>
        </Box>
      );
    }
  export default appointmentStep1;