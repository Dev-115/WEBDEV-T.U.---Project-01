import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import ReCAPTCHA from "react-google-recaptcha";



import "./app.css";

function App(){
    //renderer initialization
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    
    //state and constants declaration (if logged in already)
    const [regClicked, setRegClicked] = useState(false);

    //form rendering
    const renderLoginForm = (
        <div class="wrapper">
            <div class="title-text">
                <div class="title login">
                    Login Form
                </div>
            </div>
            <div class="form-container">
                <div class="form-inner">
                    <form action="#" class="login">
                        <div class="field">
                            <input type="text" placeholder="Email Address" required />
                        </div>
                        <div class="field">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div class="pass-link">
                            <a href="#">Forgot password?</a>
                        </div>
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Login" />
                        </div>
                        <div class="Register-link">
                            Not registered? <a href="">Register now</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    const renderRegForm = (
        <div class="wrapper">
            <div class="title-text">
                <div class="title Register">
                    Registration Form
                </div>
            </div>
            <div class="form-container">
                <div class="form-inner">
                    <form action="./saveCredentials.php" method="post" class="Register">
                    {/* <form onSubmit={this.handleSubmit} class="Register"> */}
                        <div class="field">
                            <label for="firstname">First name:</label>
                            <input type="text" id="firstname" required />
                        </div>
                        <div class="field">
                            <label for="lastname">Last name:</label>
                            <input type="text" id="lastname" required />
                        </div>
                        <div class="field">
                            <label for="emailadd">Email:</label>
                            <input type="email" id="emailadd" required />
                        </div>
                        <div class="field">
                            <label for="user type">User type:</label><br/>
                            <select id="usertype" name="usertype" required>
                                <option value="type1">User type 1</option>
                                <option value="type2">User type 2</option>
                                <option value="type3">User type 3</option>
                                {/* <option value="select" selected>--SELECT--</option> */}
                            </select>
                        </div>
                        <div class="field">
                            <label for="age">Age:</label>
                            <input type="number" id="age" required />
                        </div>
                        <div class="field">
                            <label for="username">Username:</label>
                            <input type="text" id="username" required />
                        </div>
                        <div class="field">
                            <label for="password">Password:</label>
                            <input type="password" id="password" required />
                        </div>
                        <div class="field">
                            <label for="confirmpassword">Confirm pw:</label>
                            <input type="confirmpassword" id="confirmpassword" required />
                        </div>
                        <div class="field">
                            {/* <label for="termsandconditions">Username:</label> */}
                            <input type="checkbox" placeholder="termsandconditions" required /> I agree with the <a href="">Terms of Use</a>.
                        </div>
                        <br/>
                        <br/>
                        {/* <br/> */}
                        <ReCAPTCHA
                        sitekey="6Le6_lQeAAAAAG_6B4F-OjL0mbth_UQLUihCtxiG"
                        />
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Register" />
                        </div>
                        <div class="Login-link">
                        Already have an account? <a href="">Log in instead</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
    // if (regClicked==true){
    //     root.render(renderRegForm);
    // }
    // else{
    //     root.render(renderLoginForm);
    // }
    
    root.render(renderRegForm);


    // return (
    //     <div className="app">
    //       <div className="login-form">
    //         <div className="title">Sign In</div>
    //         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    //       </div>
    //     </div>
    //   );
};

// class regHandler extends Registration {
//     handleSubmit(event){
//         var gatheredEmail=document.getElementById("emailaddr").value;
//         var gatheredd=document.getElementById("pw").value;
//         event.preventDefault();
//     }
// }

export default App;