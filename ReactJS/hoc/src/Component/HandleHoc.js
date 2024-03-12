import React from 'react'
import Hoc from './Hoc';
const HandleHoc = (props) => {
    return (
      <div>
        <ul>
          {props.users.map((usr, index) => (
            <li key={index}>
              {usr.fname} 
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Hoc(HandleHoc)