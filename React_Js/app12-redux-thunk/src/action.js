import axios from 'axios';

const handleDeleteAsyncUserAction=(dispatch)=>{
    axios.get("http://localhost:3201/users").then(({data})=>{
        dispatch({
            type:"GET_USERS",
            payload:data
        })
    })
}
export const getUserAsyncAction=()=>{
    return (dispatch)=>{
        handleDeleteAsyncUserAction(dispatch);
    }
}


export const DeleteUserAsyncAction=(usr)=>{
    return (dispatch)=>{
        axios.delete("http://localhost:3201/users/"+usr.id).then(()=>{
            handleDeleteAsyncUserAction(dispatch);
        })
    }
}
export const PostUserAsyncAction=()=>{
    return (dispatch)=>{
        axios.post("http://localhost:3201/users").then(()=>{
            handleDeleteAsyncUserAction(dispatch);
        })

    }
}