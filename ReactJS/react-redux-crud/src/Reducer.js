const intialState={
    users:[]
}
const Reducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return {
                ...state,
                users: [...state.users, action.payload] 
            };
        default:
            return state;
    }
};

export default Reducer;