import { createSlice } from "@reduxjs/toolkit";

export const toggleSwitchSlice = createSlice({
  name: "toggleSwitch",
  initialState: true,
  reducers: {
    setToggle: (state, action) => action.payload,
  },
});

export const { setToggle } = toggleSwitchSlice.actions;

export default toggleSwitchSlice.reducer;
