import { LoadingStatus } from "../../../types";
import { LatestArticlesActions, LatestArticlesActionTypes } from "./actions";

export type LatestArticleType = {
  title: string;
  image: File;
};

export type LatestArticlesStateType = {
  latestArticles: LatestArticleType | Array<never>;
  loadingStatus: LoadingStatus;
};

const initialState: LatestArticlesStateType = {
  latestArticles: [],
  loadingStatus: {
    message: null,
    success: null,
    loading: false,
  },
};

const latestArticlesReducer = (
  state = initialState,
  action: LatestArticlesActions
): LatestArticlesStateType => {
  switch (action.type) {
    case LatestArticlesActionTypes.SET_LATEST_ARTICLES_ERROR: {
      return {
        latestArticles: [],
        loadingStatus: {
          message: action.payload.message,
          success: false,
          loading: false,
        },
      };
    }

    case LatestArticlesActionTypes.SET_LATEST_ARTICLES_LOADING: {
      return {
        latestArticles: [],
        loadingStatus: {
          message: null,
          success: null,
          loading: true,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default latestArticlesReducer;
