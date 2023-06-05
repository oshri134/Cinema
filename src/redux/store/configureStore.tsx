// redux/store/configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../movieSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;
