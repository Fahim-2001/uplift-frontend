import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    roleId: null,
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.roleId = action.payload.roleId;
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
