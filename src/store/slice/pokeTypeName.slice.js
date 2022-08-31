import { createSlice } from "@reduxjs/toolkit";

const pokeTypeName = createSlice({
  name: "pokeTypeName",
  initialState: "",
  reducers: {
    setTypeName: (state, action) => action.payload,
  },
});

export const { setTypeName } = pokeTypeName.actions;

export default pokeTypeName.reducer;
