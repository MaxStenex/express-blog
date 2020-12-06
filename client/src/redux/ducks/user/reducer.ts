import { UserActions, UserActionTypes } from "./actions";

export type UserStateType = {
  _id: string | null;
  firstName: string | null;
  lastName: string | null;
};

const initialState: UserStateType = {
  _id: null,
  firstName: null,
  lastName: null,
};

const userReducer = (state = initialState, action: UserActions): UserStateType => {
  switch (action.type) {
    case UserActionTypes.SET_USER: {
      return {
        ...action.payload.user,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
