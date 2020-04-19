import { all, put, takeLatest } from "redux-saga/effects";
import * as reduxModule from "./actions";

function* updateNameSaga(payload) {
  yield put(reduxModule.updateNameSuccess(payload));
}

const defaultSagas = [takeLatest(reduxModule.UPDATE_NAME, updateNameSaga)];

export default function* rootSaga() {
  yield all([...defaultSagas]);
}
