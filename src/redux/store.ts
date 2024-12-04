import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlicer from './features/CounterSlice';
import authSlicer from './features/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';


const reducers = combineReducers({
  counter: counterSlicer,
  auth: authSlicer,
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
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
