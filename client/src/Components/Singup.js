import React from "react";
import "./signup.scss"
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import Bluebtn from "../Props/Bluebtn";
import Input from "../Props/Input";
import SocialIcon from "../Props/SocialIcon";

const Singup = () => {
    const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = user;

  const handleInputs = (e) =>{
    console.log("runing", e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const PostData = async e => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password
    };

   try {
     const config = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(newUser),
     };

     const res = await fetch("/api/auth/signup", config);
     const data = await res.json();

     console.log(data);

     if (data.status === 422) {
       window.alert("Invalid registeration");
       navigate("/");
     } else {
       window.alert("registeration Successful");
       navigate("/login");
     }
   } catch (err) {
     console.error(err);
   }

  }
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="signup_form">
            <div className="form_container">
              <div className="form_body">
                {/* hero section */}
                <div className="hero">
                  <img
                    src={`images/Logo.svg`}
                    alt="rifiz"
                    className="logo_img"
                  />
                  <h1 className="page_title">Create an account for free</h1>
                  <p className="title_para grey">
                    Free forever. No payment needed.
                  </p>
                </div>
                {/* input section */}
                <Input
                  label="Username"
                  placeholder="user name"
                  img={`images/Eye_Off.svg`}
                  value={username}
                  handleInputs={handleInputs}
                  name="username"
                />
                <Input
                  label="Email"
                  placeholder="email"
                  img={`images/Eye_Off.svg`}
                  value={email}
                  handleInputs={handleInputs}
                  name="email"
                />
                <Input
                  label="Password"
                  placeholder="password"
                  img={`images/Eye_Off.svg`}
                  value={password}
                  handleInputs={handleInputs}
                  name="password"
                />

                {/* TERM AND CONDITIONS */}
                <div className="terms">
                  <p className="terms_para">
                    By signing up, you are agreeing to our <br />
                    <a className="no_decorate" href="/terms">
                      Terms and Conditions
                    </a>
                    and <a href="/terms">Privacy Notice</a>
                  </p>
                </div>

                {/* login button */}
                <Bluebtn btn="Sign up" PostData={PostData} />
                {/* social sontainer */}
                <SocialIcon />
                {/* signup/reset container */}
                <div className="signup_para">
                  <div className="signup_para_body">
                    <p className="signup">
                      Already have an account?
                      <a href="/login" className="signup_a">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
