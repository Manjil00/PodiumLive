import React from 'react';
import './Profile.css';

function Profile() {
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
  <div class="container">
  <h1 class="title">Your Profile </h1>
  <div class="row cf">
    <div id="card1" class="card four col">
      <div class="image-wrapper"></div>
      <h3 class="name"></h3>
      <div class="info cf">
        <div class="four col"><span class="number">100</span>Record</div>
        <div class="four col"><span class="number">28</span>Live Joined</div>
        <div class="four col"><span class="number">179</span>Created</div>
      </div>
      <div class="options">
        <ul>
          <li><span class="icon"><i class="fa fa-plus" aria-hidden="true"></i></span>Add to team</li>
        </ul>
      </div>
    </div>

    <div id="card2" class="card four col">
      <div class="header"></div>
      <div class="wrapper">
        <div class="image-wrapper"></div>
        <h3 class="name">Manjil Maharjan</h3>
        <div class="info">
          <p>🎙️ Podcast Junkie 📣 | Diving into Conversations That Matter | Amplifying Voices | Tune in and Join the Discussion! 🎤 #PodcastAddict</p>
        </div>
      </div>
    </div>

    <div id="card3" class="card four col">
      <div class="header"></div>
      <div class="wrapper">
        <h2 class="name">Manjil Maharjan</h2>
        <h4 class="name">Do you want to </h4>
        <a href="/login">Logout?</a>  
      </div>
      
    </div>
  </div>
</div>
</>
  );
}

export default Profile
