import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    {
      id: 11,
      email: "DMontemer@tortor.gov",
      username: "YBartley",
      password: "LOvPB",
    },
    {
      id: 12,
      email: "KSteele@aenean.ly",
      username: "IBeverage",
      password: "fs7rw",
    },
    {
      id: 13,
      email: "SWasson@libero.ly",
      username: "MPark",
      password: "I1na3",
    },
    {
      id: 14,
      email: "QGrimm@turpis.org",
      username: "ASutton",
      password: "8QeXQ",
    },
    {
      id: 15,
      email: "RZensen@elementum.io",
      username: "VZazzara",
      password: "n2KJK",
    },
  ],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((usr) => usr.id !== action.payload.id);
    },
  },
});

export const { addUser ,deleteUser} = usersSlice.actions;

export default usersSlice.reducer;
