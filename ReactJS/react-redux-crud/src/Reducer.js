const intialState = {
    users: []
}
const Reducer = (data = intialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {

                users: [...data.users, action.payload]
            };

        case "DELETE_USER":
            return {
                users: data.users.filter((user, index) => {
                    return index !== action.payload
                })
            }

            case "EDIT_USER":
                return {
                    ...data,
                    users: data.users.map((user, index) => {
                        if (index === action.payload.index) {
                            return {
                                ...user,
                                ...action.payload.updatedUserData
                            };
                        }
                        return user;
                    })
                };
    
    
        default:
            return data;
    }
};

export default Reducer;