import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [val, setVal] = useState(0)

    const member = () => {
        setVal(0)
    }
    const agency = () => {
        setVal(1)
    }


    return (
        <>

            <div className="container px-4 center1 my-5  ">
                <h2 className="p-5 pb-2 my-3"
                    style={{ fontFamily: 'Montserrat', fontSize: '24px', color: ' #2A2A2A', fontWeight: 'bold' }}>CREATE AN
                    ACCOUNT</h2>
                <label className="px-5 pb-2 " style={{ fontSize: '13px' }}>Type</label>
                <div className="px-5 pb-2 ">
                    <button onClick={member} id="member" className={
                        val === 0 ? "btn my-2 btnCol" : "btn my-2 selbtnCol border"
                    }
                        style={{ width: '100px', height: '35px' }}>Student</button>
                    <button onClick={agency} id="agency" className={
                        val === 1 ? "btn my-2 btnCol " : "btn my-2 selbtnCol border"
                    }
                        style={{ width: '100px', height: '35px' }}>Administrator</button>
                </div>

                <form id="myForm" className={val !== 0 ? "dnone px-5 pt-2 " : "px-5 pt-2 "}>


                    <div className=" mb-3">
                        <label htmlFor="inputEmail3" className="col-form-label">Email</label>
                        <div>
                            <input required type="email" style={{ height: '35px' }} placeholder="Your Email" className="form-control"
                                id="inputEmail3" />
                        </div>
                    </div>


                    <div className="d-flex justify-content-between">
                        <div className="mb-3 ">
                            <label htmlFor="inputPassword3" className=" col-form-label">Phone (Optional)</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="tel" pattern="[0-9]{12}"
                                    placeholder="Your Phone No:" className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputPassword1" className=" col-form-label">Name</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="text" placeholder="Your Name"
                                    className="form-control" id="inputPassword1" />
                            </div>
                        </div>
                    </div>




                    <div className="d-flex justify-content-between">
                        <div className="mb-3 ">
                            <label htmlFor="inputPassword2" className=" col-form-label">Password</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="password" placeholder="Your Password"
                                    className="form-control" id="inputPassword2" />
                            </div>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputPassword4" className=" col-form-label">Confirm Password</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="password"
                                    placeholder="Confirmed Password" className="form-control" id="inputPassword4" />
                            </div>
                        </div>
                    </div>



                    <div className=" mb-3 ">
                        <div className="form-check  d-flex justify-content-between">
                            <div>
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1" >
                                    I agree to Student <span><a href="#" style={{ textDecorationLine: 'none' }}> privacy
                                        policy</a></span> and <span> <a href="#" style={{ textDecorationLine: 'none' }}> terms
                                            of
                                            use</a> </span>
                                </label>
                            </div>
                        </div>
                    </div>




                    <div className="">
                        <button className="  btn my-2 btnCol " style={{ width: '200px', height: '45px', color: 'white' }}>Sign Up</button>
                        <p className=" my-2">Already have an account? <span><Link to="/" style={{ color: 'black' }}>Sign
                            In</Link></span> &nbsp;</p>
                    </div>
                </form>

                <form className={val !== 1 ? "dnone px-5 pt-2 " : "px-5 pt-2 "} id="myForm1" >


                    <div className=" mb-3">
                        <label htmlFor="inputEmail3" className="col-form-label">Email</label>
                        <div>
                            <input required style={{ height: '35px' }} type="email" placeholder="Content" className="form-control"
                                id="inputEmail3" />
                        </div>
                    </div>


                    <div className="d-flex justify-content-between">
                        <div className="mb-3 ">
                            <label htmlFor="inputPassword3" className=" col-form-label">Phone (Optional)</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="tel" pattern="[0-9]{12}"
                                    placeholder="Content" className="form-control" id="inputPassword3" />
                            </div>
                        </div>


                        <div className="mb-3 ">
                            <label htmlFor="inputPassword1" className=" col-form-label">Name</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="text" placeholder="Content"
                                    className="form-control" id="inputPassword1" />
                            </div>
                        </div>
                    </div>




                    <div className="d-flex justify-content-between">
                        <div className="mb-3 ">
                            <label htmlFor="inputPassword2" className=" col-form-label">Password</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="password" placeholder="Content"
                                    className="form-control" id="inputPassword2" style={{ width: '280px' }} />
                            </div>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputPassword4" className=" col-form-label">Confirm Password</label>
                            <div>
                                <input style={{ width: '280px', height: '35px' }} required type="password" placeholder="Content"
                                    className="form-control" id="inputPassword4" />
                            </div>
                        </div>
                    </div>


                    <div className="d-flex justify-content-between">

                        <div className="mb-3 ">
                            <label htmlFor="file[]" className=" col-form-label">Upload Proof-of-organization Documents</label>

                            <input type="file" placeholder="Content" name="file[]" className="form-control" id="file[]" multiple />



                        </div>
                    </div>

                    <div className=" mb-3 ">
                        <div className="form-check  ">
                            <div>
                                <input className="form-check-input" type="checkbox" id="gridCheck11" />
                                <label className="form-check-label" htmlFor="gridCheck11">
                                    I am real estate agent
                                </label>
                            </div>
                            <br />
                            <div>
                                <input className="form-check-input" type="checkbox" id="gridCheck12" />
                                <label className="form-check-label" htmlFor="gridCheck12">
                                    I agree to Makanumber <span><a href="#" style={{ textDecorationLine: 'none' }}> privacy
                                        policy</a></span> and <span> <a href="#" style={{ textDecorationLine: 'none' }}> terms
                                            of
                                            use</a> </span>
                                </label>
                            </div>
                        </div>
                    </div>




                    <div className="">
                        <button className="  btn my-2 btnCol " style={{ width: '200px', height: '45px', color: 'white' }}>Sign Up</button>
                        <p className=" my-2" >Already have an account? <span><Link to="/login" style={{ color: 'black' }}>Sign
                            In</Link></span> &nbsp;</p>
                    </div>
                </form>




            </div>


        </>
    )
}
