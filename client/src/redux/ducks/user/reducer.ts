import { UserActions, UserActionTypes } from "./actions";
import { LoadingStatus } from "../../../types";

export type UserInfoType = {
  _id: string | null;
  firstName: string | null;
  lastName: string | null;
};

export type UserStateType = {
  userInfo: UserInfoType;
  fetchStatus: LoadingStatus;
};

const initialState: UserStateType = {
  userInfo: { _id: null, firstName: null, lastName: null },
  fetchStatus: {
    success: null,
    message: null,
  },
};

const userReducer = (state = initialState, action: UserActions): UserStateType => {
  switch (action.type) {
    case UserActionTypes.SET_USER: {
      return {
        userInfo: {
          ...action.payload.userInfo,
        },
        fetchStatus: {
          success: true,
          message: null,
        },
      };
    }
    case UserActionTypes.LOGOUT_USER: {
      return {
        userInfo: {
          _id: null,
          firstName: null,
          lastName: null,
        },
        fetchStatus: {
          success: null,
          message: null,
        },
      };
    }

    case UserActionTypes.FETCH_USER_ERROR: {
      return {
        ...state,
        fetchStatus: {
          success: false,
          message: action.payload.message,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
