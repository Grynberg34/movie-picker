import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }),
});

export default store;