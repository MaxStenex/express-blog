import { LoadingStatus } from "../../../types";
import { LatestArticlesActions, LatestArticlesActionTypes } from "./actions";

export type LatestArticleType = {
  title: string;
  imagePath: string;
};

export type LatestArticlesStateType = {
  latestArticles: Array<LatestArticleType>;
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

    case LatestArticlesActionTypes.SET_LATEST_ARTICLES_SUCCESS: {
      return {
        latestArticles: action.payload.latestArticles,
        loadingStatus: {
          message: null,
          success: true,
          loading: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default latestArticlesReducer;
