import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const defaultStateValues = {
  users: [],
};
export const getAllUsersAsyc = createAsyncThunk("users/getAllUsersAsyc", async () => {
  const { data } = await axios.get("http://localhost:3201/users");
  return data
});

export const deleteUserAsync = createAsyncThunk("users/deleteUserAsync", async (usr) => {
    const { data } = await axios.delete("http://localhost:3201/users/"+usr.id);
    return data
  }); 

const usersSlice = createSlice({
  name: "users",
  initialState: defaultStateValues,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(getAllUsersAsyc.fulfilled,(state,action)=>{
        state.users = action.payload
    });
    builder.addCase(getAllUsersAsyc.rejected,(state,payload)=>{
        state.users = []
    });
    builder.addCase(deleteUserAsync.fulfilled,()=>{
        console.log("User Deleted")
    })

  }, // To handle Async States
});

export default usersSlice.reducer;
