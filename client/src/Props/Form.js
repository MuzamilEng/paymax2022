import React from 'react'
import Input from './Input'
import "./form.scss"
import SocialIcon from './SocialIcon'
// import axios from 'axios'
import Bluebtn from './Bluebtn'
// import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
 const navigate = useNavigate();
 const [formData, setFormData] = useState({
   username: "",
   password: "",
 });

 const { username, password } = formData;

 const handleInputs = (e) => {
 console.log("running", e.target.name);
   setFormData({ ...formData, [e.target.name]: e.target.value });
 }

const loginUser = async (e) => {
  e.preventDefault();
  const LoginUser = {username, password}
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(LoginUser)
  };
  console.log("hello", LoginUser);
  try {
    const res = await fetch("/api/auth/login", config);
    const data = await res.json();


    if (data.status === 422) {
      window.alert("Invalid User");
      navigate("/");
    } else {
      window.alert("Login Successful");
      navigate("/myaccount");
    }
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
      <div className="form_container">
        <div className="form_body">
          <form method="post">
            <div className="lofin_form">
              {/* hero section */}
              <div className="hero">
                <img src={`images/Logo.svg`} alt="rifiz" className="logo_img" />
                <h1 className="page_title">Login</h1>
                <p className="title_para grey">
                  Free forever. No payment needed.
                </p>
              </div>
              {/* input section */}
              <Input
                label="Username *"
                placeholder="user name"
                img={`images/Eye_Off.svg`}
                value={username}
                handleInputs={handleInputs}
                name="username"
              />
              <Input
                label="Password"
                placeholder="password"
                img={`images/Eye_Off.svg`}
                value={password}
                handleInputs={handleInputs}
                name="password"
              />
              {/* login button */}
              <Bluebtn btn="Login" PostData={loginUser} />
              {/* social sontainer */}
              <SocialIcon />
              {/* signup/reset container */}
              <div className="signup_para">
                <div className="signup_para_body">
                  <p className="signup">
                    Don't have a Rifiz account?
                    <a href="/signup" className="signup_a">
                      Sign up
                    </a>
                  </p>
                  <p className="signup">
                    Reset Password
                    <a href="/resetpassword" className="signup_a">
                      Reset Password
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form
