import React, { useState } from "react";
import ComboBox from "./Combobox";
import Button from '@mui/material/Button';
import "./WidgetContent.css";
import db from "../firebase";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Post from "./Post";

function WidgetContent() {
  const [combo, setCombo] = useState([])
  const [ques, setQues] = useState([])
  const [no, setNo] = useState(false)
  console.log(combo)
  const [posts, setPosts] = useState([]);
  let [q1, setQ1] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, []);
  let x = posts.filter(x => x.questions.category === combo.label)
  console.log(x)
  // x.length !== 0 && console.log(x[0].questions.question)

  if (x.length !== 0) {
    q1 = []
    x.forEach((element) => {
      console.log(element.questions.question)


      q1.push(element.questions.question)

      // setQ(q1)
    })
    console.log(q1)

  }
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    setNo(true)
    switch (combo.label) {
      case "General Questions":
        navigate("/generalquestions")
        break;
      case "Software Engineering":
        navigate("/softwareengg")
        break;
      case "Admission Faculty":
        navigate("/admissionfacility")
        break;
      case "Mechanical Engineering":
        navigate("/mechanicalengg")
        break;
      case "CIS Engineering":
        navigate("/cisengg")
        break;
      case "BCIT":
        navigate("/bcit")
        break;
      case "Admission Policies":
        navigate("/admissionpolicies")
        break;
      case "Hostels":
        navigate("/hostels")
        break;
      case "Other Departments":
        navigate("/otherdepartments")
        break;
      case "Other Queries":
        navigate("/otherqueries")
        break;

      default:
        navigate("/")
    }
  }


  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img className="mt-2"
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="container  pt-1" >

          <ComboBox fullWidth={true} size="small" style={{ width: '200px' }} onChange={(event, value) => setCombo(value ? value : 'General Questions')} />

        </div>

      </div>
      <div className="widget__content">
        <img className="mt-2"
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1574818-100-mzdwostcualpwcxekyrvyqqpychetdoc.jpeg"
          alt="" height='30px'
        />
        <div className="container  pt-1" >
          <ComboBox fullWidth={true} size="small" style={{ width: '200px' }} onChange={(event, value) => setQues(value ? value : '')} label="Select Question"
            options={q1}
          />
        </div>

      </div>
      <div className="widget__content">
        <div className="container text-center">

          <Button variant="outlined" color="secondary" onClick={handleSearch}>Search All </Button>
        </div>


      </div>
      {
        x.length !== 0 &&


        x.map(({ id, questions }) => (
          <>
            <div className="container">
              {
                questions.question === ques &&

                <Post
                  key={id}
                  Id={id}
                  question={questions.question}
                  imageUrl={questions.imageUrl}
                  category={questions.category}
                  timestamp={questions.timestamp}
                  users={questions.user}
                />}
            </div>
            <br /></>
        ))
      }
    </div>
  );
}

export default WidgetContent;
