import React from 'react'

const DisplayObjectDetails = (props) => {
  return (
      <>
      {Object.values(props.newObj).map((val,i) => {
            return <li key={i}>{val}</li>;
          })} 
      </>
  )
}

export default DisplayObjectDetails
