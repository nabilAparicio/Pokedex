import { configureStore } from "@reduxjs/toolkit";
import isLoggedSlice from "./slice/login.slice";
import nameTrainerSlice from "./slice/name.slice";
export default configureStore({
  reducer: {
    isLoggedSlice,
    nameTrainerSlice,
  },
});
