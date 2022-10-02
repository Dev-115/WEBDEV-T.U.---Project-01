import React from "react";
import Link from 'next/link';
import Head from 'next/head';//heder editw
import Script from 'next/script'; // add scripts 
import LoginBtn from '../../components/login-btn';
import ReCaptcha from 'react-google-recaptcha'
import { set, useForm } from "react-hook-form";
import HeaderComponent from '../../components/headercomponent'
import NavComponent from "../../components/navBar";
import BarberModal from "../../components/barberModal";
import { Button, ActionIcon, Select } from '@mantine/core';


export default function manageBarberPage({ barberlist, branch }) {


    const recaptchaRef = React.createRef();
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [password, setpassword] = React.useState("");
    const [captchaAPI, setcaptchaAPI] = React.useState("");


    const password2 = React.useRef({});
    password2.current = watch("password");

    const [showModalcreate, setShowModalcreate] = React.useState(false);
    const [showModalform, setShowModalform] = React.useState(false);

    const [selectbranch, setselectbranch] = React.useState(null);
    // const [selectDay, setselectDay] = React.useState(null);



    const onSubmit = async (data) => {

        data["sql"] = "INSERT INTO `barberlist` (`FK_branchId`, `barberName`) VALUES (?, ?)";
        data["valuesParams"] = [selectbranch, data['firstname']];

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

    console.log(branch);

    return (
        <>
            <HeaderComponent>Manage Barber</HeaderComponent>
            <NavComponent />
            <div className="section_register">
                <div className="register_container">
                    {/* logo HERE */}
                    <h1>ManageBarber</h1>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Branch</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {barberlist.map(function (item, index) {
                                return (
                                    <tr key={item.barberID}>
                                        <td>{item.barberID}</td>
                                        <td>{item.barberName}</td>
                                        <td>{item.FK_branchId}</td>
                                        <td><BarberModal>{item.barberID}</BarberModal></td>
                                    </tr>)
                            })}

                        </tbody>
                    </table>

                    <div>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => setShowModalcreate(true)}>Add barber</Button>
                    </div>
                    {showModalcreate ? (<div >
                        <ActionIcon onClick={() => setShowModalcreate(false)}>X
                        </ActionIcon>
                        <h3>Insert of Barber details</h3>
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
                                            { value: branch[0].branchID, label: branch[0].name },
                                            { value: branch[1].branchID, label: branch[1].name },
                                        ]}
                                        onChange={(e) => setselectbranch(e)}
                                    />

                                </div>
                            </div>
                            {/* <Select
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

                                /> */}
                            <div className="register_item">
                                <button className="btn_primary" type="submit">SUBMIT</button>
                            </div>
                        </form>

                        <Button variant="light" color="orange" fullWidth mt="md" radius="md" onClick={() => { setShowModalcreate(false), setShowModalform(true) }}>Cancel appointment</Button>
                    </div>
                    ) : null}

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {

    var databarberlist = {
        "referenceCode": "",
        "sql": "SELECT * FROM `barberlist`",
        "valuesParams": [],
    };
    const JSONbarberlist = JSON.stringify(databarberlist);


    const res = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
        method: 'POST',
        body: JSONbarberlist,
        headers: { "Content-Type": "application/json" }
    })

    const barberlist = await res.json();

    var databranch = {
        "referenceCode": "",
        "sql": "SELECT * FROM `branch`",
        "valuesParams": [],
    };
    const JSONbranch = JSON.stringify(databranch);


    const res2 = await fetch("http://localhost:3000/api/dbcall/appointmentCall", {
        method: 'POST',
        body: JSONbranch,
        headers: { "Content-Type": "application/json" }
    })

    const branch = await res2.json();



    return {
        props: {
            barberlist, branch,
        },
    }

}