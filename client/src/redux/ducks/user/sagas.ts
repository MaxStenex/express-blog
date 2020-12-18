import { put, takeLatest } from "redux-saga/effects";
import {
  fetchUserError,
  FetchUserType,
  UserActionTypes,
  fetchUserSuccess,
} from "./actions";
import api from "../../../api";

function* setUserSaga(action: FetchUserType) {
  try {
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
}
