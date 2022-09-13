import { DatePicker } from '@mantine/dates';
import { Title, Switch } from '@mantine/core';
import React from "react";



function appointmentStep3({formStep, childToParent3}) {

    const [dNT, setDNT] = React.useState("AM");

    // const reff = React.useRef<HTMLInputElement>(null);
  
    React.useEffect(() => {
        console.log(dNT);
    })
    const picDNT = (e) =>{
        // setStep3(e.target.checked);
        if(e.target.checked){
            setDNT("PM");
        }else{
            setDNT("AM");

        }
        console.log(dNT, 'awea', e.target.checked)
    }

    const datepick = (e) =>{
        // setStep2(e);
        // childToParent({dateAppoint:e, dateDNT:null});
        // console.log(e);
        childToParent3({dateAppoint:e, ampm:dNT});

    }
    //excludeDate to exclude dates displayed study how to exclude certatin dates date.getTime() === new Date('2022-09-30T00:00').getTime() || date.getTime() === new Date('2022-09-13T00:00').getTime()
    
  return (
    <>
    <Title>Let's set that date of ours</Title>
    <Switch
            label= "AM / PM"
            onChange ={(e) => picDNT(e)}
            />  
    <DatePicker placeholder="Pick date" label="Event date" withAsterisk amountOfMonths={3} excludeDate={(date) => date.getTime() === new Date('2022-09-30T00:00').getTime() || date.getTime() === new Date('2022-09-13T00:00').getTime()}
    onChange={ (e) => datepick(e) }/>
    </>
  )
}
export default appointmentStep3;