import { LatestArticleType } from "./reducer";

export enum LatestArticlesActionTypes {
  FETCH_LATEST_ARTICLES = "FETCH_LATEST_ARTICLES",
  SET_LATEST_ARTICLES_LOADING = "SET_LATEST_ARTICLES",
  SET_LATEST_ARTICLES_SUCCESS = "SET_LATEST_ARTICLES_SUCCESS",
  SET_LATEST_ARTICLES_ERROR = "SET_LATEST_ARTICLES_ERROR",
}

export type LatestArticlesActions =
  | FetchLatestArticlesType
  | SetLatestArticlesErrorType
  | SetLatestArticlesLoadingType
  | SetLatestArticlesLoadingType;

type FetchLatestArticlesType = {
  type: LatestArticlesActionTypes.FETCH_LATEST_ARTICLES;
};

export const fetchLatestArticles = (): FetchLatestArticlesType => ({
  type: LatestArticlesActionTypes.FETCH_LATEST_ARTICLES,
});

type SetLatestArticlesLoadingType = {
  type: LatestArticlesActionTypes.SET_LATEST_ARTICLES_LOADING;
};

export const setLatestArticlesLoading = (): SetLatestArticlesLoadingType => ({
  type: LatestArticlesActionTypes.SET_LATEST_ARTICLES_LOADING,
});

type SetLatestArticlesSuccessType = {
  type: LatestArticlesActionTypes.SET_LATEST_ARTICLES_SUCCESS;
  payload: {
    latestArticles: LatestArticleType;
  };
};

export const setLatestArticlesSuccess = (
  latestArticles: LatestArticleType
): SetLatestArticlesSuccessType => ({
  type: LatestArticlesActionTypes.SET_LATEST_ARTICLES_SUCCESS,
  payload: { latestArticles },
});

type SetLatestArticlesErrorType = {
  type: LatestArticlesActionTypes.SET_LATEST_ARTICLES_ERROR;
  payload: {
    message: string;
  };
};

export const setLatestArticlesError = (message: string): SetLatestArticlesErrorType => ({
  type: LatestArticlesActionTypes.SET_LATEST_ARTICLES_ERROR,
  payload: {
    message,
  },
});
