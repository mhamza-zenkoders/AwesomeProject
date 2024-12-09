import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlicer from './features/CounterSlice';
import authSlicer from './features/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import { productsApi } from '../api/productsApi';


const reducers = combineReducers({
  counter: counterSlicer,
  auth: authSlicer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth', 'count'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(productsApi.middleware),
});

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
