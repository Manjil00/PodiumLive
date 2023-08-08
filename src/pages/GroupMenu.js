import React from 'react';
import './Group.css';
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
  <h1 class="title">Groups Online  </h1>
  <div class="row cf">
    <div id="card1" class="card four col">
      <div class="image-wrapper"></div>
      <h3 class="name"></h3>
      <div class="info cf">
        <div class="four col"><span class="number">15</span>People</div>
        <div class="four col"><span class="number">10</span>Speaking</div>
        <div class="four col"><span class="number">2</span>Hosting</div>
      </div>
      <div class="options">
      <a href='/group'>
        <button className='btn-4'>Join Group</button>
      </a>     
       </div>
    </div>
    {/* 2nd card */}
    <div id="card1" class="card four col">
      <div class="image-wrapper"></div>
      <h3 class="name"></h3>
      <div class="info cf">
        <div class="four col"><span class="number">30</span>People</div>
        <div class="four col"><span class="number">16</span>Speaking</div>
        <div class="four col"><span class="number">3</span>Hosting</div>
      </div>
      <div class="options">
        <a href='/group'>
        <button className='btn-4'>Join Group</button>
      </a>
      </div>
        {/* 3rd one */}
        
    </div>
  </div>
</div>
</>
  );
}

export default Profile
