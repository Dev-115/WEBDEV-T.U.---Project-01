import { useRouter } from "next/router";
import React from "react";
import AppointmentStep1 from '../components/appointmentStep1';
import AppointmentStep2 from '../components/appointmentStep2';
import AppointmentStep3 from '../components/appointmentStep3';
import AppointmentStep4 from '../components/appointmentStep4';
import AppointmentStep5 from '../components/appointmentStep5';
import AppointmentStepFinal from "../components/appointmentFinal";
import HeaderComponent from '../components/headercomponent'
import NavComponent from "../components/navBar";
import Link from 'next/link';


import { Button, Box, Stepper } from "@mantine/core"
let renderCount = 0;

export default function Index2Page() {

  renderCount += 1;
  console.log(`${Index2Page.name}. renderCount: `, renderCount);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    employment_status: null
  });

  const [page, setPage] = React.useState(5);
  const handleBack = () => {
    history.push("/multiStepAppointment")
  }
  const history = useRouter();


  function handleSubmit() {
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

    // if(page > 4 && page <= 0){
    //     setPage(page + 1);
    // }else{
    //     console.log('page>>',page)

    // }
    history.push("/")

  }

  const conditionalComponent = () => {
    switch (page) {
      // case 0:
      //     return <AppointmentStep1 />;
      // case 1:
      //    return <AppointmentStep2 />;
      // case 2:
      //    return <AppointmentStep3 />;
      // case 3:
      //     return <AppointmentStep4 />;
      // case 4:
      //     return <AppointmentStep5 />;
      // case 5:
      //     return <AppointmentStepFinal />;
      // default:
      //    return <AppointmentStep1 />;
    }
  };

  return (
    <>
      <HeaderComponent>Book Appointment</HeaderComponent>
      <NavComponent />
      <div className="section_appointment">
        <h1>We’ll see you soon</h1>
        <div className="flex_box">
          <div className="flex_item">
            <Stepper className="flex_subitem" active={page} onStepClick={setPage} breakpoint="sm">
              <Stepper.Step label="Service" description="Select an service"></Stepper.Step>
              <Stepper.Step label="Barber" description="Select a prefered stylist?"></Stepper.Step>
              <Stepper.Step label="Date" description="Select a date"></Stepper.Step>
              <Stepper.Step label="Time" description="Select a Time"></Stepper.Step>
              <Stepper.Step label="One Last Look" description="Check Details"></Stepper.Step>
              <Stepper.Completed>
              </Stepper.Completed>
            </Stepper>
            <AppointmentStepFinal />
          </div>
          <div className="flex_item">
            <Button className="btn_primary" onClick={handleSubmit}>Home</Button>
            <Button className="btn_secondary" onClick={handleBack}>Back</Button>
          </div>
        </div>
      </div>
    </>
  );
}
