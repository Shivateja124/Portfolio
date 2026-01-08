import React from 'react'
import '../styles/CodingProfiles.css'
const CodingProfiles = () => {
  return (
    <div>
       <div className='codingprofiles'>
        <h2>Coding Profiles</h2>
        <h1>My Technical platforms</h1>
        <div className='cprofiles'>
          <div className='profile'>
            <img className="c-icon" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" />
            <h3>GitHub</h3>
            <p>Code Repository & projects</p>
            <a href="https://github.com/Shivateja124" target="_blank" rel="noopener noreferrer">
              <button className="profile-button">View Profile  →</button>
            </a>
          </div>

          <div className='profile'>
            <img className="c-icon" src="https://th.bing.com/th/id/OIP.vQDBqShD783RptikAQhxDwHaHa?rs=1&pid=ImgDetMain" alt="leetcode" />
            <h3>LeetCode</h3>
            <p>150+ Problem solved</p>
            <a href="https://leetcode.com/u/Shivateja786/" target="_blank" rel="noopener noreferrer">
              <button className="profile-button">View Profile  →</button>
            </a>
          </div>


          <div className='profile'>
            <img className="c-icon" src="https://th.bing.com/th/id/OIP.HiT71qOFAqVFzjB5msQjCgHaHa?w=1400&h=1400&rs=1&pid=ImgDetMain" alt="github" />
            <h3>HackerRank</h3>
            <p>Acheived 3 badges</p>
            <a href="https://www.hackerrank.com/profile/elijalashivateja" target="_blank" rel="noopener noreferrer">
              <button className="profile-button">View Profile  →</button>
            </a>
          </div>

          <div className='profile'>
            <img className="c-iconw" src="https://pulipatikeerthi.github.io/images/Codechef(new)_logo.svg.png" alt="github" />
            <h3>CodeChef</h3>
            <p>200+ Problem solved</p>
            <a href="https://www.codechef.com/users/shivateja786" target="_blank" rel="noopener noreferrer">
              <button className="profile-button">View Profile  →</button>
            </a>
          </div>


          <div className='profile'>
            <img className="c-iconw" src="https://repository-images.githubusercontent.com/432254960/71e72c12-cd2b-4ee6-8d9f-0a838d283b16" alt="github" />
            <h3>Interviewbit</h3>
            <p>200+ Problem solved</p>
            <a href="https://www.interviewbit.com/profile/elijala-shiva-teja/" target="_blank" rel="noopener noreferrer">
              <button className="profile-button">View Profile  →</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingProfiles
