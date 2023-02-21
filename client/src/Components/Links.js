import React from 'react'
import "./links.scss"
import Input2 from '../Props/Input2';
import Bluebtn2 from "../Props/Bluebtn2"
import Redbtn2 from '../Props/Redbtn2';
import MyAccount from '../Props/MyAccount';
import Link from "../Props/Link"
import Header from '../Props/Header';
import Bluebtn from '../Props/Bluebtn';

const Links = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container_links">
          <div className="links_page_container">
            <MyAccount />
            <Link title="Links" />
            <div className="title_link">
              <h1 className="links_title">AllLinks</h1>
            </div>
            <div className="column_container1">
              <div className="links_page_column">
                <img className="equal1" src={`images/equal.png`} alt="links" />{" "}
                <br />
                <img className="equal2" src={`images/equal.png`} alt="links" />
                <br />
                <img className="equal3" src={`images/equal.png`} alt="links" />
                <br />
                <img className="equal4" src={`images/equal.png`} alt="links" />
                <br />
              </div>
              <div className="links_page_column">
                <Input2 label="Enter URL" placeholder="https://yourlink.com" />
                <Input2 label="Enter URL" placeholder="https://yourlink.com" />
                <Input2 label="Enter URL" placeholder="https://yourlink.com" />
                <Input2 label="Enter URL" placeholder="https://yourlink.com" />
              </div>
              <div className="links_page_column">
                <Input2 label="Title" placeholder="My Website" />
                <Input2 label="Title" placeholder="https://yourlink.com" />
                <Input2 label="Title" placeholder="https://yourlink.com" />
                <Input2 label="Title" placeholder="My Website" />
              </div>
              <div className="links_page_column">
                <Bluebtn2 btn="Set Thumbnail" />
                <Bluebtn2 btn="Set Thumbnail" />
                <Bluebtn2 btn="Set Thumbnail" />
                <Bluebtn2 btn="Set Thumbnail" />
              </div>
              <div className="links_page_column">
                <Redbtn2 btn="Delete" />
                <Redbtn2 btn="Delete" />
                <Redbtn2 btn="Delete" />
                <Redbtn2 btn="Delete" />
              </div>
            </div>
          </div>
        <div className="save_btn">
          <Bluebtn btn="Save Details" />
        </div>
      </div>
        </div>
    </>
  );
}

export default Links
