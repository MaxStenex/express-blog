import { UserStateType } from "./reducer";

export enum UserActionTypes {
  SET_USER = "SET_USER",
}

export type UserActions = SetUserType;

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
