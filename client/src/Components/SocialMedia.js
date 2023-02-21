import React, { useState } from "react";
import "./socialMedia.scss";
import Input2 from "../Props/Input2";
import MyAccount from "../Props/MyAccount";
import Link from "../Props/Link";
import Header from "../Props/Header";



const SocialMedia = () => {
  const [link, setLink] = useState("");
  const handleClick = (e)=>{
    e.preventDefault();
    setLink()

  }
  return (
    <>
      <div className="wrapper">
        <div className="container_links">
          <Header />
          <div className="links_page_container">
            <MyAccount />
            <Link title="Links" />
            <div className="title_link">
              <h1 className="links_title">Social Media</h1>
            </div>
            <div className="column_container">
              <div className="links_column0">
                <img src={`images/equal.png`} alt="links" className="equal" />
                <img src={`images/equal.png`} alt="links" className="equal" />
                <img src={`images/equal.png`} alt="links" className="equal" />
                <img src={`images/equal.png`} alt="links" className="equal" />
                <img src={`images/equal.png`} alt="links" className="equal" />
                <img src={`images/equal.png`} alt="links" className="equal" />
                <img src={`images/equal.png`} alt="links" className="equal" />
              </div>
              <div className="links_column1">
                <p className="a_links_title">Instagram</p>
                <p className="a_links_title">Youtube</p>
                <p className="a_links_title">FaceBook</p>
                <p className="a_links_title">Mastodon</p>
                <p className="a_links_title">Printest</p>
                <p className="a_links_title">Website</p>
                <p className="a_links_title">Medium</p>
              </div>

              <div className="links_column">
                <Input2 label="Enter URL" placeholder="My Website" onClick={handleClick} />
                <Input2 label="Enter URL" placeholder="https://yourlink.com" />
                <Input2 label="Enter URL" placeholder="https://yourlink.com" />
                <Input2 label="Enter URL" placeholder="" />
                <Input2 label="Enter URL" placeholder="" />
                <Input2 label="Enter URL" placeholder="" />
                <Input2 label="Enter URL" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
