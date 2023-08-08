import React from 'react'

function AboutUs() {
  return (
    <><nav>
    <h1 class="logo"><a href="/dashboard">Podium Live</a></h1>

    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/aboutus">About Us</a></li>
      <li><a href="/group">Group</a></li>
      <li><a href="/profile">Profile</a></li>

    </ul>
  </nav>

  <div className="row">
<div className="containers col-lg-6 col-md-6">
  
  <div className="pic"></div>
  
  <div className="box1"></div>
  <div className="box2"></div>
  
  <div className="social1">
    <i className="fa fa-facebook" aria-hidden="true"></i> 
  </div>
  <div className="social2">
  <i className="fa fa-dribbble" aria-hidden="true"></i>
  </div>
  <div className="social3">
    <i className="fa fa-codepen" aria-hidden="true"></i>
  </div>
</div>

<div className="content col-md-offset-6 col-lg-offset-6">
  <center><h1 className="contentHead">ABOUT US</h1></center>
  
  <h2>Hi Folks, <br/><br/>
    This is the team of Podium LIve. Hope yoy guys are enjoying timre with your groups and other strangers.Stay Tuned for many more Updates.
    <br/><br/>
    <span>&hearts;</span>
    <br/><br/>
  </h2>
</div>
</div>   
</>
  )
}

export default AboutUs

