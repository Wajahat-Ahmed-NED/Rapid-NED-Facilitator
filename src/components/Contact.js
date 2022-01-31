import React, { useState, useEffect } from "react";
import db from "../firebase";
import QHeader from "./QHeader";
import "./Contact.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import Button from '@mui/material/Button';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);
    const [ismodalOpen, setIsModalOpen] = useState(false);

    const user = useSelector(selectUser);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contact")
            .add({
                name: name,
                email: user.email,
                message: message,
                identification: id,
            })
            .then(() => {
                setIsModalOpen(true)
                setLoader(false);
                // alert("Your message has been submitted👍");


            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        let templateParams = {
            name: name,
            email: user.email,
            message: message,
            identification: id,
        }
        emailjs.send('service_ymudahn', 'template_ezxmtg8', templateParams,
            'user_Gg99yI1uosPIk3dIl6Zxz')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        e.target.reset()
        setName("");
        setEmail("");
        setMessage("");
        setId("")
    };

    return (
        <>
            <QHeader />
            <div className="container " style={{ width: '600px' }}>


                <form className="form " onSubmit={handleSubmit}>
                    <h1>Contact Us 🤳</h1>

                    <label>Name</label>
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        placeholder="Email"
                        value={user.email}

                        required
                    />

                    <label>Enter Your Identification</label>
                    <input
                        placeholder="NEDian or Outsider"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />

                    <label>Message</label>
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required

                    ></textarea>

                    <button
                        type="submit" className="rounded-pill "
                        style={{ background: loader ? "#ccc" : "darkCyan" }}

                    >
                        {!loader ? 'Submit' : "Loading..."}
                    </button>
                </form></div>
            <Modal
                isOpen={ismodalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                // shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                        width: 600,
                        height: 300,
                        backgroundColor: "rgba(0,0,0,0.1)",
                        zIndex: "1000",
                        top: "70%",
                        left: "55%",
                        marginTop: "-300px",
                        marginLeft: "-350px",
                    },
                }}
            >
                <div className="container">
                    <h2> Thanks for Your Feedback 👍</h2>
                    <p> We will Review it Shortly</p>
                    <Button variant="outlined" onClick={() => setIsModalOpen(false)}>Close</Button>
                </div>

            </Modal>
        </>
    );
};

export default Contact;