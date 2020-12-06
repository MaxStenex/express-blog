import { combineReducers } from "redux";
import userReducer, { UserStateType } from "./ducks/user/reducer";

export type RootStateType = {
  user: UserStateType;
};

const rootReducer = combineReducers({ user: userReducer });

export default rootReducer;
