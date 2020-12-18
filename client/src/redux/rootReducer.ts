import { combineReducers } from "redux";
import latestArticlesReducer, {
  LatestArticlesStateType,
} from "./ducks/latestArticles/reducer";
import userReducer, { UserStateType } from "./ducks/user/reducer";

export type RootStateType = {
  user: UserStateType;
  latestArticles: LatestArticlesStateType;
};

const rootReducer = combineReducers({
  user: userReducer,
  latestArticles: latestArticlesReducer,
});

export default rootReducer;
