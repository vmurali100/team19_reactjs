import React, { useState } from 'react';

const TodoList = () => {
  const [items, setitems] = useState([]);
  const [newitem, setnewitem] = useState('');

  const handlechange = (event) => {
    setnewitem(event.target.value);
  };

  const addItem = () => {
    if (newitem.trim() !== '') {
      setitems([...items, newitem]);
      setnewitem('');
    }
  };

  return (
    <div>
      <h1 style={{color:'red'}}>Secenario 7</h1>
      <input
        type="text"
        value={newitem}
        onChange={handlechange}
        placeholder="Enter your name"
      />
      <button style={{color:'red'}} onClick={addItem}>Click me!</button> <hr />
      <ul style={{fontSize:"25px", listStyle:"none", fontWeight:"bold"}}> 
        {items.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;