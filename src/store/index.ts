import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Slices
import sessionSlice from './actions/sessionSlice';

const appReducer = combineReducers({
  session: sessionSlice,
});

export const rootReducer = state => appReducer(state);

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, appReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
