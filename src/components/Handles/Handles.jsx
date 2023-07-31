import React from "react";
import usericon from "../../assets/dp.png";
import "./Handles.css";
import twitter from "../../assets/icons/twitter.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import globe from "../../assets/icons/globe.svg";

const Handles = () => {
  const links = [
    {
      icon: globe,
      title: "Official Website",
      url: "https://hsatco.org",
    },
    {
      icon: linkedin,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-roan-6792a2244/",
    },
    {
      icon: twitter,
      title: "Twitter",
      url: "https://x.com/kevinroan_",
    },
    {
      icon: github,
      title: "Github",
      url: "https://github.com/kevin-roan",
    },
  ];
  const handleLinkClick = (url) => {
    window.open(url);
  };
  return (
    <div className="main-wrapper">
      <div className="header">
        <img src={usericon} />
        <h1>@kevinroan_</h1>
      </div>
      <div className="nav-links">
        <ul>
          {links.map((title, index) => {
            return (
              <li key={index} onClick={() => handleLinkClick(title.url)}>
                <a>
                  <img
                    src={title.icon}
                    alt={title.title}
                    style={{ width: "20px" }}
                  />
                  {title.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Handles;
