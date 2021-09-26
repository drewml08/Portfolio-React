import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
    <footer className="fixed-bottom py-3 text-white">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center contact-container">
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:drewml08@gmail.com">drewml08@gmail.com</a></li>
                    <li className="ps-5"><FontAwesomeIcon icon={faPhone} /><a href="tel:704-763-4485">704-763-4485</a></li>
                    <li className="ps-5"><FontAwesomeIcon icon={faLinkedinIn} /><a href="https://www.linkedin.com/in/michael-drew-a2896271/" target="_blank">linkedin.com/in/michael-drew-a2896271/</a></li>
                    <li className="ps-5"><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/drewml08" target="_blank">github.com/drewml08</a></li>
                    <li className="ps-5"><FontAwesomeIcon icon={faFilePdf} /><Link to="/files/resume.pdf" target="_blank" download="Mike_Drew_Resume.pdf">PDF Resume</Link></li>
                </ul>
            </div>
        </div>
    </footer>
    );
}

export default Footer;