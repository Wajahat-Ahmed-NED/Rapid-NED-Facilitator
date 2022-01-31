import React, { useState } from "react";
import "./login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import db, { auth, provider, providerFb } from "../../firebase";
import Typewriter from 'typewriter-effect';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [no, setNo] = useState(false);
    const [time, setTime] = useState(false);

    const signIn = () => {
        auth.signInWithPopup(provider).catch((e) => {
            alert(e.message);
        });
    };
    const signInFacebook = () => {
        auth.signInWithPopup(providerFb).catch((e) => {
            alert(e.message);
        });
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
            })
            .catch((e) => alert(e.message));
    };

    const registerSignIn = (e) => {
        e.preventDefault();
        var a = document.getElementById("gridCheck11")


        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    console.log(auth);

                    db.collection("users")
                        .add({
                            name: name,
                            email: email,
                            password: password,
                            nedian: a.checked ? "Yes" : "No"
                        })
                        .then(() => {
                            // setLoader(false);
                            console.log("Your message has been submitted👍");
                        })
                        .catch((error) => {
                            alert(error.message);
                            // setLoader(false);
                        });
                }

            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">


            {
                setTimeout(() => {
                    setTime(true)
                }, 11000)
            }

            {
                !time ?
                    <div className="container">
                        <div className="typewriter">
                            <Typewriter
                                options={{
                                    strings: ['Rapid NED Facilitator', 'Welcome To NEDIANS QnA '],
                                    autoStart: true,
                                    loop: true,
                                    cursor: null,
                                }}
                            />
                        </div>
                    </div> :
                    <>

                        <div className="login__container">

                            <div className="login__auth">
                                <div className="login__authOptions">

                                    <div className="login__authOption">
                                        <img
                                            className="login__googleAuth"
                                            src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                            alt=""
                                        />
                                        <span onClick={signIn} className="mx-3">Continue With Google</span>
                                    </div>
                                    <div className="login__authOption">
                                        <img
                                            className="login__googleAuth"
                                            src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                                            alt=""
                                        />
                                        <span onClick={signInFacebook}>Continue With Facebook</span>
                                    </div>
                                    <div className="login__authDesc">
                                        <p>
                                            <span style={{ color: "blue", cursor: "pointer" }}>
                                                Sign Up With Email
                                            </span>
                                            . By continuing you indicate that you have read and agree to
                                            Rapid NED Facilitator's
                                            <span style={{ color: "blue", cursor: "pointer" }}>
                                                Terms of Service{" "}
                                            </span>
                                            and{" "}
                                            <span style={{ color: "blue", cursor: "pointer" }}>
                                                Privacy Policy
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>
                                {
                                    !no ?
                                        <>

                                            <div className="login__emailPass">
                                                <div className="login__label">
                                                    <h4>Login</h4>
                                                </div>
                                                <div className="login__inputFields">
                                                    <div className="login__inputField">
                                                        <input
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            type="text"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="login__inputField">
                                                        <input
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            type="password"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="login__forgButt">
                                                    <small>Forgot Password?</small>
                                                    <button onClick={handleSignIn}>Login</button>
                                                </div>
                                                <hr />
                                                <p className="text-center my-2">Don't have an account ?</p>
                                                {/* <but onClick={registerSignIn}>Register</but  ton> */}
                                                <button onClick={() => setNo(true)}
                                                    style={{ fontWeight: 'bold', boxShadow: 'none', width: '333px', height: '45px', backgroundColor: 'white', color: 'black' }} className="btn  border">Create An Account</button>
                                            </div>
                                        </>
                                        :


                                        <div className="login__emailPass">
                                            <div className="login__label">
                                                <h4>Sign Up</h4>
                                            </div>
                                            <div className="login__inputFields">

                                                <div className="login__inputField">
                                                    <input
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        type="text"
                                                        placeholder="Full Name"
                                                    />
                                                </div>
                                                <div className="login__inputField">
                                                    <input
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="login__inputField">
                                                    <input
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        type="password"
                                                        placeholder="Password"
                                                    />
                                                </div>



                                                <div className="  login__inputField">
                                                    <div className="form-check  ">

                                                        <input className="form-check-input" type="checkbox" id="gridCheck11" />
                                                        <label className="form-check-label" htmlFor="gridCheck11">
                                                            I am NEDian
                                                        </label>

                                                        <br />

                                                        <input className="form-check-input" type="checkbox" id="gridCheck12" checked required />
                                                        <label className="form-check-label" htmlFor="gridCheck12" >
                                                            I agree to  <span><a href="#" style={{ textDecorationLine: 'none' }}> privacy
                                                                policy</a></span> and <span> <a href="#" style={{ textDecorationLine: 'none' }}> terms
                                                                    of
                                                                    use</a> </span>
                                                        </label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="login__forgButt">

                                                <button onClick={registerSignIn}>Sign In</button>
                                            </div>
                                            <hr />
                                            <p className="text-center my-2">Already have an Account ?</p>
                                            {/* <but onClick={registerSignIn}>Register</but  ton> */}
                                            <button onClick={() => setNo(false)}
                                                style={{ fontWeight: 'bold', boxShadow: 'none', width: '333px', height: '45px', backgroundColor: 'white', color: 'black' }} className="btn  border">Login</button>
                                        </div>



                                }



                            </div>

                            <div className="login__footer">

                                <p>&copy; Rapid NED Facilitator Inc. 2021</p>
                            </div>
                        </div>

                    </>}
        </div>
    );
}

export default Login;