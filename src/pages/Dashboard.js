import React from 'react';
// import podcastImage from '../images/podcast.jpg';
import './Dashboard.css';

function Dashboard() {
  return (
    <>
    <div>
   
       
      <nav>
        <h1 className="logo"><a href="/dashboard">Podium Live</a></h1>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/group">Group</a></li>
          <li><a href="/profile">Profile</a></li>

        </ul>
      </nav>
      <div>
      <p style={{textAlign: "center",fontWeight:'bold',color:'#000',}}>Join a group to start listening to your favorite!!</p>
    </div>
      {/* <div className='container'>
      <div className='pictureDash'>
        <img src={podcastImage} />
        </div >
        </div> */}

     <div>
      <a href='/groupmenu'>
         <button class="trigger" >
              Join Group <span></span>
         </button>
         </a>
      </div>

      </div>       
    </>
  );
}

export default Dashboard;
