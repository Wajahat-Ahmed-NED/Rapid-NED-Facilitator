import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import Quora from "./components/Quora";
import AppRouter from "./config/router/router";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import store from './app/store';
import { Provider } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return (
    <>


      <div className="App">
        {user ? <AppRouter /> : <Login />}


      </div>
    </>);
}

export default App;
