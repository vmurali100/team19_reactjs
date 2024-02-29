import { useState } from "react"

export const ToDoList = () =>{
    const[myArrItems, setMyArrItems] = useState([]);
    const[inputValue, setInputValue] = useState("");

    const addItem = () =>{
        if(inputValue !==  ""){
            setMyArrItems([...myArrItems, inputValue]);
            setInputValue('');
        }
    }

    const handleChangeInput = (e) =>{
        console.log(e)
        setInputValue(e.target.value)
    }
    return(
        <div>
            <h2 style={{color:"green"}}>Scenario 7 - TO-DO-LIST</h2>
            <input type="text"
            value={inputValue}
            onChange={handleChangeInput}
            placeholder="Add new Item" style={{marginRight: "15px"}}/>
            <button onClick={addItem}>Add</button>

            <ul>
                {myArrItems.map((val)=>{
                   return <li>{val}</li>
                })}
            </ul>
         <hr />
        </div>
    )
}