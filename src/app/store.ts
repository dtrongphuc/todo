import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import taskReducer from 'features/task/taskSlice';
import settingReducer from 'features/setting/settingSlice';
import rootSaga from 'app/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    setting: settingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
