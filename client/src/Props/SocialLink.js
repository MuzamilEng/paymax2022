import React from 'react'
import "./socialLink.scss"

const SocialLink = (props) => {
  return (
    <>
        <div className="wrapper">
            <div className="container1">
                <div className="social_input_container">
                    <img src={props.img} alt="telegram"  className='social_link_img'/>
                    <p className="social_link_para">{props.title}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SocialLink
