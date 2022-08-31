import { configureStore } from "@reduxjs/toolkit";
import toggleSwitchSlice from "./slice/toggleSwitch.slice";
import nameTrainerSlice from "./slice/name.slice";
import pokeTypeNameSlice from "./slice/pokeTypeName.slice";
export default configureStore({
  reducer: {
    toggleSwitchSlice,
    nameTrainerSlice,
    pokeTypeNameSlice,
  },
});
