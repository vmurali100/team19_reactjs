import {usestate} from "react"

export const Copywithin=()=>{
    const [MyArr,setMyArr]=usestate([
        "book","pencil","pen"
    ]);
    const handleArr=()=>{
    var newArr=[...MyArr];
    newArr.copyWithin(0,2,4);
    setMyArr(newArr);
    }
    return(
        <div>
            <h2>Copywithin </h2>
            <ul>
                {MyArr.map((val,i)=>{
                    return <li key={i}>{val}</li>
                })}
            </ul>
            <button onClick={handleArr}>Display Arry</button>
        </div>
    )
}