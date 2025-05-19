import { all, fork } from 'typed-redux-saga';
import {categoriesSaga} from './categories';
import {cardsSaga} from './cards';

export default function* rootSaga() {
  yield* all([
    fork(categoriesSaga), 
    fork(cardsSaga)
  ]);
}