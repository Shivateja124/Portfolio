import React, { useState } from 'react'
import '../styles/Work.css';
const Work = () => {

    const certificates = [
        {
            id: 1, title: 'DSA', provider: 'Smart Interviews', date: 'April 2025', skillGained: 'data structures such as Arrays, Linked lists, Trees, Graphs, Hash maps, Stacks, and Queues.', image: "https://smartinterviews.in/certificate/3aa8661c"
        },
        {
            id: 2, title: 'Front End Web Developer Certi cation', provider: 'Infosys Springboard', date: 'April 2025', skillGained: 'HTML,CSS,JavaScript', image: 'images/frontend.jpg'
        },
        {
            id: 3, title: 'MongoDB Basics for Students', provider: 'MongoDB', date: 'June 2025', skillGained: 'MongoDB', image: 'images/MongoDB.jpg'
        },
        {
            id: 4, title: 'AWS Academy Cloud Foundations', provider: 'AWS Academy', date: 'March 2025', skillGained: 'AWS (EC2,S3,IAM,VPC,Lambda,DynamoDB,RDS,SQS)', image: 'images/AWS_CloudFoundation.jpg',
        },
        {
            id: 5, title: 'Data Base Management System', provider: 'NPTEL', date: 'March 2025', skillGained: 'Relational Database Management Skills', image: 'images/npteldbms.jpg'
        },
        {
            id: 6, title: 'Cloud Computing', provider: 'NPTEL', date: 'April 2025', skillGained: 'Cloud Infrastructure and Services Skills, Cloud Architecture and Deployment Skills, Virtualization and Cloud Platform Skills', image: 'images/nptelcloud.jpg',
        },



    ]
    const [activetab, setActiveTab] = useState('Projects');
    const handleChangeTab = (tabname) => {
        setActiveTab(tabname);
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='work-title'>My Work</h1>
            <div className='tabs'>
                <button className='tabbuttons' onClick={() => handleChangeTab('Projects')}> Projects</button>
                <button className='tabbuttons' onClick={() => handleChangeTab('Internships')}> Internships</button>
                <button className='tabbuttons' onClick={() => handleChangeTab('Cetificates')}> Cetificates</button>
            </div>

            {activetab === 'Projects' &&
                <div className='projects'>
                    <h2>My Projects</h2>
                    <div className='project-boxes'>



                        <div className='project-box'>
                            <video
                                src="/videos/techjobportal.mp4"
                                controls
                                autoPlay
                                muted
                                loop
                                disablePictureInPicture
                                controlsList="nodownload noremoteplayback"
                                style={{ width: '100%' }}
                            ></video>

                            <h3>TechJob Portal Website</h3>
                            <p>The website helps users register, post jobs, and manage resumes securely</p>
                            <p className='tech-stack'>Tech Stack:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Java Servlets</li>
                                <li>MySQL</li>
                            </ul>
                            <a className="repo-button" href="https://github.com/Shivateja124/TechJob_Portal_2711.git" target="_blank" rel="noopener noreferrer"><button>View Repository →</button></a>
                        </div>

                        <div className='project-box'>
                            <video
                                src="/videos/musicapp.mp4"
                                controls
                                autoPlay
                                muted
                                loop
                                disablePictureInPicture
                                controlsList="nodownload noremoteplayback"
                                style={{ width: '100%' }}
                            ></video>
                            <h3>Spotify Clone</h3>
                            <p>The website lets you play and control music like Spotify in your browser.</p>
                            <p className='tech-stack'>Tech Stack:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Java Script</li>
                            </ul>
                            <a className="repo-button" href="https://github.com/Shivateja124/Spotify-Clone.git" target="_blank" rel="noopener noreferrer"><button>View Repository →</button></a>
                        </div>


                        <div className='project-box'>
                            <video
                                src="/videos/rockpaperscissor.mp4"
                                controls
                                autoPlay
                                muted
                                loop
                                disablePictureInPicture
                                controlsList="nodownload noremoteplayback"
                                style={{ width: '100%' }}
                            ></video>

                            <h3>Rock Paper Scissors</h3>
                            <p>Play Rock-Paper-Scissors using hand gestures with real-time tracking.</p>
                            <p className='tech-stack'>Tech Stack:</p>
                            <ul>
                                <li>Python</li>
                                <li>OpenCV</li>
                                <li>MediaPipe</li>
                                <li>cvzone</li>
                            </ul>
                            <a className="repo-button" href="https://github.com/Shivateja124/Rock-Paper-Scissors.git" target="_blank" rel="noopener noreferrer"><button>View Repository →</button></a>
                        </div>
                    </div>
                </div>
            }

            {activetab === 'Internships' &&
                <div className='internships'>
                    <h1> My Experience</h1>
                    <div className='internships-boxes'>
                        <div className='internships-box'>
                            <img className="companylogo" src="https://edisonrisk.com/wp-content/uploads/2020/08/mass.jpg" alt="Massmutual" />
                            <h3>AWS Cloud Internship-MassMutual</h3>
                            <p> Worked on deploying a hospital management system on AWS with CI/CD automation.</p>
                            <p><span className="duration">Duration:</span> May - November 2024</p>

                            <p className='keyskills'>Skills </p>
                            <ul>
                                <li>AWS (EC2, S3, RDS, VPC, Jenkins, Docker)</li>
                                <li>Jenkins</li>
                                <li>Docker</li>
                                <li>GitHub</li>
                            </ul>


                            <a className='repo-button' href={'images/massmutual.jpg'} target="_blank" rel="noopener noreferrer"><button>View Credentials →</button></a>

                        </div>


                        <div className='internships-box'>
                            <img className="companylogo" src={"https://apexkangra.com/wp-content/uploads/2017/10/NIELIT-Logo.png"} alt="nielit" />
                            <h3>DevOps Internship - NIELIT</h3>
                            <p> Gained hands-on experience with DevOps tools by creating a basic cloud infrastructure and CI/CD pipelines on AWS.</p>
                            <p><span className="duration">Duration:</span> August - October 2024</p>
                            <p className='keyskills'>Skills </p>
                            <ul>
                                <li>AWS(EC2, S3, RDS, Lambda, IAM, VPC)</li>
                                <li>Jenkins</li>
                                <li>Docker</li>
                            </ul>
                            <a className='repo-button' href={'images/nielit.jpg'} target="_blank" rel="noopner noreferrer"><button>View Credentials →</button></a>
                        </div>



                        <div className='internships-box'>
                            <img className="companylogo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3oB-_spOyMgfraz4sIfD_3zjNYTvVv8jnA&s"} alt="nielit" />
                            <h3>Data Science - CODTECH IT SOLUTION</h3>
                            <p>Gained practical experience in Data Science enhancing skills in data analysis, machine learning, and Python programming.</p>
                            <p><span className="duration">Duration:</span> February - March 2025</p>
                            <p className='keyskills'>Skills </p>
                            <ul>
                                <li>Data Analysis</li>
                                <li>Machine Learning</li>
                                <li>Python</li>
                            </ul>
                            <a className='repo-button' href={'images/codetechdatascience.jpg'} target="_blank" rel="noopner noreferrer"><button>View Credentials →</button></a>
                        </div>
                    </div>
                </div>
            }

            {activetab === 'Cetificates' &&
                <div className='certificates-section'>
                    <h2>My Certificates</h2>
                    <div className='certificates-scroll'>
                        <table border='2' cellPadding={8} cellSpacing="10">
                            <thead>
                                <tr>
                                    <th>Domain</th>
                                    <th>Provider</th>
                                    <th>Date</th>
                                    <th>Skill Gained</th>
                                    <th>Earned Credential</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certificates.map((certificate) => (
                                    <tr key={certificate.id}>
                                        <td>{certificate.title}</td>
                                        <td>{certificate.provider}</td>
                                        <td>{certificate.date}</td>
                                        <td>{certificate.skillGained}</td>
                                        <td>
                                            <button className='certificate-button' onClick={() => window.open(certificate.image, '_blank')}>
                                                View Certificate →
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            }
        </div>
    )
}

export default Work
