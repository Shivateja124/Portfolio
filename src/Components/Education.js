import React from 'react'
import '../styles/Education.css';
const Education = () => {
  return (
  
       <div className='education'>
        <h2>My Academic Journey</h2>
        <h1>Education Background</h1>
        <div className='education-container'>

          <div >
            <h3>SSC</h3>
            <p>TSWRS(BOYS), Nakirekal, Nalgonda Dist</p>
            <p>2019-2020</p>
            <p>Grade:10.0</p>
            <div className="range">
              <input type="range" id="skillRange" min="0" max="100" value={100} readOnly />
              <span>100%</span>
            </div>

          </div>

          <div>
            <h3>Intermediate-MPC</h3>
            <p>TSWRS /JC(BOYS) COE Hayathnagar, RR Dist</p>
            <p>2020-2022</p>
            <p>Grade:9.54</p>
            <div className="range">
              <input type="range" id="skillRange" min="0" max="100" value={95.4} readOnly />
              <span>95.4%</span>
            </div>
          </div>

          <div>
            <h3>BTech-CSE</h3>
            <p> Vardhaman College of Engineering, Shamshabad</p>
            <p>2022-2026</p>
            <p>Grade:9.30</p>
            <div className="range">
              <input type="range" id="skillRange" min="0" max="100" value={90} readOnly />
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Education
