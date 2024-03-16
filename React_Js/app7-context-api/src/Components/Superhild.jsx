import React from 'react'
import ContentComponent from './ContentComponent'

const Superhild = ({msg}) => {
  return (
    <div className='super-child'>
        <h1>Welcome to Superchild Component!</h1>
        {/* <ContentComponent msg={msg}/> */}
        <ContentComponent/>
      
    </div>
  )
}

export default Superhild
