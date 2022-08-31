import { configureStore } from "@reduxjs/toolkit";
import toggleSwitchSlice from "./slice/toggleSwitch.slice";
import nameTrainerSlice from "./slice/name.slice";
export default configureStore({
  reducer: {
    toggleSwitchSlice,
    nameTrainerSlice,
  },
});
