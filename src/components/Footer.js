import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link

} from "react-router-dom";
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="container-fluid py-3 mt-2  text-center" style={{ backgroundColor: '#3c3c3c', color: 'white' }}>
                <span >@Copyright-2021 | All Rights Reserved</span>
                <br />
                <span >Creators : Wajahat Ahmed | Nizam Ali | Abdul Moiz</span>

            </div>
        </>
    )
}
