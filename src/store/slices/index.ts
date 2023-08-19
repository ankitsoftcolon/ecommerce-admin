import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

import authSlice from "./authSlice";
import { REDUX_SECRET_KEY } from "../../utils/environments";

const encryptor = encryptTransform({
  secretKey: REDUX_SECRET_KEY,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  // blacklist: ["auth"],
  // stateReconciler: hardSet,
  transforms: [encryptor],
};

const rootReducers = combineReducers({
  auth: authSlice,
});

export default persistReducer(persistConfig, rootReducers);
