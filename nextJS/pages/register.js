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

export default function RegisterPagePost() {

    const recaptchaRef = React.createRef();
    const { register, watch, handleSubmit, formState:{errors} } = useForm();
    const [password, setpassword] = React.useState("");

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
        sethumantest(true); 
      }

      if(humantest == true){
        
      }
    const onSubmit = async (data) => {


        // Stop the form from submitting and refreshing the page.
        // event.preventDefault()
        var uniq = 'cl' + (new Date()).getTime() + Math.random().toString(16).slice(2);

        // Get data from the form.
        data["sql"] = "INSERT INTO `user` (`id`, `name`, `email`, `Password`) VALUES (?, ?, ?, ?);";// ('sad', 'sad', 'sad', 'sad', '2022-08-22 23:50:47.000', 'sad');
        data["sqlParamid"] = uniq;
        data["sqlParamname"] = data.Username;
        data["sqlParamemail"] = data.emailadd;
        data["sqlParamPassword"] = data.password;


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
            // const token = recaptchaRef.current.getValue();
            // captchaRef.current.reset();

            // const endpoint2 = './api/dbcall/dbRegisterUser';
    
            // // Form the request for sending data to the server.
            // const options2 = {
            //     // The method is POST because we are sending data.
            //     method: 'POST',
            //     // Tell the server we're sending JSON.
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   }
            // const captchaRef = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6Le6_lQeAAAAAKAzGT1KQC6xvXKIsv56SijGPSUT&response=${token}`);
            // if (captchaRef.status(200)) {
                const response = await fetch(endpoint, options);
    
    
                const result = await response.json();
                const mymessage = JSON.stringify(result);
    
                alert(mymessage);
            // }else{
            //     console.log(captchaRef);
            //   alert(`please recaptcha`);
            // }
    
        }else{
            alert("Robot 🤖");
        }
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.

      }

    return (
        <>
        <Layout>
        <Head>
        <title>Register</title>
      </Head>

      <h1>Register Here</h1>
            <div className="wrapper">
            <div className="title-text">
                <div className="title Register">
                    Registration Form
                </div>
            </div>
            <div className="form-container">
                <div className="form-inner">
                    <form onSubmit={handleSubmit(onSubmit)} method="post" className="Register">
                    {/* <form onSubmit={this.handleSubmit} className="Register"> ./api/validation/formValidation*/}
                        <div className="field">
                            <label htmlFor="firstname">First name:</label>
                            <input type="text" id="firstname" {...register("firstname", {required: "You must enter a firstname"})}/>
                            {errors.firstname && <p>{errors.firstname.message}</p>}
                        </div>
                        <div className="field">
                            <label htmlFor="lastname">Last name:</label>
                            <input type="text" id="lastname" {...register("lastname", {required: "You must enter a lastname"})}/>
                            {errors.lastname && <p>{errors.lastname.message}</p>}

                        </div>
                        <div className="field">
                            <label htmlFor="emailadd">Email:</label>
                            <input type="email" id="emailadd" {...register("emailadd", {required: "You must enter a email"})}/>
                            {errors.emailadd && <p>{errors.emailadd.message}</p>}

                        </div>
                        <div className="field">
                            <label htmlFor="user type">User type:</label><br/>
                            <select id="usertype" {...register("usertype", {required: true})}>
                                <option value="type1">User type 1</option>
                                <option value="type2">User type 2</option>
                                <option value="type3">User type 3</option>
                                {/* <option value="select" selected>--SELECT--</option> */}
                            </select>
                            {errors.usertype && <p>{errors.usertype.message}</p>}

                        </div>
                        <div className="field">
                            <label htmlFor="age">Age:</label>
                            <input type="number" id="age" {...register("age", {required: "You must enter a age"})}/>
                            {errors.age && <p>{errors.age.message}</p>}

                        </div>
                        <div className="field">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" {...register("Username", {required: "You must enter a username"})}/>
                            {errors.Username && <p>{errors.Username.message}</p>}

                        </div>
                        <div className="field">
                            {/* <label htmlFor="password">Password:</label>
                            <input type="password" id="password" {...register("password", {required: true})}/>
                        </div>
                        <div className="field">
                            <label htmlFor="confirmpassword">Confirm pw:</label>
                            <input type="confirmpassword" id="confirmpassword" {...register("confirmpassword", {required: true})}/> */}
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                {...register("password", 
                                {required: "You must specify a password"})}
                            />
                            {errors.password && <p>{errors.password.message}</p>}

                            <label>Repeat password</label>
                            <input
                                name="confirmpassword"
                                type="password"
                                {...register("confirmpassword",
                                 {validate: value =>
                                    value === password2.current || "The passwords do not match"}
                                    )}
                            />
                            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}

                        </div>
                        <div className="field">
                            {/* <label htmlFor="termsandconditions">Username:</label> */}
                            <input type="checkbox" placeholder="termsandconditions"  /> I agree with the <a href="">Terms of Use</a>.
                        </div>
                        <br/>
                        <br/>
                        {/* <br/> */}
                        	  {/* <ReCaptcha
                                    ref={recaptchaRef}
                                    sitekey="6Le6_lQeAAAAAG_6B4F-OjL0mbth_UQLUihCtxiG"
                                    onChange={onReCAPTCHAChange}
                                /> */}

                    <ReCaptcha
                    sitekey="6Le6_lQeAAAAAG_6B4F-OjL0mbth_UQLUihCtxiG"
                    ref={recaptchaRef}
                    />
                        <div className="field btn">
                            <div className="btn-layer"></div>
                            <button type="submit">Submit</button>
                        </div>
                        <div className="Login-link">
                        Already have an account? <LoginBtn>Log in instead</LoginBtn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Layout>
      </>
    )
  }