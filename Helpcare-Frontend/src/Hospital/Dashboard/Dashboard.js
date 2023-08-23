
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {

  return (
    <div>
      <hr className="hr-Style"/>
      <nav className='navbar'>
      <div className="logo" style={{marginTop:'12px'}}>
        {/* Your logo */}
      <h2>HELPCARE</h2>
      </div>
      <ul className="nav-links" style={{paddingTop:'12px'}}>
        <li className='navLinksStyle'><a href="#">Home</a></li>
        <li className='navLinksStyle'><a href="#">DoctorList</a></li>
        <li className='navLinksStyle'><a href="#">Patient List</a></li>
        <li className='navLinksStyle'><a href="#">Diagnostic</a></li>
        <li className='navLinksStyle'><a href="/register">Register</a></li>
        <li className='navLinksStyle'><a href="/login">Login</a></li>
      </ul>
      </nav>
      
      <div>
        <img src='https://aighospitals.com/uploads/frontend/home_page/featured-parallax.jpg' style={{minWidth:'100%'}}/>
      <div className='legend'>
      <p style={{color:'black',fontSize:'70px',marginLeft:'-20px'}}>Save your own health.</p>
      <p style={{color:'black',fontSize:'70px',marginTop:'-60px',marginLeft:'-20px'}}> Get Best Services.</p>
      <div style={{marginTop:'50px',marginLeft:'-20px'}}><Link to='/doctor'><button className='btn1' >Doctor</button></Link>
     <Link to='/reception'> <button className='btn' style={{backgroundColor:'#1434A4'}} >Reception</button></Link></div>
      </div>
      </div>

    </div>
  )
}

export default Dashboard
