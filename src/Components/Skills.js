import React from 'react'
import '../styles/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCode, faCloud, faTools, faCodeBranch, faBook } from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
  return (
    <div>
      
            <div className="skills">
              <h2 className="skills-title">My Services</h2>
              <h3 className="sub-title">💻 Technical Skills</h3>
              <div className="skill-container">
                <div className="tech-skills">
                  <div className="skill-box">
                    <  FontAwesomeIcon icon={faLaptopCode} className='fontawesome-icon' />
                    <h2 > Programming Languages</h2>
                    <ul >
                      <li>C, C++</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
      
                  <div className="skill-box">
                    <FontAwesomeIcon icon={faCode} className='fontawesome-icon'/>
                    <h2> Web Technologies</h2>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Java Servlets</li>
                      <li>ReactJs</li>
                      <li>Node.Js</li>
                    </ul>
                  </div>
      
                  <div className="skill-box">
                    <FontAwesomeIcon icon={faCloud} className='fontawesome-icon'/>
                    <h2> Cloud Platforms</h2>
                    <ul>
                      <li>AWS
                        <ul>
                          <li>EC2, S3</li>
                          <li>RDS, Lambda</li>
                          <li>VPC, IAM</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
      
                  <div className="skill-box">
                    <FontAwesomeIcon icon={faTools} className='fontawesome-icon'/>
                    <h2> DevOps Tools</h2>
                    <ul>
                      <li>Jenkins</li>
                      <li>Docker</li>
                    </ul>
                  </div>
      
                  <div className="skill-box">
                    <FontAwesomeIcon icon={faCodeBranch}className='fontawesome-icon' />
                    <h2> Version Control</h2>
                    <ul>
                      <li>Git</li>
                      <li>GitHub</li>
                    </ul>
                  </div>
      
                  <div className="skill-box">
                    <FontAwesomeIcon icon={faBook} className='fontawesome-icon'/>
                    <h2>Coursework</h2>
                    <ul>
                      <li>Data Structures & Algorithms</li>
                      <li>DBMS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Skills
