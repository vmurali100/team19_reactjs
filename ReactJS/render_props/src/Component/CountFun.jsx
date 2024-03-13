import React,{useState} from 'react'

const CountFun = (props) => {
    const [count, setCount] = useState(0)

  const  increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        {
            props.render(increment,decrement)
        }


    </div>
  )
}

export default CountFun;