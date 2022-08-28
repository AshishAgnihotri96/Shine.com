import React from 'react'
import { Link } from 'react-router-dom'

export const Footer1  = () => {
  return (
    <div className="Footer1">
                <div className='footer1-div'>
                    <div>
                    <Link to="/">
                        <img style={{width:"60%"}} src="https://cdn-icons-png.flaticon.com/128/263/263115.png" alt="" />
                    </Link>
                    </div>
                    
                    <div>Home</div>
                </div>
                <div className='footer1-div'>
                    <div>
                        <Link to="/job">
                        <img style={{width:"60%"}} src="https://cdn-icons-png.flaticon.com/128/3645/3645037.png" alt="" />
                        </Link>
                    </div>
                    <div>Jobs</div>
                </div>
                <div className='footer1-div'>
                    <div>
                        <Link to="/courses">
                        <img style={{width:"55%"}} src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="" />
                        </Link>
                    </div>
                    <div>Services</div>
                </div>
                <div className='footer1-div'>
                    <div>
                        <Link to="">
                        <img style={{width:"60%"}} src="https://cdn-icons-png.flaticon.com/128/3044/3044245.png" alt="" />
                        </Link>
                    </div>
                    <div>courses</div>
                </div>
                <div className='footer1-div'>
                    <div>
                        <Link to="">
                        <img style={{width:"60%"}} src="https://cdn-icons-png.flaticon.com/128/5436/5436090.png" alt="" />
                        </Link>
                    </div>
                    <div>profile</div>
                </div>
    </div>
  )
}
