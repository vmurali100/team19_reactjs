import React from 'react'

const HandleEventFun = (props) => {
  const{increment,decrement}=props

  return (
    <div>
      <button onClick={()=>increment()} >Increment</button>
<button onClick={()=>decrement()} >Decrement</button>
    </div>
  )
}

export default HandleEventFun;