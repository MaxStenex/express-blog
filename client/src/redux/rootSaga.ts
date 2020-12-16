import { all } from "redux-saga/effects";
import { helloSaga } from "./ducks/user/sagas";

export default function* rootSaga() {
  yield all([helloSaga()]);
}
