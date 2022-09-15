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
export default function appointmentStep1({updateRefCode, childToParent1}) {
    const { classes } = useStyles();
    const [chip1State, setChip1State] = React.useState("");

    // const [active, setActive] = React.useState(1);
    // const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
    // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const [step1a, setStep1a] = React.useState(0);
    const [step1b, setStep1b] = React.useState(0);

    React.useEffect(() => {
        console.log(step1a, '<<setp1int');
        console.log(step1b, '<<setp1int');
    })



    const boxStyle = {
        width: '70%',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '1rem 0',
      };

    
     const chip1 = (e) =>{
        setChip1State(e);
        setStep1a(e);
        // console.log(step1a, '<<setp1');
    }
    
    const chip2 = (e) =>{
        setStep1b(e);
        // console.log(step1b, '<<setp1');
        childToParent1({chip1service:step1a, chip2service:e});
        

    }

    const chip1val = [{"chip1":"Cutting / Styling"}, {"chip1":"Shave"}, {"chip1":"Color"}, {"chip1":"Treatments"}];

    let chip2val = [];

    //chip1State
    if(chip1State != ""){
        chip2val = [{"chip2":chip1State.concat("Hair Cut")}, {"chip2":chip1State.concat("Hair Cut + Rinse")}, {"chip2":chip1State.concat("Hair Cut + Foot Massage WTF?")}]
    }

    const dynamiChip = () => {

        //  return (<>
        //  </>);
        chip2val.map(function(item, index){
            return (<Chip key={item.chip2} size="xl" classNames={classes} value={item.chip2}>{item.chip2}</Chip>)
      });

    }


    return (
        
        <Box
          sx={boxStyle}
        >
          <Text>Fancy something for you?</Text>
          <Box>
        <Text></Text>


          <Chip.Group position="center" name ="chip1" onChange={ (e) => chip1(e) } >
          {chip1val.map(function(item, index){
            return (<Chip key={item.chip1} size="xl" classNames={classes} value={item.chip1}>{item.chip1}</Chip>)}
            )}
            {/* <Chip size="xl" classNames={classes} value="Cutting / Styling">Cutting / Styling</Chip>
            <Chip size="xl" classNames={classes} value="Shave">Shave</Chip>
            <Chip size="xl" classNames={classes} value="Color">Color</Chip>
            <Chip size="xl" classNames={classes} value="Treatments">Treatments</Chip> */}
        </Chip.Group>

        <Chip.Group position="center" name="chip2" onChange={ (e) => chip2(e) } >
            {/* <Chip value="Hair Cut">Hair Cut</Chip>
            <Chip value="Hair Cut + Rinse">Hair Cut + Rinse</Chip>
            <Chip value="Hair Cut + Foot Massage WTF?">Hair Cut + Foot Massage WTF?</Chip> */}
            {chip2val.map(function(item, index){
                return (<Chip key={item.chip2} size="xl" classNames={classes} value={item.chip2}>{item.chip2}</Chip>)}
                )}
                {/* <dynamiChip/> */}
        </Chip.Group>
          </Box>
        </Box>
      );
    }
//   export default appointmentStep1;