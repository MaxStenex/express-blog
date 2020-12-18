import { LoginValuesType } from "../../../types";
import { UserInfoType } from "./reducer";

export enum UserActionTypes {
  SET_USER = "SET_USER",
  LOGOUT_USER = "LOGOUT_USER",
  FETCH_USER = "FETCH_USER",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

export type UserActions = FetchUserSuccessType | LogoutUserType | FetchUserErrorType;

type LogoutUserType = {
  type: UserActionTypes.LOGOUT_USER;
};

export const logoutUser = (): LogoutUserType => {
  return {
    type: UserActionTypes.LOGOUT_USER,
  };
};

export type FetchUserType = {
  type: UserActionTypes;
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
