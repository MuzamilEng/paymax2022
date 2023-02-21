import React from "react";
import { Link } from "react-router-dom";
import Header from "../Props/Header";
import SocialLink from "../Props/SocialLink" 
import "./socialLink.scss";

const SocialLinks = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="profile_container">
            <div className="profile_img_section">
              <img
                src={`images/lalo-bahi.png`}
                alt="lalo bahi"
                className="profile_img"
              />
            </div>
            <div className="profile_identity">
              <h1 className="profile_name">Dr.Freddy</h1>
              <img
                src={`images/tick-icon.svg`}
                alt="verified"
                className="tick_icon"
              />
            </div>

            <span className="span_profile">@Dr.Freddy</span>
            <br />
            <div className="profile_icons">
              <img
                src={`images/insta.png`}
                alt="instagram"
                className="profile_social_icon"
              />
              <img
                src={`images/YT.png`}
                alt="youtube"
                className="profile_social_icon"
              />
              <img
                src={`images/Twt.png`}
                alt="twitter"
                className="profile_social_icon"
              />
              <img
                src={`images/Fb.png`}
                alt="facebook"
                className="profile_social_icon"
              />
            </div>
          </div>
          <Link to="/socialmedia">
            <SocialLink
              img={`images/tlem.svg`}
              title="Favorite Telegram Channels"
            />
          </Link>
          <Link to="/socialmedia">
            <SocialLink img={`images/rif.svg`} title="My Website" />
          </Link>
          <Link to="/socialmedia">
            <SocialLink img={`images/spt.svg`} title="My Website" />
          </Link>
          <Link to="/socialmedia">
            <SocialLink img={`images/dambo.svg`} title="My Website" />
          </Link>
          <Link to="/socialmedia">
            <SocialLink img={`images/tlem.svg`} title="Send me an Email" />
          </Link>
          <Link to="/socialmedia">
            <SocialLink img={`images/spt.svg`} title="New Article About Me" />
          </Link>
          <Link to="/socialmedia">
            <SocialLink
              img={`images/rif.svg`}
              title="My Best Friends Rifiz Store"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
