const initialData={
    users:[],
    products:[],
    books:[]
}
export const rootreducer=(state=initialData,action)=>{
    switch (action.type) {
    case "ADD_USER":
        return {
            ...state,
            users:[...state.users,action.payload]
        }
    case "DELETE_USER":
        return{
            ...state,
            users:[...state.users.filter((usr,i)=> i !== action.payload)]
        }
        case "UPDATE_USER":
        return{
            ...state,
            users:state.users.map((usr,i)=> i === action.payload.index && action.payload)
        }
    default:
        return state
}
   

    
}