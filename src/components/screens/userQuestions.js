import React, { useEffect, useState } from "react";
// import QuorBox from "./QuorBox";
import "../Feed.css";
import Post from "../Post";
import db from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function UserQues(props) {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

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




    var x = posts.filter(x => x.questions.user.displayName === user.displayName)
    console.log(x)





    return (
        <div className="feed">

            {x.length !== 0 ?
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
                )) : <h1 className="text-center my-5">No Post Found</h1>
            }
        </div>
    );
}

export default UserQues;
