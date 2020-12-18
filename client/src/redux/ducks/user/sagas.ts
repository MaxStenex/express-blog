import { put, takeLatest } from "redux-saga/effects";
import {
  fetchUserError,
  FetchUserType,
  UserActionTypes,
  fetchUserSuccess,
  fetchUserLoading,
} from "./actions";
import api from "../../../api";

function* setUserWithTokenSaga() {
  try {
    const token = localStorage.getItem("token");
    const { data } = yield api.get("auth/login/withToken", { headers: { Token: token } });
    yield put(
      fetchUserSuccess({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

function* setUserSaga(action: FetchUserType) {
  try {
    yield put(fetchUserLoading());
    const response = yield api.post("auth/login", action.payload.loginValues);
    yield put(
      fetchUserSuccess({
        _id: response.data._id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      })
    );

    localStorage.setItem("token", response.headers.token);
  } catch (error) {
    yield put(fetchUserError(error.response.data.error));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionTypes.FETCH_USER, setUserSaga);
  yield takeLatest(UserActionTypes.FETCH_USER_WITH_TOKEN, setUserWithTokenSaga);
}
