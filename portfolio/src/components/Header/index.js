import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import profileImage from "./profile_large.png";
import { HomeIcon, GridIcon } from "../Icons"

function Header() {
    const history = useHistory();

    const goToHome = (e) => {
        e.preventDefault();
        history.push("/");
    };

    const goToProjects = (e) => {
        e.preventDefault();
        history.push("/projects");    
    };

    return (
    <header className="fixed-top">
        <div className="px-3 py-2 text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a onClick={goToHome} href="#" className="d-flex align-items-center text-decoration-none">
                        <img src={profileImage} width="95" height="95"></img>
                    </a>
                    <div className="my-2 my-lg-0 me-lg-auto ps-4">
                        <h1 className="name">Mike Drew</h1>
                        <h3 className="tagline">Aspiring Software Developer</h3>
                    </div>
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <a onClick={goToHome} href="#" className="nav-link text-white">
                                <svg className="nav-icon d-block mx-auto mb-1" width="24" height="24">
                                    <HomeIcon/>
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={goToProjects} href="#" className="nav-link text-white">
                                <svg className="nav-icon d-block mx-auto mb-1" width="24" height="24">
                                    <GridIcon/>
                                </svg>
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;