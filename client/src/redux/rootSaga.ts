import { all } from "redux-saga/effects";
import { latestArticlesSaga } from "./ducks/latestArticles/sagas";
import { userSaga } from "./ducks/user/sagas";

export default function* rootSaga() {
  yield all([userSaga(), latestArticlesSaga()]);
}
