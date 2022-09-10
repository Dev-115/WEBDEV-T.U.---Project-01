import { useRouter } from "next/router";
import React from "react";
import AppointmentStep1 from '../components/appointmentStep1';
import AppointmentStep2 from '../components/appointmentStep2';
import AppointmentStep3 from '../components/appointmentStep3';
import AppointmentStep4 from '../components/appointmentStep4';
import AppointmentStep5 from '../components/appointmentStep5';
import HeaderComponent from '../components/headercomponent'
import NavComponent from "../components/navBar";


import { Button, Box, Stepper } from "@mantine/core"
let renderCount = 0;

export default function multiStepPage() {
    
        renderCount += 1;
        console.log(`${multiStepPage.name}. renderCount: `, renderCount);
        const router = useRouter()
        console.log(router.query);

const [page, setPage] = React.useState(0);
const handleBack = () => {
     setPage(page - 1);
}
const history = useRouter();

const [shopCart, setShopCart] = React.useState({});

if(renderCount == 2){
    setShopCart(shopCart => ({
        ...shopCart,
        ...router.query
    }));
}



const childToParent1 = (childdata) => {

    let updatedValue = {
        serviceCategory:childdata.chip1service, serviceSelection:childdata.chip2service,
    }

    setShopCart(shopCart => ({
        ...shopCart,
        ...updatedValue
    }));
    }


const childToParent2 = (childdata) => {

    let updatedValue = {
        staffBarber:childdata.barberName,
    }

    setShopCart(shopCart => ({
        ...shopCart,
        ...updatedValue
    }));
    }


const childToParent3 = (childdata) => {

    let updatedValue = {
        dateAppointment:childdata.dateAppoint, dateDNT:childdata.ampm,
    }

    setShopCart(shopCart => ({
        ...shopCart,
        ...updatedValue
    }));
    }


const childToParent4 = (childdata) => {

    let updatedValue = {
        timeAppoint:childdata.timeAppoint,
    }

    setShopCart(shopCart => ({
        ...shopCart,
        ...updatedValue
    }));
    }

    const childToParent5 = (childdata) => {

        let updatedValue = {
            dateAppointment:childdata.dateAppoint, dateDNT:childdata.ampm,
        }
    
        setShopCart(shopCart => ({
            ...shopCart,
            ...updatedValue
        }));
        }
    


const onSubmit = async (data) => {
    console.log(data);
    
}

const handleSubmit2 = async (data2) => {

        console.log('Page number>>',page);
        console.log('data details>>', shopCart);
        

        if(page == 4){
            history.push("/appointmentConfirm");
        }
    setPage(page + 1);

  }

const conditionalComponent = () => {
    switch (page) {
        case 0:
            return <AppointmentStep1 childToParent1={childToParent1} />;
        case 1:
           return <AppointmentStep2 childToParent2={childToParent2} />;
        case 2:
           return <AppointmentStep3 childToParent3={childToParent3}/>;
        case 3:
            return <AppointmentStep4 childToParent4={childToParent4}/>;
        case 4:
            return <AppointmentStep5 parentToChild={shopCart}/>;
        // case 5:
        //     return <AppointmentStepFinal />;
        default:
           return <AppointmentStep1 />;
       }
  }; 

  return (
    <>
        <HeaderComponent>Book Appointment</HeaderComponent>
        <NavComponent/>
    <Box>
        <form  className="" onSubmit={handleSubmit2} method="post">
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
        </form>
        {page === 0 || page < 4 ? <Button onClick={handleSubmit2}>Next</Button> : <Button onClick={handleSubmit2}>Submit</Button> }
        {/* {page <= 4 && formButton(page)} */}
        {
        page > 0 && <Button onClick={handleBack}>Back</Button>
        }
        
    </Box>
    </>
  );
}
