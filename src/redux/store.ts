import { configureStore } from "@reduxjs/toolkit";
import { categoriesModule }  from "./categories";
import { categoriesSagaModule } from "./sagas/categories";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const actionCreator = {
  catogoriesPage: {
    ...categoriesModule.actions,
    ...categoriesSagaModule.actions
  }
}

const reducer = {
  categories: categoriesModule.reducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  
sagaMiddleware.run(rootSaga);
