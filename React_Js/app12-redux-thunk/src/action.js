import axios from 'axios';

export const getUserAsyncAction=()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3201/users").then(({data})=>{
            dispatch({
                type:"GET_USERS",
                payload:data
            })
        })
        

    }
}