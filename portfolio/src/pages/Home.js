import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faRocket, faGraduationCap, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <h2 className="pt-5 section-title"><span className="icon-holder"><FontAwesomeIcon icon={faUser} /></span>About Me</h2>
                Hello, I'm Mike. I am an aspiring software developer that has lived in Charlotte for 8 years. I am enthusiastic about learning CSS, javascript, Python, among other languages! I enjoy working out, playing the guitar, reading, and spending time in the outdoors and nature.
                <br/>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <h2 className="pt-5 section-title"><span className="icon-holder"><FontAwesomeIcon icon={faBriefcase} /></span>Professional</h2>
                <div className="professional-section">
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Meat Cutter, Buyer</h3>
                            <div className="time">2011 - Present</div>
                        </div>
                        <div className="company">Whole Foods Market</div>
                    </div>
                    <div className="details">
                        <p>Assist in training and supervising new employees, buying finished product for sale in store, cutting meat and maintaining fresh cases, greeting and serving customers, receiving and processing product shipments, purchase supplies in software system, efficiently manage inventory and minimize shrink, neatly organize and stock shelves, accurately price and label products, learn and comply with health/sanitation standards, accurately complete various temperature, sanitation, and grind logs.</p>
                    </div>
                </div>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Physical Therapy Technician</h3>
                            <div className="time">2010 - 2011</div>
                        </div>
                        <div className="company">Advanced Center for Physical Therapy</div>
                    </div>
                    <div className="details">
                        <p>Work as a physical therapy tech, assisting physical therapists in operations of the clinic, helping patients work through their exercise programs, administer heat and cold therapy as well as electro stimulation and ultrasound.</p>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <h2 className="pt-5 section-title"><span className="icon-holder"><FontAwesomeIcon icon={faGraduationCap} /></span>Education</h2>
                <div className="education-container container-block">
                <div className="item">
                    <h4 className="degree">Coding Boot Camp</h4>
                    <h5 className="meta">University of North Carolina<br/>Charlotte, NC</h5>
	                    <div class="time">2021</div>
                </div>
                <div className="item">
                    <h4 className="degree">Bachelor of Business Administration</h4>
                    <h5 className="meta">James Madison University<br/>Harrisonburg, VA</h5>
                    <div className="time">2005 - 2008</div>
                </div>
                <div className="item">
                    <h4 className="degree">Associate in Science of Business Administration</h4>
                    <h5 className="meta">Piedmont Virginia Community College<br/>Charlottesville, VA</h5>
                    <div className="time">2002 - 2004</div>
                </div>
            </div>
            
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <h2 className="pt-5 section-title"><span className="icon-holder"><FontAwesomeIcon icon={faRocket} /></span>Skills &amp; Proficiency</h2>
                <Container className="skillset">   
                    <Row>
                        <Col size="md-6">
                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faGithub} />Git &amp; GitHub</h3>                            
                            </div>

                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faJs} />Javascript &amp; jQuery</h3>
                                    
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faHtml5} />HTML5</h3>
                                                        
                            </div>

                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faCss3} />CSS</h3>
                                                        
                            </div>
                        </Col>
                        <Col size="md-6">
                            
                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faBootstrap} />Bootstrap</h3>
                                                        
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faNodeJs} />NodeJS</h3>
                                                            
                            </div>

                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faDatabase} />MySQL</h3>
                                                            
                            </div>

                            <div className="item">
                                <h3 className="level-title"><FontAwesomeIcon className = "skillset-icon" icon={faReact} />React</h3>
                                                        
                            </div>
                        </Col> 
                    </Row>     
                    

                </Container>  
            </Col>
        </Row>
  </Container>
  );
};

export default Home;