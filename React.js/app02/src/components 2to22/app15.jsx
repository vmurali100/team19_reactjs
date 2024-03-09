import React from 'react';

export function Message() {
  const presentdate = new Date();

  const date = presentdate.toLocaleDateString();
  const time = presentdate.toLocaleTimeString();

  return <div>
      <h1 style={{color:'red'}}>Welcome!</h1>
      <p style={{fontSize:'25px',fontWeight:'bolder'}}>Today's date is: {date}</p>
      <p style={{fontSize:'25px',fontWeight:'bolder'}}>Current time is: {time}</p> <hr />
    </div>

}

