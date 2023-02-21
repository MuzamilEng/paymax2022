import React from 'react'
import "./input2.scss"

const Input2 = (props) => {
  return (
    <>
      <div className="i_container">
        <div className="i_container_body">
          <label className="i_label1" htmlFor="Username">
            {props.label}
          </label>
          <br />
          <input
            className="i_input1 white"
            type="text"
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </>
  );
}

export default Input2
