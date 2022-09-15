import { useRouter } from "next/router";
import React from "react";
import AppointmentStepFinal from "../components/appointmentFinal";
import HeaderComponent from '../components/headercomponent'
import NavComponent from "../components/navBar";
import Link from 'next/link';


import { Button, Box, Stepper } from "@mantine/core"
let renderCount = 0;

export default function appointmentConfirmPage() {

  renderCount += 1;
  console.log(`${appointmentConfirmPage.name}. renderCount: `, renderCount);

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

  return (
    <>
      <HeaderComponent>Book Appointment</HeaderComponent>
      <NavComponent />
      <div className="section_appointment">
        <h1>We’ll see you soon</h1>
        <div className="flex_box">
          <div className="flex_item">
            <Stepper className="flex_subitem" active={5} breakpoint="sm">
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
