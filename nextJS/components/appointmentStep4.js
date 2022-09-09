import { Select  } from '@mantine/core';

import dayjs from 'dayjs';
import React from "react";

 export default function ({childToParent4}) {
    // const now = new Date();
    // const newDateObj = new Date(now.getTime() + 60000);

    // const now = new Date();
    // const then = dayjs(now).add(30, 'minutes').toDate();
    // const [value, setValue] = React.useState([Date, Date]);

    // console.log(now)
    // const [value, setValue] = React.useState([Date, Date])([now, then]);
  
    const picDNT = (e) =>{
        // setStep2(e);
        // childToParent({dateAppoint:e, dateDNT:null});
        // console.log(e);
        // childToParent4({timeAppoint:e});
        childToParent4({timeAppoint: e});

    }


    return (
        <>
    {/* {setValue([now, now])} */}
    <Select
                data={[{ value: '1:00-2:00PM', label: '1:00-2:00PM' }, { value: '2:00-3:00PM', label: '2:00-3:00PM' }, { value: '4:00-5:00PM', label: '4:00-5:00PM' }, { value: '6:00-7:00PM', label: '6:00-7:00PM' }]}
                placeholder="Pick one"
                label="Select your Appointment Time"
                description="please be on time "
                name="imeee"
                withAsterisk
                onChange={ (e) => picDNT(e) }
                
            />
        </>
    );
  }