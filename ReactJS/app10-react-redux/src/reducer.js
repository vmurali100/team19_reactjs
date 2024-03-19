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


  