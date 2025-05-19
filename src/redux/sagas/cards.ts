import axios from 'axios';
import { put, call, takeLatest, all } from 'typed-redux-saga';
import { Cards } from '../../models/cards';
import { actionCreator } from '../store';
import { createAction } from '@reduxjs/toolkit';
import { CategoryDetail } from "../../models/categories"

const actionCreators = {
  postData: createAction<{url: string, categoryId: string, categoryName: string}>("cards/postData"),
  postMultiData: createAction<CategoryDetail[]>("cards/postMultiData")
}

async function postData(url: string, categoryId: string, categoryName: string) {
  const apiUrl = 'https://well-power-ox.glitch.me/api/v1/image-url';
  return await axios.post<Cards>(apiUrl, {url: url, categoryId: categoryId, categoryName: categoryName});
}

function* handlePostData(action: ReturnType<typeof actionCreators.postData>) {
  try {
    const res = yield* call(postData, action.payload.url, action.payload.categoryId, action.payload.categoryName)
    yield* put(actionCreator.cardsPage.setData(res.data))
  } catch (error) {
    console.log(error);
  }
}

function* handlePostMultiData(action: ReturnType<typeof actionCreators.postMultiData>) {
  try {
    yield* put(actionCreator.cardsPage.setLoading(true));
    const res = yield* all(action.payload.map((a) => call(postData, `https://www.dbs-cardgame.com/fw/jp/cardlist/?search=true&category%5B0%5D=${a.value}`, a.value, a.name)))
    yield* res.map((a) => put(actionCreator.cardsPage.addData(a.data)))
    yield* put(actionCreator.cardsPage.setLoading(false));
    yield* put(actionCreator.cardsPage.setOpen(true));
  } catch (error) {
    console.log(error);
  }
}


export function* cardsSaga() {
  yield* takeLatest("cards/postData", handlePostData);
  yield* takeLatest("cards/postMultiData", handlePostMultiData);
}

export const cardsSagaModule = {
  actions: actionCreators
}