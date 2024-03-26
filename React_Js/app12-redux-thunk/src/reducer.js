const initialData={
    users:[]
}
export const rootreducer=(state=initialData,action)=>{
    switch (action.type) {
        case "GET_USERS":
            return{
                ...state,
                users:action.payload
            }
    
        default:
            return{
                state
            }
    }
}