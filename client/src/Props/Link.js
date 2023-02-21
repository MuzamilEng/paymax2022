import React from 'react'
import "./links.scss"

const Link = (props) => {
  return (
    <>
      <div className="wrapper">
        <div className="container1">
          <div className="first_container">
            <div className="options">
              <h1 className="myaccount_title">{props.title}</h1>
              <a className="r_anchor_tag no_decorate" href="/links">
                All Links
              </a>
              <a className="r_anchor_tag no_decorate" href="/myaccount">
                Social Media
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

export default Link
