import HeaderComponent from '../components/headercomponent'
import NavComponent from '../components/navBar';
import { Card, Image, Text, Badge, Button, Group, ActionIcon, Chip, Box } from '@mantine/core';
import Link from 'next/link';

export default function apppointments() {


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

    

      let updatedValue = {
        serviceCategory:'hair cut', serviceSelection:'shave n cutt',staffBarber:"samuel",dateAppointment:'Thu Sep 08 2022 00:00:00 GMT+0800 (China Standard Time)', dateDNT:"AM",timeAppoint:'6:00-7:00PM',
    }
    return (
        <>
                <HeaderComponent>Appointments</HeaderComponent>
                <NavComponent/>
                <br/><br/>
                <h1>Here’s your Appointment</h1>

                {data.map(function(item, index){
                return (
                <Box key={item.id}>
                {/* <li key={idx}>{d.name}</li> */}
                <Card shadow="sm" p="lg" radius="md" withBorder >
                <Card.Section>
                    <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    {/* <Text weight={500}>Service Chip</Text> */}
                    <Chip checked={true} variant="filled">service selected</Chip>
                    <Badge color="pink" variant="light"  rightSection={removeButton}>
                    Cancel Appointment
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                Appointment for jeremy de guszman your Barber is {updatedValue.staffBarber} 
                at address of shop on {updatedValue.timeAppoint}
                at {updatedValue.dateAppointment}</Text>

                <Button component={Link} variant="light" color="blue" fullWidth mt="md" radius="md" href={{
                    pathname: '/multiStepAppointment',
                    query: { serviceCategory:'hair cut', serviceSelection:'shave n cutt',staffBarber:"samuel",dateAppointment:'Thu Sep 08 2022 00:00:00 GMT+0800 (China Standard Time)', dateDNT:"AM",timeAppoint:'6:00-7:00PM', },
                    }}>
                    Update Appointment
                </Button>

                </Card>

                 </Box>)
                })}

        </>
    )
}