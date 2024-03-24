const defaultState = {
    users : []
}
export const reducer = (state = defaultState ,action) =>{
    console.log(action );
    switch(action.type){
        case "ADD_USER" :
          return {
          ...state,
          users : [...state.users,action.payload]

          }
          case "UPDATE_USER" :
            return {
            ...state,
            users : state.users.map((usr,i) => {
                 if(i === action.payload.index){
                    return action.payload
                 }
                 return usr
            })
            };
         case  "DELETE_USER" :
            return {
                ...state,
                users : [
                    ...state.users.filter((usr)=> usr.fname !== action.payload.fname)
                ]
            }
        default :
        return state
        break;
    }
}