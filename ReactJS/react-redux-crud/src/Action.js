
export const actionAddUser = (userDetails) => {
  return {
    type: "ADD_USER",
    payload: userDetails


  }
}
export const actionEditUser = (index) => {
  return {
    type:"EDIT_USER",
    payload:index

  }
}

export const actionDeleteUser = (upDatedData) => {
  return {
    type:"DELETE_USER",
    payload:upDatedData

  }
}
