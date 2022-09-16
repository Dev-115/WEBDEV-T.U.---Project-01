import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, ActionIcon } from '@mantine/core';

const TestModals = (appointmentCode) => {
    const router = useRouter();

    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);

    const deleteAppointment = async (query) => {

        var data = {
            "sql": "DELETE FROM `appointmentfinal` WHERE `appointmentfinal`.`referenceCode` = ?",
            "refcode": appointmentCode.children,
        };


        const JSONdata = JSON.stringify(data)
        const endpoint = './api/dbcall/appointmentDelete'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);

        const result = await response.json();

        const mymessage = JSON.stringify(result);

        alert(mymessage);
        router.reload(window.location.pathname);


    }

    return (
        <div>
            <div>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => setShowModal1(true)}>Change of Plans</Button>
            </div>
            {showModal1 ? (<div >
                <ActionIcon onClick={() => setShowModal1(false)}>X
                </ActionIcon>
                <h2>Change of plans?</h2>
                <h4>What do you want to do with your incoming appointment?</h4>
                {/* <Button variant="light" color="green" fullWidth mt="md" onClick={() => setShowModal2(true)}>Update appointment</Button> */}
                <Button component={Link} variant="light" color="green" fullWidth mt="md" radius="md" href={{
                    pathname: '/multiStepAppointment',
                    query: { referenceCode: appointmentCode.children },
                }}>Update appointment</Button>

                <Button variant="light" color="orange" fullWidth mt="md" radius="md" onClick={() => { setShowModal1(false), setShowModal2(true) }}>Cancel appointment</Button>
            </div>
            ) : null}

            {showModal2 ? (<div >
                <ActionIcon onClick={() => setShowModal2(false)}>X
                </ActionIcon>
                <h2>Are you Sure?</h2>
                <h4>You will lose your appointment on reference {appointmentCode.children}?</h4>

                <Button variant="light" color="red" fullWidth mt="md" radius="md" onClick={() => deleteAppointment(appointmentCode.children)}>Do it.</Button>
            </div>
            ) : null}

        </div>

    )
}

export default TestModals