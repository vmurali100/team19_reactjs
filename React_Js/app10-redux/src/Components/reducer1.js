const initialData={
    users:[],
    products:[],
    Books:[]
}
export const rootreducer1=(state=initialData,action)=>{
  switch (action.type) {
    case "ADD_USER":
        return{
            users:[...state.users,action.payload]
        }
  
    default:
        return state;
  }


}