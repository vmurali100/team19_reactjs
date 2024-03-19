const initialData = {
  users: ["Ram", "Ravi"],
  products: ["Apple", "HP", "DELL"],
  books: [],
};
export const rootReucer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_USER":
      var newState = { ...state };
      newState.users.push(action.payload);
      return newState;
    default:
      return state;
  }
};
