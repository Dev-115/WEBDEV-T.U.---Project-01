import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, ActionIcon, Select } from '@mantine/core';
import { set, useForm } from "react-hook-form";

const barberModal = (appointmentCode) => {
    const router = useRouter();
    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);

    const [selectbranch, setselectbranch] = React.useState(null);
    const [selectDay, setselectDay] = React.useState(null);

    const onSubmit = async (data) => {

        data["sql"] = "UPDATE `barberlist` SET `FK_branchId` = ?, `barberName` = ? WHERE `barberlist`.`barberID` = ?";
        data["valuesParams"] = [selectbranch, data['firstname'], appointmentCode.children];

        console.log('password encryption>>', data);


        const JSONdata = JSON.stringify(data)

        if (true) {//add validation
            const endpoint = 'http://localhost:3000/api/dbcall/appointmentCall';

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,

            }
            const response = await fetch(endpoint, options);

            const result = await response.json();
            // const mymessage = JSON.stringify(result);
            const mymessage = JSON.stringify(result);


            alert(mymessage);

        } else {
            alert("Robot 🤖");
        }

    }

    return (
        <div>
            <div>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => setShowModal1(true)}>Branch options</Button>
            </div>
            {showModal1 ? (<div >
                <ActionIcon onClick={() => setShowModal1(false)}>X
                </ActionIcon>
                <h3>Update barber</h3>
                <form className="register_container" onSubmit={handleSubmit(onSubmit)} method="post">
                    <div className="register_item">
                    </div>
                    <div className="register_item">
                        <div className="register_subitem">
                            <input placeholder="Barber Name" type="text"{...register("firstname", { required: "You must enter a firstname" })} />
                            {errors.firstname && <p>{errors.firstname.message}</p>}
                        </div>
                    </div>
                    <div className="register_item">
                        <div className="register_subitem">
                            <Select
                                label="Branch"
                                placeholder="Pick one"
                                data={[
                                    { value: 1, label: 'main' },
                                    { value: 2, label: 'sub' },
                                ]}
                                onChange={(e) => setselectbranch(e)}
                            />

                        </div>
                    </div>
                    <Select
                        label="Day off"
                        placeholder="Pick one"
                        data={[
                            { value: "sun", label: "sun" },
                            { value: "mon", label: "mon" },
                            { value: "tue", label: "tue" },
                            { value: "wen", label: "wen" },
                            { value: "thu", label: "thu" },
                            { value: "fri", label: "fri" },
                            { value: "sat", label: "sat" },
                        ]}
                        onChange={(e) => setselectDay(e)}

                    />
                    <div className="register_item">
                        <button className="btn_primary" type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
            ) : null}
        </div>

    )
}

export default barberModal