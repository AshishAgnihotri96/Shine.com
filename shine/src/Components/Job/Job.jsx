import React, { useContext } from 'react'
import './job.css'

import { Authcontext } from '../Authcontext'
export const Job = ({item}) => {
    const value=useContext(Authcontext)
  const state=(value.state)
  const applicants=(value.applicants)
  const isLoading=(value.isLoading)


console.log(state,"jobitem",applicants,isLoading)

  return (
    
    <>
       <div className='job'>
        <div className='job-bar'>
            <div className='job-bar1'></div>
            <div className='job-bar2'>
                <h2>Filter by</h2>
              <div className='job-bar2-div1'>
                <select>
                  <option value="">Location</option>
                  <option value="Noida">Noida</option>
                  <option value="Gurgoan">Gurgoan</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Patna">Patna</option>
                  <option value="Gwalior">Gwalior</option>
                  <option value="Jaipur">Jaipur</option>
                </select>
              </div>
              <div className='job-bar2-div2'>
              <select>
                  <option value="">Experience</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7+">7+</option>
                </select>
              </div>
              <div className='job-bar2-div3'>
              <select>
                  <option value="">Salary</option>
                  <option value="350000">3.5Lpa</option>
                  <option value="400000">4 Lpa</option>
                  <option value="500000">5 Lpa</option>
                  <option value="600000">6 Lpa</option>
                  <option value="700000">7 Lpa</option>
                  <option value="800000">8 Lpa</option>
                  <option value="900000">9 Lpa</option>
                  <option value="1000000">10 Lpa</option>
                </select>
              </div>
              <div className='job-bar2-div4'>
                <button>more filter</button>
              </div>
            </div>
           
        </div>
        </div>
      {isLoading ? (

<h4>Loading ...</h4>
) : (
applicants.filter((value) => {

    if (state === "") {

    }
     else if (
      value.heading.toLowerCase().includes(state.toLowerCase())
      )
      {
        return value;
  }
  else if (
    value.company.toLowerCase().includes(state.toLowerCase())
    )
    {
      return value;
}
else if (
  value.exp.toLowerCase().includes(state.toLowerCase())
  )
  {
    return value;
}
      else if (
        value.location.toLowerCase().includes(state.toLowerCase())
        )
       {
          return value;
    }
  })

  .map((item) => 

 <div className='job-container'>
        <div className='job-container-sidebar'>
          <h1 style={{fontSize:"18px",fontWeight:"500",marginTop:"10px",marginLeft:"15px"}}>
            {item.heading}
            </h1>
            <div style={{display:"flex",gap:"5px",marginTop:"10px",marginLeft:"15px"}}>
              <div>
                <img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="" />
              </div>
              <div>{item.location}</div>
              <div>
                <img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/1063/1063376.png" alt="" />
              </div>
              <div>{item.exp}</div>
            </div>
            <div style={{display:"flex"}}>

            <h1 style={{marginLeft:"15px",marginTop:"10px"}}>{item.type}</h1>
            <h1 style={{marginLeft:"25px",marginTop:"10px"}}>{item.position}positons</h1>
            </div>
            </div>
        <div className='job-container-mainbar'>
        <h1 style={{fontSize:"18px",fontWeight:"500",marginTop:"10px",marginLeft:"15px"}}>
            {item.heading}
            </h1>
            <div style={{display:"flex",gap:"5px",marginTop:"10px",marginLeft:"15px"}}>
              <div>
                <img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="" />
              </div>
              <div>{item.location}</div>
              <div>
                <img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/1063/1063376.png" alt="" />
              </div>
              <div>{item.exp}</div>

            </div>
            <div style={{display:"flex"}}>

              <h1 style={{marginLeft:"15px",marginTop:"10px"}}>{item.type}</h1>
              <h1 style={{marginLeft:"25px",marginTop:"10px"}}>{item.position}positons</h1>
              </div>
            </div>




    </div>
  

  )
  )}


    </>
    // <div className='job'>df
    //     <div className='job-bar'>
    //         <div className='job-bar1'></div>
    //         <div className='job-bar2'></div>
           
    //     </div>
    // <div className='job-container'>
    //     <div className='job-container-sidebar'></div>
    //     <div className='job-container-mainbar'></div>




    // </div>
    // </div>
  )
}

