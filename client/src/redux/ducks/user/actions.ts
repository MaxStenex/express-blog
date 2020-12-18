import { LoginValuesType } from "../../../types";
import { UserInfoType } from "./reducer";

export enum UserActionTypes {
  SET_USER = "SET_USER",
  LOGOUT_USER = "LOGOUT_USER",
  FETCH_USER = "FETCH_USER",
  FETCH_USER_LOADING = "FETCH_USER_LOADING",
  FETCH_USER_WITH_TOKEN = "FETCH_USER_WITH_TOKEN",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

export type UserActions =
  | FetchUserSuccessType
  | LogoutUserType
  | FetchUserErrorType
  | FetchUserLoadingType;

type LogoutUserType = {
  type: UserActionTypes.LOGOUT_USER;
};

export const logoutUser = (): LogoutUserType => {
  return {
    type: UserActionTypes.LOGOUT_USER,
  };
};

export type FetchUserType = {
  type: UserActionTypes.FETCH_USER;
  payload: {
    loginValues: LoginValuesType;
  };
};

export const fetchUser = (loginValues: LoginValuesType): FetchUserType => ({
  type: UserActionTypes.FETCH_USER,
  payload: {
    loginValues,
  },
});

export type FetchUserWithTokenType = {
  type: UserActionTypes.FETCH_USER_WITH_TOKEN;
};

export const fetchUserWithToken = (): FetchUserWithTokenType => ({
  type: UserActionTypes.FETCH_USER_WITH_TOKEN,
});

type FetchUserSuccessType = {
  type: UserActionTypes.SET_USER;
  payload: {
    userInfo: UserInfoType;
  };
};

export const fetchUserSuccess = (userInfo: UserInfoType): FetchUserSuccessType => {
  return {
    type: UserActionTypes.SET_USER,
    payload: {
      userInfo,
    },
  };
};

type FetchUserErrorType = {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: {
    message: string;
  };
};

export const fetchUserError = (message: string): FetchUserErrorType => ({
  type: UserActionTypes.FETCH_USER_ERROR,
  payload: {
    message,
  },
});

type FetchUserLoadingType = {
  type: UserActionTypes.FETCH_USER_LOADING;
};

export const fetchUserLoading = (): FetchUserLoadingType => ({
  type: UserActionTypes.FETCH_USER_LOADING,
});
