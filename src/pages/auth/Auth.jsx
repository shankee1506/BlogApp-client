import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../images/logo.png";
import { useNavigate  } from "react-router-dom";
import { logIn, signUp } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";


const Auth = () => {

  const initialState = {
    username:"",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp] = useState(true);
  const [input, setInput] = useState(initialState);

  const [confirmMessage, setConfirmMessage] = useState(true);


  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmMessage(true);
    if (isSignUp) {
      input.password === input.confirmpass
        ? dispatch(signUp(input, navigate))
        : setConfirmMessage(false);
    } else {
      dispatch(logIn(input, navigate));
    }
  };



  console.log(input);
  const changePage = () => {
    setConfirmMessage(true)
    setIsSignUp((prev) => !prev);
    setInput(initialState)
    
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>GOO Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign up" : "Log in "}</h3>
        {isSignUp && (
            <div>
            <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="username"
            onChange={handleChange}
            value={input.username}
              />
              
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
              onChange={handleChange}
              value={input.firstname}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
              onChange={handleChange}
              value={input.lastname}
            />
          </div>
        )}

        <div>
          <input
            type="text"
            className="infoInput"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={input.email}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={input.password}
          />

          {isSignUp && (
            <input
              type="password"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={input.confirmpass}
            />
          )}
        </div>

        {isSignUp ? (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmMessage ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
        ) : (
          ""
        )}

        <div>
          <span
            onClick={changePage}
            style={{
              fontSize: "12px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {" "}
            {isSignUp
              ? "Already have an account. Login!"
              : "Don't have an account Sign up"}
          </span>
        </div>

        <button className="button infoButton" type="submit" disabled={loading}>
        {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
        </button>
      </form>
    </div>
    </div>
  );
};



export default Auth;
