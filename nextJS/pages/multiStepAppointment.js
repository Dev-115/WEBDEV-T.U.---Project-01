import { useRouter } from "next/router";
import React from "react";

import AppointmentStep1 from '../components/appointmentStep1';
import AppointmentStep2 from '../components/appointmentStep2';
import AppointmentStep3 from '../components/appointmentStep3';
import AppointmentStep4 from '../components/appointmentStep4';
import AppointmentStep5 from '../components/appointmentStep5';
import AppointmentStepFinal from "../components/appointmentFinal";

import { Button, Box, Stepper, Breadcrumbs, Anchor } from "@mantine/core"
let renderCount = 0;

export default function Index2Page() {
    
        renderCount += 1;
        console.log(`${Index2Page.name}. renderCount: `, renderCount);

const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    employment_status: null
  });

const [page, setPage] = React.useState(0);
const handleBack = () => {
     setPage(page - 1);
}

function handleSubmit () {
    // if (page === 0) {
    //     if (formData.name === '' || formData.name.length <= 1) {
    //         return alert('Please enter your name');
    //       } else {
    //         setPage(page + 1);
    //         console.log(formData);
    //       }
    //   } else if (page === 1) {
    //     if (formData.email === '' || !formData.email.includes('@')) {
    //         return alert('Please enter a valid email');
    //       } else if (!formData.employment_status) {
    //         return alert('Please select your employment status');
    //       } else {
    //         setPage(page + 1);
    //         console.log(formData);
    //       }
    //   } else if (page === 2) {
    //     // set page === 0 , and clear fields
    //   } else setPage(page + 1);
    setPage(page + 1);
  }

  const items = [
    { title: 'Home', href: '#' },
    { title: 'Logged in', href: '#' },
    { title: 'Appointment', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

const conditionalComponent = () => {
    switch (page) {
        case 0:
            return <AppointmentStep1 />;
        case 1:
           return <AppointmentStep2 />;
        case 2:
           return <AppointmentStep3 />;
        case 3:
            return <AppointmentStep4 />;
        case 4:
            return <AppointmentStep5 />;
        case 5:
            return <AppointmentStepFinal />;
        default:
           return <AppointmentStep1 />;
       }
  }; 
  return (
    <>
    <Box>
    <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    <Stepper active={page} onStepClick={setPage} breakpoint="sm">
            <Stepper.Step label="Service" description="Select an service"></Stepper.Step>
            <Stepper.Step label="Barber" description="Select a prefered stylist?"></Stepper.Step>
            <Stepper.Step label="Date" description="Select a date"></Stepper.Step>
            <Stepper.Step label="Time" description="Select a Time"></Stepper.Step>
            <Stepper.Step label="One Last Look" description="Check Details"></Stepper.Step>
        <Stepper.Completed>
        </Stepper.Completed>
      </Stepper>
        {conditionalComponent()}
        <Button onClick={handleSubmit}>
        { page === 0 || page < 5 ? "Next" : "Submit" }
      </Button>
        {
        page > 0 && <Button onClick={handleBack}>Back</Button>
        }
    </Box>
    </>
  );
}
