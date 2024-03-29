const defaultState = {
  users: [],
  products: [],
  books: [],
};
export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,

        users: [
          ...state.users.filter((usr) => usr.fname !== action.payload.fname),
        ],
      };

      case "UPDATE_USER":
        return {
          ...state,
          users: 
            state.users.map((usr,i)=> i === action.payload.index && action.payload)
          
        };

    default:
      return state;
      break;
  }
};
