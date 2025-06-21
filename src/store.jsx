import { configureStore } from "@reduxjs/toolkit";
import jokeslice from "./Jokeslice";

const store = configureStore({
  reducer: {
    joke: jokeslice.reducer,
  },
});

export default store;