import { put, takeLatest } from "redux-saga/effects";
import api from "../../../api";
import {
  LatestArticlesActionTypes,
  setLatestArticlesError,
  setLatestArticlesLoading,
  setLatestArticlesSuccess,
} from "./actions";
import { LatestArticleType } from "./reducer";

function* fetchLatestAtcilesSaga() {
  try {
    yield put(setLatestArticlesLoading());
    const response = yield api.get("posts/lastest");
    const latestArticles: Array<LatestArticleType> = response.data.map((a: any) => ({
      title: a.title,
      imagePath: a.postPhotoName,
    }));
    yield put(setLatestArticlesSuccess(latestArticles));
  } catch (error) {
    yield put(setLatestArticlesError(error.response.data.error));
  }
}

export function* latestArticlesSaga() {
  yield takeLatest(
    LatestArticlesActionTypes.FETCH_LATEST_ARTICLES,
    fetchLatestAtcilesSaga
  );
}
