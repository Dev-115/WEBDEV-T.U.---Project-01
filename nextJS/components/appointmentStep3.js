import { DatePicker } from '@mantine/dates';
import { Title, Switch, Chip } from '@mantine/core';
import React from "react";



function appointmentStep3({ updateRefCode, childToParent3 }) {

    const [dNT, setDNT] = React.useState("AM");

    // const reff = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        console.log(dNT);
    })

    const picDNT = (e) => {
        // setStep3(e.target.checked);
        if (e.target.checked) {
            setDNT("PM");
        } else {
            setDNT("AM");

        }
        console.log(dNT, 'awea', e.target.checked)
    }

    const datepick = (e) => {
        // setStep2(e);
        // childToParent({dateAppoint:e, dateDNT:null});
        // console.log(e);
        childToParent3({ dateAppoint: e, ampm: dNT });

    }

    const [chipselector, setchipselector] = React.useState(false);

    return (
        <div className='flex_subitem'>
            <div className='flex_nested_title'>
                <div className='flex_nested_title_item'>
                    <h1>Let’s set that date of ours</h1>
                </div>
                <div className='flex_nested_title_item'>
                    <Chip
                        checked={chipselector}
                        key={"item.chip1"}
                        onChange={(e) => setchipselector(!chipselector)}
                        value={"item.chip1"}>{"AM"}
                    </Chip>
                    <Chip
                        checked={!chipselector}
                        key={"item.chip2"}
                        onChange={(e) => setchipselector(!chipselector)}
                        value={"item.chip2"}>{"PM"}
                    </Chip>
                </div>
            </div>
            <div className='flex_nested_box'>
                <DatePicker
                    placeholder="Appointment Date"
                    withAsterisk
                    amountOfMonths={2}
                    onChange={(e) => datepick(e)}
                />
            </div>
        </div>
    )
}
export default appointmentStep3;
// Old
// label="Event date"
// <Switch
//                     label="AM / PM"
//                     onChange={(e) => picDNT(e)} />
//                 <DatePicker placeholder="Pick date" label="Event date" withAsterisk
//                     onChange={(e) => datepick(e)} />
// To Add
// <DatePicker placeholder="Pick date" label="Event date" withAsterisk amountOfMonths={3} excludeDate={(date) => date.getTime() === new Date('2022-09-30T00:00').getTime() || date.getTime() === new Date('2022-09-13T00:00').getTime()}
//     onChange={ (e) => datepick(e) }/>
// <Chip checked={chipselector} key={"item.chip1"} size="xl" classNames={classes} onChange={ (e) => setchipselector(!chipselector) } value={"item.chip1"}>{"AM"}</Chip>
//         <Chip checked={!chipselector} key={"item.chip2"} size="xl" classNames={classes} onChange={ (e) => setchipselector(!chipselector) } value={"item.chip2"}>{"PM"}</Chip>