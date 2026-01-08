import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <p className="intro">Hi, I'm Elijala Shivateja</p>
          <p className="intro-text">A Full Stack Developer & Cloud Enthusiast</p>
          <p className='intro-para'>I am a Computer Science student with a strong foundation in cloud computing, DevOps, and full-stack development. Proficient in AWS, Docker, Jenkins, Java, Python, and MySQL. I have hands-on internship experience deploying CI/CD pipelines and architecting cloud solutions. Actively enhancing my skills in machine learning and automation through certifications and real-world projects.</p>
          <a href="/Shivateja_Resume.pdf" download >
            <button className="resume-button">Download Resume</button>
          </a>
        </div>
        <div className="right">
          <img className="profile-img" src='images/shivaphoto.png' alt="shivaPic" />
        </div>
      </div>


    </div>
  );
};

export default Home;
