import React from "react";
import Link from 'next/link';
import Head from 'next/head';//heder editw
import Script from 'next/script'; // add scripts 
/** strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */
import Layout from '../components/layout';
import LoginBtn from '../components/login-btn';
import ReCaptcha from 'react-google-recaptcha'
import { set, useForm } from "react-hook-form";
import HeaderComponent from '../components/headercomponent'
import NavComponent from "../components/navBar";
// let renderCount = 0;

// Encrypt
// var ciphertext = CryptoJS.AES.encrypt('sample message', process.env.CRYPTO_SECRET_KEY).toString(); 

// Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);



export default function RegisterPagePost() {


    const recaptchaRef = React.createRef();
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [password, setpassword] = React.useState("");
    const [captchaAPI, setcaptchaAPI] = React.useState("");


    const password2 = React.useRef({});
    password2.current = watch("password");
    const [humantest, sethumantest] = React.useState("");

    // renderCount += 1;
    // console.log(`${RegisterPagePost.name}. renderCount: `, renderCount);

    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }

        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        // alert(`Hey, ${email}`);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        const token = recaptchaRef.current.getValue();
        setcaptchaAPI(token);
        sethumantest(true);
    }


    const onSubmit = async (data) => {

        var CryptoJS = require("crypto-js");

        data['usertype'] = 'null';


        // Stop the form from submitting and refreshing the page.
        // event.preventDefault()
        var uniq = 'cl' + (new Date()).getTime() + Math.random().toString(16).slice(2);

        var notwords = data.password;
        console.log(process.env.CRYPTO_SECRET_KEY);
        var cipherpassword = CryptoJS.AES.encrypt(data.password, 'TeamMAGG').toString();

        // Get data from the form.
        data["sql"] = "INSERT INTO `user` (`id`, `name`, `email`, `Password`) VALUES (?, ?, ?, ?);";// ('sad', 'sad', 'sad', 'sad', '2022-08-22 23:50:47.000', 'sad');
        data["sqlParamid"] = uniq;
        data["sqlParamname"] = data.Username;
        data["sqlParamemail"] = data.emailadd;
        data["sqlParamPassword"] = cipherpassword;

        console.log('password encryption>>', cipherpassword);


        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = './api/dbcall/dbRegisterUser'

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

        // Send the form data to our forms API on Vercel and get a response.
        if (humantest == true) {

            const endpoint2 = './api/dbcall/dbRegisterUser';

            // Form the request for sending data to the server.
            const options2 = {
                // The method is POST because we are sending data.
                method: 'POST',
                // Tell the server we're sending JSON.
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const captchaRefapi = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6Le6_lQeAAAAAKAzGT1KQC6xvXKIsv56SijGPSUT&response=${captchaAPI}`);
            if (captchaRefapi.ok) {
                const response = await fetch(endpoint, options);


                const result = await response.json();
                const mymessage = JSON.stringify(result);

                alert(mymessage);
            } else {
                console.log(captchaRef);
                alert(`please recaptcha`);
            }

        } else {
            alert("Robot 🤖");
        }

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.

    }

    return (
        <>
            <HeaderComponent>Register</HeaderComponent>
            <NavComponent />
            <div className="register_modal">
                <div className="register_box"></div>
                <div className="register_box">
                    <div className="register_container">
                        {/* logo HERE */}
                        <h1>Barbershop</h1>
                    </div>
                    <form className="register_container" onSubmit={handleSubmit(onSubmit)} method="post">
                        <div className="register_item">
                            {/* <select id="usertype" hidden {...register("usertype", {required: true})}>
                                <option value="type1">User type 1</option>
                                <option value="type2">User type 2</option>
                                <option value="type3">User type 3</option>
                                <option value="select" defaultValue>--SELECT--</option>
                            </select>
                            {errors.usertype && <p>{errors.usertype.message}</p>} */}
                        </div>
                        <div className="register_item">
                            <div className="register_subitem">
                                <input placeholder="First Name" type="text"{...register("firstname", { required: "You must enter a firstname" })} />
                                {errors.firstname && <p>{errors.firstname.message}</p>}
                            </div>
                            <div className="register_subitem">
                                <input placeholder="Last Name" type="text"{...register("lastname", { required: "You must enter a lastname" })} />
                                {errors.lastname && <p>{errors.lastname.message}</p>}
                            </div>
                        </div>
                        <div className="register_item">
                            <div className="register_subitem">
                                <input placeholder="Birthday" type="date"{...register("Birthday", { required: "You must enter a birtday?" })} />
                                {errors.age && <p>{errors.age.message}</p>}
                            </div>
                            <div className="register_subitem">
                                <input placeholder="Age" type="number"{...register("age", { required: "You must enter a age" })} />
                                {errors.age && <p>{errors.age.message}</p>}
                            </div>

                        </div>
                        <div className="register_item">
                            <input placeholder="Email" type="email" {...register("emailadd", { required: "You must enter a email" })} />
                            {errors.emailadd && <p>{errors.emailadd.message}</p>}
                        </div>
                        <div className="register_item">
                            <input placeholder="Username" type="text" {...register("Username", { required: "You must enter a username" })} />
                            {errors.Username && <p>{errors.Username.message}</p>}
                        </div>
                        <div className="register_item">
                            <input placeholder="Password" type="text"{...register("password",
                                { required: "You must specify a password" })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <div className="register_item">
                            <input placeholder="Confirm Password" type="text"                                {...register("confirmpassword",
                                {
                                    validate: value =>
                                        value === password2.current || "The passwords do not match"
                                }
                            )}
                            />
                            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}

                        </div>
                        <ReCaptcha
                            sitekey="6Le6_lQeAAAAAG_6B4F-OjL0mbth_UQLUihCtxiG"
                            ref={recaptchaRef}
                            onChange={onReCAPTCHAChange}

                        />
                        <div className="register_item">
                            <button className="btn_primary" type="submit">SUBMIT</button>
                        </div>
                    </form>
                    <div className="register_container">
                        <div className="register_item">
                            <hr />
                        </div>
                        <div className="register_item">
                            <p>Already have an Account? <a href="#">Login...</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}