import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    aap: authSlice,
  },
});

export default store;
