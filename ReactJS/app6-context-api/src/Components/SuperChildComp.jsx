import React from 'react'
import Content from './Content'

const SuperChildComp = ({msg}) => {
    // console.log("Message in Super Child Comp - ",msg)
  return (
    <div className='super-child'>
      <h2>Welcome to Super Child </h2>
      {/* <Content msg={msg}/> */}
      <Content/>
    </div>
  )
}

export default SuperChildComp
