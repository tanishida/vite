import axios from 'axios';
import { put, call, takeLatest } from 'typed-redux-saga';
import { Caterogires } from '../../models/categories';
import { actionCreator } from '../store';
import { createAction } from '@reduxjs/toolkit';

const actionCreators = {
  getData: createAction("categories/getData")
}

async function getData() {
  const url = 'https://well-power-ox.glitch.me/api/v1/categories';
  return await axios.get<Caterogires>(url);
}

function* handleGetData(_: ReturnType<typeof actionCreators.getData>) {
  try {
    const res = yield* call(getData)
    yield* put(actionCreator.catogoriesPage.setData(res.data))
  } catch (error) {
    console.log(error);
  }
}

export function* categoriesSaga() {
  yield* takeLatest("categories/getData", handleGetData);
}

export const categoriesSagaModule = {
  actions: actionCreators
}