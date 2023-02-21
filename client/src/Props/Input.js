import React from 'react'
import { useState } from 'react';
import "./input.scss"

const Input = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
  return (
    <>
      <div className="i_container">
        <div className="i_container_body">
          <label className="i_label" htmlFor="Username">
            {props.label}
          </label>
          <br />
          <input onChange={props.handleInputs}
            type={passwordShown ? "text" : "password"}
            className="i_input white"
            placeholder={props.placeholder}
            name={props.name}
          />
          <img
            src={props.img}
            alt=""
            className="i_img"
            onClick={togglePassword}
          />
        </div>
      </div>
    </>
  );
}

export default Input
