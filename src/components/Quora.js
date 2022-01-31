import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./Quora.css";
import UserQues from "./screens/userQuestions.js";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Quora(props) {
  return (
    <div className="quora">
      <QHeader />
      <div className="container text-center  mt-5">
        <h1>{props.title ? props.title : "Questions Recently Asked"}</h1>
      </div>
      <div className="quora__content">
        <Sidebar />

        {
          props.title === "Asked Questions" ? <UserQues /> : <Feed title={props.title} />
        }
        <Widget />
      </div>
    </div>
  );
}

export default Quora;
