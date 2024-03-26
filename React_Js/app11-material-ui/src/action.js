export const AddUseractions=(user)=>{
    return {
        type:"ADD_USER",
        payload:user
    }
}


export const DeleteUseractions=(index)=>{
    return {
        type:"DELETE_USER",
        payload:index
    }
}
export const UpdateUseractions=(user)=>{
    return {
        type:"UPDATE_USER",
        payload:user
    }
}




