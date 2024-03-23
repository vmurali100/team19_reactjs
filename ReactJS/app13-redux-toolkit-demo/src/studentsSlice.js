import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  students: [],
};
export const fetchStudentsAsync = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const { data } = await axios.get("http://localhost:3201/users");
    return data;
  }
);
export const createStudentAsync = createAsyncThunk(
  "students/createStudent",
  async (user) => {
    const { data } = await axios.post("http://localhost:3201/users", user);
    return data;
  }
);
export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(createStudentAsync.fulfilled, (state, action) => {});
  },
});

export default studentsSlice.reducer;
