import axios from 'axios';
import { put, call, takeLatest } from 'typed-redux-saga';
import { Cards } from '../../models/cards';
import { actionCreator } from '../store';
import { createAction } from '@reduxjs/toolkit';

const actionCreators = {
  postData: createAction<{url: string}>("cards/postData")
}

async function postData(url: string) {
  const apiUrl = 'https://well-power-ox.glitch.me/api/v1/image-url';
  return await axios.post<Cards>(apiUrl, {url: url});
}

function* handlePostData(action: ReturnType<typeof actionCreators.postData>) {
  try {
    const res = yield* call(postData, action.payload.url)
    yield* put(actionCreator.cardsPage.setData(res.data))
  } catch (error) {
    console.log(error);
  }
}

export function* cardsSaga() {
  yield* takeLatest("cards/postData", handlePostData);
}

export const cardsSagaModule = {
  actions: actionCreators
}