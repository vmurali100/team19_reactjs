import React from 'react'
import SuperParent from './SuperParent'

const MainComp = ({msg}) => {
    // console.log("Main Component - ",msg);
  return (
    <div className='main-comp'>
      <h2>Welcome to Main Component </h2>
      {/* <SuperParent msg={msg}/> */}
      <SuperParent/>
    </div>
  )
}

export default MainComp
