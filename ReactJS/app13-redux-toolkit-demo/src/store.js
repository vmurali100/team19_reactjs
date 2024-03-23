import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./studentsSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    // users: usersSlice,
    students:studentsSlice
  },
});
