import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import profileImage from "./profile_large.png";

function Header() {
    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    };

    const goToProjects = () => {
        history.push("/projects");    
    };

  return (
    <div className="header">
      <div className="d-flex">
        <div className="profile-container p-2">
          <img className="profile" src={profileImage} alt="" />
        </div>
        <div className="p-2">
          <h1 className="name">Mike Drew</h1>
          <h3 className="tagline ">Aspiring Software Developer</h3>
        </div>
        <div className="p-2 ml-auto">
        <button className="btn btn-primary p-2" onClick={goToHome}>Home</button>
        <button className="btn btn-primary p-2" onClick={goToProjects}>Projects</button>
        </div>
      </div>
     
      
    </div>
  );
}

export default Header;