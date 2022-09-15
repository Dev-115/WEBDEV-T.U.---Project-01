import HeaderComponent from '../components/headercomponent'
import NavComponent from '../components/navBar';
import { Card, Image, Text, Badge, Button, Group, ActionIcon, Chip, Box } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function apppointmentsPage({ apppointments }) {

    // const [isRefreshing, setIsRefreshing] = React.useState(false);
    // const refreshData = () => {
    //   router.replace(router.asPath);
    //   setIsRefreshing(true);
    // };
    // React.useEffect(() => {
    //   setIsRefreshing(false);
    // }, [theData]);


    const removeButton = (
        <ActionIcon size="xs" color="blue" radius="xl" variant="transparent" component={Link} href="https://mantine.dev/core/">
            X
        </ActionIcon>
      );

      const data =[{"name":"test1","id":1},{"name":"test2","id":2}];

      const state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer' },
            { id: '2', name: 'Hill', user_type: 'Designer' }
        ]
    };

    console.log(apppointments)


      let updatedValue = {
        serviceCategory:'hair cut', serviceSelection:'shave n cutt',staffBarber:"samuel",dateAppointment:'Thu Sep 08 2022 00:00:00 GMT+0800 (China Standard Time)', dateDNT:"AM",timeAppoint:'6:00-7:00PM',
    }
    return (
        <>
                <HeaderComponent>Appointments</HeaderComponent>
                <NavComponent/>
                <br/><br/>
                <h1>Here’s your Appointment</h1>

                {apppointments.map(function(item, index){
                return (
                <Box key={item.referenceCode}>
                {/* <li key={idx}>{d.name}</li> */}
                <Card shadow="sm" p="lg" radius="md" withBorder >

                <Group position="apart" mt="md" mb="xs">
                    {/* <Text weight={500}>Service Chip</Text> */}
                    <Chip checked={true} variant="filled">{item.pickedService}</Chip>
                    <h6>PRICE : AMMOUNT</h6>
                    <Badge color="pink" variant="light"  rightSection={removeButton}>
                    Cancel Appointment
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                Appointment for jeremy de guszman your Barber is {item.pickedBarber} at address of shop on {item.pickedTime} at {item.pickedDate}</Text>

                {/* <Button component={Link} variant="light" color="blue" fullWidth mt="md" radius="md" href={{
                    pathname: '/multiStepAppointment',
                    query: { serviceCategory:'hair cut', serviceSelection:'shave n cutt',staffBarber:"samuel",dateAppointment:'Thu Sep 08 2022 00:00:00 GMT+0800 (China Standard Time)', dateDNT:"AM",timeAppoint:'6:00-7:00PM', },
                    }}>
                    Update Appointment
                </Button> */}

                               <Button component={Link} variant="light" color="blue" fullWidth mt="md" radius="md" href={{
                    pathname: '/multiStepAppointment',
                    query: {referenceCode: item.referenceCode},
                    }}>
                    Change of Plans
                </Button>

                </Card>

                 </Box>)
                })}

        </>
    )
}

export async function getStaticProps(context) {


    var data = {
        "referenceCode" : "",
      };
    const JSONdata = JSON.stringify(data);


    const res = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
        method: 'POST',
        body: JSONdata,
        headers: { "Content-Type": "application/json" }
    })



    const apppointments = await res.json()
    return {
        props: {
            apppointments,
        },
    }
  }