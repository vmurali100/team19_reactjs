import React from 'react'

const DisplayUsers = (props) => {
  return (
    <>
      {props.newUsers.map((usr,i) => {
            return <li key={i}>{usr}</li>;
          })}
    </>
  )
}

export default DisplayUsers
