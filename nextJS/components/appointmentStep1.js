import { Box, Stepper, Group, Button, Text, Chip, createStyles } from '@mantine/core';
import React from "react";


export default function appointmentStep1({ updateRefCode, childToParent1 }) {
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



  const chip1 = (e) => {
    setChip1State(e);
    setStep1a(e);
    // console.log(step1a, '<<setp1');
  }


  const chip1val = [{ "chip1": "Cutting / Styling" }, { "chip1": "Shave" }, { "chip1": "Color" }, { "chip1": "Treatments" }];

  let chip2val = [];

  //chip1State
  if (chip1State != "") {
    chip2val = [{ "chip2": chip1State.concat("Hair Cut") }, { "chip2": chip1State.concat("Hair Cut + Rinse") }, { "chip2": chip1State.concat("Hair Cut + Foot Massage WTF?") }]
  }

  const dynamiChip = () => {

    //  return (<>
    //  </>);
    chip2val.map(function (item, index) {
      return (<Chip key={item.chip2} size="xl" classNames={classes} value={item.chip2}>{item.chip2}</Chip>)
    });

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
        <Chip.Group position="center" name="chip1" className='flex_nested_item' onChange={(e) => chip1(e)} >
          {chip1val.map(function (item, index) {
            return (<Chip key={item.chip1} className="flex_nested_subitem" value={item.chip1}>{item.chip1}</Chip>)
          }
          )}
          {/* <Chip size="xl" classNames={classes} value="Cutting / Styling">Cutting / Styling</Chip>
                <Chip size="xl" classNames={classes} value="Shave">Shave</Chip>
                <Chip size="xl" classNames={classes} value="Color">Color</Chip>
                <Chip size="xl" classNames={classes} value="Treatments">Treatments</Chip> */}
        </Chip.Group>


        <Chip.Group name="chip2" onChange={(e) => chip2(e)} >
          {/* <Chip value="Hair Cut">Hair Cut</Chip>
                <Chip value="Hair Cut + Rinse">Hair Cut + Rinse</Chip>
                <Chip value="Hair Cut + Foot Massage WTF?">Hair Cut + Foot Massage WTF?</Chip> */}
          {chip2val.map(function (item, index) {
            return (<Chip key={item.chip2} classNames="flex_nested_subitem" value={item.chip2}>{item.chip2}</Chip>)
          }
          )}
          {/* <dynamiChip/> */}
        </Chip.Group>
      </div>
    </div>
  );
}
//   export default appointmentStep1;