import React from 'react'
import "./myAccouny.scss"

const MyAccount = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container1">
          <div className="first_container">
            <a className="anchor_tag no_decorate" href="/links">
              Links
            </a>
            <a className="anchor_tag2 no_decorate" href="/myaccount">
              My account
            </a>
          </div>
          <img className='seprator_line' src={`images/line1.png`} alt="seprator" />
        </div>
      </div>
    </>
  );
}

export default MyAccount
