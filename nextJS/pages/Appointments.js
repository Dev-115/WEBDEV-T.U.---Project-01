import HeaderComponent from '../components/headercomponent'
import NavComponent from '../components/navBar';
import { Card, Text, Group, Chip, Box, Aside } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import TestModals from '../components/testModal';

export default function apppointmentsPage({ apppointments, pastAppointment, futureAppointment }) {

    const data = [{ "name": "test1", "id": 1 }, { "name": "test2", "id": 2 }];

    const state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer' },
            { id: '2', name: 'Hill', user_type: 'Designer' }
        ]
    };

    let updatedValue = {
        serviceCategory: 'hair cut', serviceSelection: 'shave n cutt', staffBarber: "samuel", dateAppointment: 'Thu Sep 08 2022 00:00:00 GMT+0800 (China Standard Time)', dateDNT: "AM", timeAppoint: '6:00-7:00PM',
    }


    const DisplayAppointment = (appointmentProps) => {
        console.log(appointmentProps.appointmentProps);
        if (appointmentProps.appointmentProps.message != '123') {
            return (appointmentProps.appointmentProps.map(function (item, index) {
                return (
                    <Box key={item.appointmentID}>
                        {/* <li key={idx}>{d.name}</li> */}
                        <Card shadow="sm" p="lg" radius="md" withBorder >

                            <Group position="apart" mt="md" mb="xs">
                                {/* <Text weight={500}>Service Chip</Text> */}
                                <Chip checked={true} variant="filled">{item.serviceName}</Chip>
                                <h6>PRICE : {item.servicePrice}</h6>
                            </Group>

                            <Text size="sm" color="dimmed">
                                Appointment for jeremy de guszman your Barber is {item.barberName} at address of shop on {item.time} at {item.date}</Text>

                            <TestModals>{item.appointmentID}</TestModals>

                        </Card>

                    </Box>)
            }))

        } else {
            return ('no appointments')
        }

    }


    const DisplayOldAppointment = (appointmentProps) => {
        // console.log(appointmentProps.appointmentProps);
        if (appointmentProps.appointmentProps.message != '123') {
            return (appointmentProps.appointmentProps.map(function (item, index) {
                return (
                    <Box key={item.time}>
                        {/* <li key={idx}>{d.name}</li> */}
                        <Card shadow="sm" p="lg" radius="md" withBorder >

                            <Group position="apart" mt="md" mb="xs">
                                {/* <Text weight={500}>Service Chip</Text> */}
                                <Chip checked={true} variant="filled">{item.pickedService}</Chip>
                                <h6>PRICE : {item.price}</h6>
                            </Group>

                            <Text size="sm" color="dimmed">
                                Appointment for jeremy de guszman your Barber is {item.pickedBarber} at address of shop on {item.pickedTime} at {item.pickedDate}</Text>

                        </Card>

                    </Box>)
            }))

        } else {
            return ('no appointments')
        }

    }


    return (
        <>
            <HeaderComponent>Appointments</HeaderComponent>
            <NavComponent />
            <br /><br />
            <h1>Here’s your Appointment</h1>soon appointments
            <DisplayAppointment appointmentProps={apppointments} />
            <div>old appointment
                {/* <DisplayOldAppointment appointmentProps={pastAppointment} /> */}
            </div>

            <div>future appointment
                {/* <DisplayAppointment appointmentProps={futureAppointment} /> */}
            </div>

        </>
    )
}

export async function getServerSideProps(context) {

    let credData = [];
    credData['refcon'] = "%%";

    const valuesParams = [credData.refcon];

    // const valuesSqlSoon = "SELECT * FROM `appointmentfinal` WHERE appointmentfinal.referenceCode LIKE ?";
    // const valuesSqlSoon = "  SELECT * FROM `appointmentfinal` WHERE appointmentfinal.pickedDate > DATE(NOW()) ORDER BY pickedDate ASC LIMIT 1";
    const valuesSqlSoon = "SELECT barberlist.barberName, service.serviceName, service.servicePrice, service.serviceDuration, dateappointment.date, timeappointment.time, finalappointment.appointmentID FROM finalappointment INNER JOIN barberlist ON finalappointment.FK_barberListId=barberlist.barberID INNER JOIN service ON finalappointment.FK_serviceId=service.serviceID INNER JOIN dateappointment ON finalappointment.FK_dateId=dateappointment.dateID INNER JOIN timeappointment ON finalappointment.FK_timeId=timeappointment.timeID;";


    const valuesSqlPast = "SELECT * FROM `appointmentfinal` WHERE appointmentfinal.pickedDate < DATE(NOW())";
    const valuesSqlFuture = "SELECT * FROM `appointmentfinal` WHERE appointmentfinal.pickedDate > DATE(NOW())";

    var datasoon = {
        "referenceCode": "",
        "sql": valuesSqlSoon,
        "valuesParams": valuesParams,
    };
    const JSONdatasoon = JSON.stringify(datasoon);

    var datapast = {
        "referenceCode": "",
        "sql": valuesSqlPast,
        "valuesParams": valuesParams,
    };
    const JSONdatapast = JSON.stringify(datapast);

    var datafuture = {
        "referenceCode": "",
        "sql": valuesSqlFuture,
        "valuesParams": valuesParams,
    };
    const JSONdatafuture = JSON.stringify(datafuture);


    const res = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
        method: 'POST',
        body: JSONdatasoon,
        headers: { "Content-Type": "application/json" }
    })

    const res2 = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
        method: 'POST',
        body: JSONdatapast,
        headers: { "Content-Type": "application/json" }
    })

    const res3 = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
        method: 'POST',
        body: JSONdatafuture,
        headers: { "Content-Type": "application/json" }
    })


    const apppointments = await res.json();
    const pastAppointment = await res2.json();
    const futureAppointment = await res3.json();


    return {
        props: {
            apppointments, pastAppointment, futureAppointment
        },
    }
}