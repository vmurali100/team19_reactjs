const defaultState = {
    users:[]
}
export const rootReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users:[...state.users,action.payload]
            }
           
    
        default:
            return state
            break;
    }
}