import React from 'react';
import podcastImage from "../images/podcast.jpg";
import './Dashboard.css';


function Dashboard() {
  return (
    <>
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

      <div className='container'>
        <div className='pictureDash'>
        <img src={podcastImage} alt="Podcast Image" />
        </div>
      <div>

      </div>
      </div>
    
    </>
  );
}

export default Dashboard;
