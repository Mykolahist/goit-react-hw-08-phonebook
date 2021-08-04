import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { phonebookReducer } from './phonebook';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'token',
  whitelist: ['token'],
  storage,
};

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
