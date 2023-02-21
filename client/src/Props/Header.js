import React from 'react'
import "./header.scss"

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header_container">
            <img
              src={`images/Logo.svg`}
              alt="rifiz"
              className="header_logo_image"
            />
            <img
              src={`images/profile.svg`}
              alt="rif"
              className="header_image"
            />
         
        </div>
          <img src={`images/Speratator.svg`} alt="seperator" className='seprate' />
      </div>
    </>
  );
}

export default Header
