import { UserStateType } from "./reducer";

export enum UserActionTypes {
  SET_USER = "SET_USER",
  LOGOUT_USER = "LOGOUT_USER",
}

export type UserActions = SetUserType | LogoutUserType;

type SetUserType = {
  type: UserActionTypes.SET_USER;
  payload: {
    user: UserStateType;
  };
};

export const setUser = (user: UserStateType): SetUserType => {
  return {
    type: UserActionTypes.SET_USER,
    payload: {
      user,
    },
  };
};

type LogoutUserType = {
  type: UserActionTypes.LOGOUT_USER;
};

export const logoutUser = (): LogoutUserType => {
  return {
    type: UserActionTypes.LOGOUT_USER,
  };
};
