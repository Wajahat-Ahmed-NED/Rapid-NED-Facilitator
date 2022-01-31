import React, { useEffect, useState } from "react";
// import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Modal from "react-modal";
import '../logo.PNG'
import "./QHeader.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
// import Link from "@material-ui/icons";
import firebase from "firebase";
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ComboBox from "./Combobox";
import { Link } from "react-router-dom"
// import Typewriter from 'typewriter-effect';


Modal.setAppElement("#root");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function QHeader() {
  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [combo, setCombo] = useState([]);
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  console.log("Combo here", combo.label)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        category: combo.label ? combo.label : "General Questions",
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };


  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setInput(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  return (<>




    <div className="qHeader">
      <div className="qHeader__logo">
        <h2>Rapid NED Facilitator</h2>
      </div>
      <div className="qHeader__icons">

        <Link to="/">
          <div className="active qHeader__icon">
            <Tooltip title="Home" arrow>
              <HomeIcon fontSize="large" />
            </Tooltip>
          </div>
        </Link>

        <Link to="/askedquestions">
          <div className="qHeader__icon">
            <Tooltip title="Asked Questions" arrow>
              <FeaturedPlayListOutlinedIcon fontSize="large" />
            </Tooltip>
          </div>
        </Link>

        <Link to="/faqs">
          <div className="qHeader__icon">
            <Tooltip title="FAQ's" arrow>
              <AssignmentTurnedInOutlinedIcon fontSize="large" />
            </Tooltip>
          </div>
        </Link>

        <Link to="/contactus">
          <div className="qHeader__icon">
            <Tooltip title="Contact Us" arrow>
              <ContactMailIcon fontSize="large" />
            </Tooltip>
          </div>
        </Link>
        {/* <div className="qHeader__icon">
          <Tooltip title="Notifications" arrow>
            <NotificationsOutlinedIcon fontSize="large" />
          </Tooltip>
        </div> */}
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Tooltip title="Your Profile" arrow>
            <Avatar

              className="Avatar"
              onClick={handleMenu}
              src={
                user?.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className="px-2 my-1">Profile</MenuItem><br />
            <MenuItem className="px-2 my-1">My account</MenuItem><br />
            <MenuItem className="px-2 my-1" onClick={() => auth.signOut()}>Logout</MenuItem>
          </Menu>
        </div>
        <LanguageIcon />
        <Button onClick={() => setIsModalOpen(true)} >Add Question</Button>
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.1)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <span style={{ fontSize: '22px', fontWeight: 'bold', marginLeft: '10px' }}>{user.displayName ? user.displayName : user.email} </span>
            <span style={{ marginLeft: '10px', fontSize: '22px', }}>is asking...</span>
            {/* <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div> */}
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter Your Query Here "
              style={{ width: '500px' }}

            />

            {isListening && <span> Listening... </span>}
            <MicIcon style={{ cursor: 'pointer' }} onClick={() => setIsListening(prevState => !prevState)} />

            <div className="container my-4">
              <ComboBox fullWidth={true} onChange={(event, value) => setCombo(value ? value : 'General Questions')} />
            </div>

            <div className="modal__fieldLink" >

              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: include a link that gives content"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
    {/* <div className="typewriter">
      <marquee behavior="scroll" direction="right">Welcome To NEDIANS QnA. Ask Anything About NED. QnA For NED   </marquee>
    </div> */}
    {/* <div className="typewriter">
      <Typewriter
        options={{
          strings: ['Welcome To NEDIANS QnA ', 'Ask Anything About NED', 'QnA For NED'],
          autoStart: true,
          loop: true,
          cursor: null,
        }}
      />

    </div> */}
  </>
  );
}

export default QHeader;
