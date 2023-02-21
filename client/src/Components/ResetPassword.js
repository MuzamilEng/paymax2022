import React from 'react'
import "./reset.scss"
import MyAccount from '../Props/MyAccount'
import ResetOptions from '../Props/ResetOptions'
import Input from '../Props/Input'
import Bluebtn from '../Props/Bluebtn'
import Header from '../Props/Header'

const ResetPassword = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container_3">
        <Header />
          <div className="reset_section">
            <MyAccount />
            <ResetOptions title="My Account" />
            <div className="reset_section_2">
              <h2 className="reset_password">Reset Password</h2>
              <Input
                label="Current Password"
                placeholder="password"
                img={`images/Eye off.svg`}
              />
              <Input
                label="New Password"
                placeholder="password"
                img={`images/Eye off.svg`}
              />
              <Bluebtn 
                btn="Reset Password"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword
