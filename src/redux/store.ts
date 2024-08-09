import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "./countries/countriesSlice";
import countriesReducer from "./countries/countriesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [countriesApi.reducerPath]: countriesApi.reducer,
      countries: countriesReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    //   // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(countriesApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
