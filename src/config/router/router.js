import React from "react";
// import { Switch } from "react-router";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link,

} from "react-router-dom";
import FaqApp from "../../components/faqs/FaqApp";
import Quora from "../../components/Quora";
import Contact from "../../components/Contact";
import GeneralQues from "../../components/screens/GeneralQues";
import SoftwareEngg from "../../components/screens/SoftwareEngg";
import Login from "../../components/auth/Login";
import Signup from "../../components/auth/Signup";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>

                    <Route exact path="/" element={<Quora />} />
                    <Route path="/generalquestions" element={<Quora title="General Questions" />} />
                    <Route path="/admissionfacility" element={<Quora title="Admission Faculty" />} />
                    <Route path="/softwareengg" element={<Quora title="Software Engineering" />} />
                    <Route path="/mechanicalengg" element={<Quora title="Mechanical Engineering" />} />
                    <Route path="/electricalengg" element={<Quora title="Electrical Engineering" />} />
                    <Route path="/bcit" element={<Quora title="BCIT" />} />
                    <Route path="/cisengg" element={<Quora title="CIS Engineering" />} />
                    <Route path="/admissionpolicies" element={<Quora title="Admission Policies" />} />
                    <Route path="/hostels" element={<Quora title="Hostels" />} />
                    <Route path="/otherdepartments" element={<Quora title="Other Departments" />} />
                    <Route path="/otherqueries" element={<Quora title="Other Queries" />} />
                    <Route path="/askedquestions" element={<Quora title="Asked Questions" />} />
                    <Route path="/faqs" element={<FaqApp />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                </Routes>
            </div>
        </Router>
    );
}