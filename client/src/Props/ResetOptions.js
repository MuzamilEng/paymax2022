import React from 'react'
import "./resetOptions.scss"

const ResetOptions = (props) => {
  return (
    <>
      <div className="wrapper">
        <div className="container1">
          <div className="first_container">
            <div className="options">
            <h1 className="myaccount_title">{props.title}</h1>
              <a className="r_anchor_tag no_decorate" href="/links">
                My information
              </a>
              <a className="r_anchor_tag no_decorate" href="/myaccount">
                Reset password
              </a>
              <a className="r_anchor_tag no_decorate" href="/myaccount">
                Delete account
              </a>
              <a className="r_anchor_tag no_decorate" href="/myaccount">
                Apply for verification
              </a>
            </div>
            <div className="logout">
              <a className="anchor_tag3 no_decorate" href="/logout">
                Logout
              </a>
            </div>
          </div>
          <img
            className="seprator_line"
            src={`images/line1.png`}
            alt="seprator"
          />
        </div>
      </div>
    </>
  );
}

export default ResetOptions
