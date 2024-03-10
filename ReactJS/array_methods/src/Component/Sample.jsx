import React, { useState } from 'react'

const Sample = () => {
  const [friend, setFriend] = useState(["Raju", "Nethaji", "Thala Deena", "Raju"])
  const [newFriend, setNewFriend] = useState(null)
  const [mapedFriend, setMapedFriend] = useState(null)

  const filterMethod = () => {
    var filteredFriends = friend.filter((frnd) => frnd.length < 5)
    setFriend(filteredFriends);
  }
  const pushMethod = () => {
    var pushedFriend = friend.push("vanitha Akka");
    setFriend([...friend], pushedFriend);
  }
  const popMethod = () => {
    var popedFriend = friend.pop()
    setFriend([...friend], popedFriend)
  }
  const ForEachMethod = () => {
    friend.forEach((frnd) => {
      setNewFriend([...friend, frnd])
    })   
  }
  const mapMethod = () => {
    var mapedFriends = friend.map((frnd) => {
      return (
        frnd + "@gmail.com"
      );
    });
    setMapedFriend(mapedFriends);
    setFriend(mapedFriends);
  }

  const shiftMethod=()=>{
    var shiftFriend= friend.shift()
    setFriend([...friend,shiftFriend])
  }
  const unShiftMethod=()=>{
    var unShiftFriend= friend.unshift("sai")
    setFriend([...friend,unShiftFriend])
  }
  
  return (
    <div>
      <h1>{" "+friend}</h1>
      <button onClick={() => { filterMethod() }}> Filter</button>
      <br />
      <button onClick={() => { pushMethod() }}>Push</button>
      <br />
      <button onClick={() => { popMethod() }}>Pop</button>
      <br />
      <button onClick={() => { ForEachMethod() }}>ForEach</button>
      <br />
      <button onClick={() => { mapMethod() }}>mapMethod</button>
      <br />
      <button onClick={() => { shiftMethod() }}>ShiftMethod</button>
      <br />
      <button onClick={() => { unShiftMethod() }}>UnShiftMethod</button>








    </div>
  )
}
export default Sample
