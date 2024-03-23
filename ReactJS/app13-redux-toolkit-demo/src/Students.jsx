import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudentAsync, fetchStudentsAsync } from "./studentsSlice";

const Students = () => {
  const state = useSelector((state) => state.students);
  console.log(state);
  const dispatch = useDispatch();
  const handleCreateStudent = async () => {
    await dispatch(
      createStudentAsync({
        id: Math.round(Math.random() * 100),
        email: "murali@elementum.io",
        username: "murali",
        password: "SFB7a",
      })
    );
    dispatch(fetchStudentsAsync());
  };
  return (
    <div>
      <h2>Welcome to Students !!!</h2>
      <button
        onClick={() => {
          dispatch(fetchStudentsAsync());
        }}
      >
        Get Students
      </button>
      <button onClick={handleCreateStudent}>Add User</button>
    </div>
  );
};

export default Students;
