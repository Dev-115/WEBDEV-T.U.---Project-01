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

export default function multiStepPage({ serviceChips }) {

    renderCount += 1;
    console.log(`${multiStepPage.name}. renderCount: `, renderCount);


    const [page, setPage] = React.useState(0);
    const handleBack = () => {
        setPage(page - 1);
    }

    const history = useRouter();
    const updateReference = history.query.referenceCode;

    // const what = async () =>{
    //     var data = {
    //         "referenceCode" : history.query.referenceCode,
    //       };
    //     const JSONdata = JSON.stringify(data);


    //     const res = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
    //         method: 'POST',
    //         body: JSONdata,
    //         headers: { "Content-Type": "application/json" }
    //     })

    //     const apppointments = await res.json();
    //     // const apppointments = context.params;

    // }

    const [shopCart, setShopCart] = React.useState({});

    if (renderCount == 2) {
        setShopCart(shopCart => ({
            ...shopCart,
            ...history.query
        }));
    }


    const childToParent1 = (childdata) => {

        let updatedValue = {
            serviceCategory: childdata.chip1service, serviceSelection: childdata.chip2service,
        }

        setShopCart(shopCart => ({
            ...shopCart,
            ...updatedValue
        }));
    }


    const childToParent2 = (childdata) => {

        let updatedValue = {
            staffBarber: childdata.barberName,
        }

        setShopCart(shopCart => ({
            ...shopCart,
            ...updatedValue
        }));
    }


    const childToParent3 = (childdata) => {

        let updatedValue = {
            dateAppointment: childdata.dateAppoint, dateDNT: childdata.ampm,
        }

        setShopCart(shopCart => ({
            ...shopCart,
            ...updatedValue
        }));
    }


    const childToParent4 = (childdata) => {

        let updatedValue = {
            timeAppoint: childdata.timeAppoint,
        }

        setShopCart(shopCart => ({
            ...shopCart,
            ...updatedValue
        }));
    }

    const childToParent5 = (childdata) => {

        let updatedValue = {
            dateAppointment: childdata.dateAppoint, dateDNT: childdata.ampm,
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

        console.log('Page number>>', page);
        console.log('data details>>', shopCart);
        //add validation here
        if (!shopCart.serviceCategory != undefined) {
            setPage(page + 1);

        }


        if (page == 4) {
            history.push("/appointmentConfirm");
        }

    }


    const handleAppointmentReg = async (ee) => {

        if (updateReference !== undefined) {
            console.log("updatePath", updateReference);

            var data = {
                "sql": "UPDATE `appointmentfinal` SET `pickedService` = ?, `price` = ?, `pickedBarber` = ?, `pickedDate` = ?, `pickedTime` = ?, `pickedBranch` = ? WHERE `appointmentfinal`.`referenceCode` = ? ;",
                "referenceCode": updateReference,
                "pickedService": shopCart.serviceSelection,
                "price": 500,
                "pickedBarber": shopCart.staffBarber,
                "pickedDate": shopCart.dateAppointment,
                "pickedTime": shopCart.timeAppoint,
                "pickedBranch": 1,
            };

        } else {

            var uniq = 'ap' + (new Date()).getTime() + Math.random().toString(16).slice(2);
            console.log("insertPAth", updateReference);


            var data = {
                "sql": "INSERT INTO `appointmentfinal` (`pickedService`, `price`, `pickedBarber`, `pickedDate`, `pickedTime`, `pickedBranch`, `referenceCode`) VALUES (?, ?, ?, ?, ?, ?, ?);",
                "referenceCode": uniq,
                "pickedService": shopCart.serviceSelection,
                "price": 500,
                "pickedBarber": shopCart.staffBarber,
                "pickedDate": shopCart.dateAppointment,
                "pickedTime": shopCart.timeAppoint,
                "pickedBranch": 1,
            };
        }

        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = './api/dbcall/appointmentInsert'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);



        const result = await response.json();

        if (result == "Appointment has been registred") {
            history.push("/appointmentConfirm");
        }
        // const mymessage = JSON.stringify(result);

        // alert(mymessage);
    }

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <AppointmentStep1 updateRefCode={updateReference} childToParent1={childToParent1} chipProp={serviceChips} />;
            case 1:
                return <AppointmentStep2 updateRefCode={updateReference} childToParent2={childToParent2} />;
            case 2:
                return <AppointmentStep3 updateRefCode={updateReference} childToParent3={childToParent3} />;
            case 3:
                return <AppointmentStep4 updateRefCode={updateReference} childToParent4={childToParent4} />;
            case 4:
                return <AppointmentStep5 parentToChild={shopCart} />;
            // case 5:
            //     return <AppointmentStepFinal />;
            default:
                return <AppointmentStep1 />;
        }
    };

    return (
        <>
            <HeaderComponent>Appointment</HeaderComponent>
            <NavComponent />
            <div className="section_appointment">
                <h1>Book An Appointment!</h1>
                <div className="flex_box">
                    <form className="flex_item" onSubmit={handleSubmit2} method="post">
                        <Stepper className="flex_subitem" active={page} onStepClick={setPage} breakpoint="sm">
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
                    <div className="flex_item">
                        {page === 0 || page < 4 ? <Button className="btn_primary" onClick={handleSubmit2}>Next</Button> : <Button className="btn_primary" onClick={handleAppointmentReg}>Submit</Button>}
                        {/* {page <= 4 && formButton(page)} */}
                        {
                            page > 0 && <Button className="btn_secondary" onClick={handleBack}>Back</Button>
                        }
                    </div>
                </div>
            </div>
        </>)
};


export async function getServerSideProps(context) {
    let credData = [];
    credData['refcon'] = "%%";

    const valuesParams = [credData.refcon];
    const valuesSqlSoon = "  SELECT * FROM `appointmentfinal` WHERE appointmentfinal.pickedDate > DATE(NOW()) ORDER BY pickedDate ASC LIMIT 1";

    var datasoon = {
        "referenceCode": "",
        "sql": valuesSqlSoon,
        "valuesParams": valuesParams,
    };
    const JSONdatasoon = JSON.stringify(datasoon);

    const res = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
        method: 'POST',
        body: JSONdatasoon,
        headers: { "Content-Type": "application/json" }
    })
    const serviceChips = await res.json();

    return {
        props: {
            serviceChips,
        },
    }
}