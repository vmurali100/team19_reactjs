const initialData = {
  users: ["Ram", "Ravi"],
  products: ["Apple", "HP", "DELL"],
  books: [],
};
export const rootReducer = (state = initialData, action) => {
    switch (action.type) {
      case "ADD_USER":

        return {
          ...state,
          users: [...state.users, action.payload] // Ensure immutability by creating a new array
        };
      default:
        return state;
    }
  };








//   export const rootReducer = (state = initialData, action) => {
//     switch (action.type) {
//       case "ADD_USER":
//         return {
//           ...state,
//           users: [...state.users, action.payload]
//         };
//       case "DELETE_USER":
//         return {
//           ...state,
//           users: state.users.filter(user => user.id !== action.payload.id)
//         };
//       case "UPDATE_USER":
//         return {
//           ...state,
//           users: state.users.map(user =>
//             user.id === action.payload.id ? { ...user, ...action.payload.updatedData } : user
//           )
//         };
//       case "GET_USERS":
//         // Assuming you want to return all users
//         return state.users;
//       default:
//         return state;
//     }
//   };
  


  