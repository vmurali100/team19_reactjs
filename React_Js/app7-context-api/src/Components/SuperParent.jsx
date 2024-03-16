import React from 'react'
import Superhild from './Superhild'

const SuperParent = ({msg}) => {
  return (
    <div className='super-parent'>
        <h1>Welcome to SuperParent Component!</h1>
        {/* <Superhild msg={msg}/> */}
        <Superhild/>
      
    </div>
  )
}

export default SuperParent
