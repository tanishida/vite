import { configureStore } from "@reduxjs/toolkit";
import { categoriesModule }  from "./categories";
import { categoriesSagaModule } from "./sagas/categories";
import { cardsModule } from "./cards";
import { cardsSagaModule } from "./sagas/cards";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const actionCreator = {
  catogoriesPage: {
    ...categoriesModule.actions,
    ...categoriesSagaModule.actions
  },
  cardsPage: {
    ...cardsModule.actions,
    ...cardsSagaModule.actions
  }
}

const reducer = {
  categories: categoriesModule.reducer,
  cards: cardsModule.reducer
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  
sagaMiddleware.run(rootSaga);
