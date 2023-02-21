import React from 'react'

const SocialIcon = (props) => {
  return (
    <>
         <div className="icon_container">
            <div className="icons">
            <div className="icon l_blue">
                <img src={`images/facebook1.png`} alt="facebook/icon" className="icon_img " />
            </div>
             <div className="icon background">
                <img src={`images/google.jpg`} alt="google/icon" className="icon_img " />
             </div>
            <div className="icon black">
                <img src={`images/apple.png`} alt="apple/icon" className="icon_img " />
            </div>

            </div>
        </div>
    </>
  )
}

export default SocialIcon
