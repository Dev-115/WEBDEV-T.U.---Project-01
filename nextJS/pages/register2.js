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

// let renderCount = 0;

// Encrypt
// var ciphertext = CryptoJS.AES.encrypt('sample message', process.env.CRYPTO_SECRET_KEY).toString(); 

// Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);



export default function RegisterPagePost() {


    const recaptchaRef = React.createRef();
    const { register, watch, handleSubmit, formState:{errors} } = useForm();
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
        if(!captchaCode) {
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
        if(humantest == true){

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
            }else{
                console.log(captchaRef);
              alert(`please recaptcha`);
            }
    
        }else{
            alert("Robot 🤖");
        }
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.

      }

    return (
        <>
        <Head>
        <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="styles/main.css"/>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>


    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
    <title>Register</title>
      </Head>
      <div class="register_modal">
        <div class="register_box"></div>
        <div class="register_box">
            <div class="register_container">
                {/* logo HERE */}
                <h1>Barbershop</h1>
            </div>
            <form class="register_container">
                <div class="register_item">
                    <input placeholder="User Type" type="text" hidden/>
                </div>
                <div class="register_item">
                    <div class="register_subitem">
                        <input placeholder="First Name" type="text"/>
                    </div>
                    <div class="register_subitem">
                        <input placeholder="Last Name" type="text"/>
                    </div>
                </div>
                <div class="register_item">
                    <div class="register_subitem">
                        <input placeholder="Birthday" type="date"/>
                    </div>
                    <div class="register_subitem">
                        <input placeholder="Age" type="number"/>
                    </div>
   
                </div>
                <div class="register_item">
                    <input placeholder="Email" type="text"/>
                </div>
                <div class="register_item">
                    <input placeholder="Username" type="text"/>
                </div>
                <div class="register_item">
                    <input placeholder="Password" type="text"/>
                </div>
                <div class="register_item">
                    <input placeholder="Confirm Password" type="text"/>
                </div>
                <div class="register_item">
                    <button class="btn_primary" type="submit">SUBMIT</button>
                </div>
            </form>
            <div class="register_container">
                <div class="register_item">
                    <hr/>
                </div>
                <div class="register_item">
                    <p>Already have an Account? <a href="#">Login...</a></p>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }