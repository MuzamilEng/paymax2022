import React from 'react'
import "./myaccount.scss"
import MyAccount from '../Props/MyAccount'
import Myinformation from '../Props/Myinformation'
import ResetOptions from '../Props/ResetOptions'
import Header from '../Props/Header'

const Myaccount = () => {
  return (
    <>
        <div className="wrapper">
            <Header />
            <div className="container_2">
                <div className="my_account">
                    <MyAccount />
                    <ResetOptions />
                    <Myinformation />/
                </div>
            </div>
        </div>
    </>
  )
}

export default Myaccount
