import { all, put, takeLatest } from "redux-saga/effects";
import * as reduxModule from "./actions";

function* updateNameSaga({ payload }) {
  const { name } = payload;
  yield put(reduxModule.updateNameSuccess({ name }));
}

const defaultSagas = [takeLatest(reduxModule.UPDATE_NAME, updateNameSaga)];

export default function* rootSaga() {
  yield all([...defaultSagas]);
}
