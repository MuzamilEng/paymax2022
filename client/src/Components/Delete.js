import React from 'react'
import "./delete.scss"
import MyAccount from '../Props/MyAccount';
import ResetOptions from '../Props/ResetOptions';
import Input from '../Props/Input';
import RedBtn from '../Props/RedBtn';
import Header from '../Props/Header';

const Delete = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container_3">
        <Header />
          <div className="reset_section">
            <MyAccount />
            <ResetOptions title="My account" />
            <div className="reset_section_2">
              <h2 className="reset_password">Delete account</h2>
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
              <RedBtn 
                btn="Delete account"
              />
              {/* <Bluebtn btn="Reset Password" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete
