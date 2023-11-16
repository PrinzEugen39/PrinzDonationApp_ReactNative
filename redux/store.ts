import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { logger } from "redux-logger";
import User from "./reducers/User";
import Categories from "./reducers/Categories";
import Donation from "./reducers/Donation";

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donation,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
// persistor.purge()
