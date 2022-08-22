import Link from 'next/link';
import Head from 'next/head';//heder editw
import Script from 'next/script'; // add scripts 
/** strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */
// import Layout from '../components/layout';
import LoginBtn from '../components/login-btn';
import { useForm } from "react-hook-form";

import Image from 'next/image';

const TennorGif  = () => (
  <Image
    src="/images/f7f97425cafd67695409db84dc60871a.gif" // Route of the image file //
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function RegisterPagePost() {


    const { register, handleSubmit, formState:{formeError} } = useForm();
    // const onSubmit = data => console.log(data);

    console.log(formeError);
    const onSubmit = async (data) => {


        // Stop the form from submitting and refreshing the page.
        // event.preventDefault()
        var uniq = 'cl' + (new Date()).getTime() + Math.random().toString(16).slice(2);

        // Get data from the form.
        data["sql"] = "INSERT INTO `user` (`id`, `name`, `email`, `Password`) VALUES (?, ?, ?, ?);";// ('sad', 'sad', 'sad', 'sad', '2022-08-22 23:50:47.000', 'sad');
        data["sqlParamid"] = uniq;
        data["sqlParamname"] = uniq.Username;
        data["sqlParamemail"] = data.emailadd;
        data["sqlParamPassword"] = data.password;


        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = './api/dbcall/dbinsert'
    
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
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
      }

    return (
        <>
        {/* <Layout> */}
        <Head>
        <title>Register</title>
      </Head>

      <h1>Register Here</h1>
            <div class="wrapper">
            <div class="title-text">
                <div class="title Register">
                    Registration Form
                </div>
            </div>
            <div class="form-container">
                <div class="form-inner">
                    <form onSubmit={handleSubmit(onSubmit)} method="post" class="Register">
                    {/* <form onSubmit={this.handleSubmit} class="Register"> ./api/validation/formValidation*/}
                        <div class="field">
                            <label htmlFor="firstname">First name:</label>
                            <input type="text" id="firstname" {...register("firstname", {required: true})}/>
                        </div>
                        <div class="field">
                            <label htmlFor="lastname">Last name:</label>
                            <input type="text" id="lastname" {...register("lastname", {required: true})}/>
                        </div>
                        <div class="field">
                            <label htmlFor="emailadd">Email:</label>
                            <input type="email" id="emailadd" {...register("emailadd", {required: true})}/>
                        </div>
                        <div class="field">
                            <label htmlFor="user type">User type:</label><br/>
                            <select id="usertype" {...register("usertype", {required: true})}>
                                <option value="type1">User type 1</option>
                                <option value="type2">User type 2</option>
                                <option value="type3">User type 3</option>
                                {/* <option value="select" selected>--SELECT--</option> */}
                            </select>
                        </div>
                        <div class="field">
                            <label htmlFor="age">Age:</label>
                            <input type="number" id="age" {...register("age", {required: true})}/>
                        </div>
                        <div class="field">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" {...register("Username", {required: true})}/>
                        </div>
                        <div class="field">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" {...register("password", {required: true})}/>
                        </div>
                        <div class="field">
                            <label htmlFor="confirmpassword">Confirm pw:</label>
                            <input type="confirmpassword" id="confirmpassword" {...register("confirmpassword", {required: true})}/>
                        </div>
                        <div class="field">
                            {/* <label htmlFor="termsandconditions">Username:</label> */}
                            <input type="checkbox" placeholder="termsandconditions"  /> I agree with the <a href="">Terms of Use</a>.
                        </div>
                        <br/>
                        <br/>
                        {/* <br/> */}
                        {/* <ReCAPTCHA
                        sitekey="6Le6_lQeAAAAAG_6B4F-OjL0mbth_UQLUihCtxiG"
                        /> */}
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <button type="submit">Submit</button>
                        </div>
                        <div class="Login-link">
                        Already have an account? <LoginBtn>Log in instead</LoginBtn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* </Layout> */}
      </>
    )
  }