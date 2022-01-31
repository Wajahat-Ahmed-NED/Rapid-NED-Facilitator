import React, { useEffect, useState } from "react";
import QuorBox from "./QuorBox";
import "./Feed.css";
import Post from "./Post";
import db from "../firebase";

function Feed(props) {
  const [posts, setPosts] = useState([]);

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
  const arr = ['General Questions', 'Software Engineering', 'Admission Faculty', 'Mechanical Engineering', 'Electrical Engineering', 'BCIT', 'CIS Engineering', 'Admission Policies', 'Hostels', 'Other Departments', 'Other Queries']

  if (arr.includes(props.title)) {

    var x = posts.filter(x => x.questions.category === props.title)
    console.log(x)
  }




  return (
    <div className="feed">
      <QuorBox />
      {arr.includes(props.title) ? x.length !== 0 ?
        x.map(({ id, questions }) => (
          <Post
            key={id}
            Id={id}
            question={questions.question}
            imageUrl={questions.imageUrl}
            category={questions.category}
            timestamp={questions.timestamp}
            users={questions.user}
          />
        )) : <h1 className="text-center my-5">No Post Found</h1> :
        posts.map(({ id, questions }) => (
          <Post
            key={id}
            Id={id}
            question={questions.question}
            imageUrl={questions.imageUrl}
            category={questions.category}
            timestamp={questions.timestamp}
            users={questions.user}
          />
        ))

      }
    </div>
  );
}

export default Feed;
