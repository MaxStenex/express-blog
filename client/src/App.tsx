import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Article, Articles, CreateArticle, Home, Login, Register } from "./pages";
import { fetchUserWithToken } from "./redux/ducks/user/actions";
import "./styles/components/App.scss";
import "./styles/normalize.scss";
import PrivateRoute from "./utils/helpers/PrivateRoute";

const App: React.FC = () => {
  //Auth when user join site, if he have token
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserWithToken());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/article/:articleId" component={Article} />
      <Route path="/articles/:pageNumber" component={Articles} />
      <PrivateRoute path="/create_article" component={CreateArticle} />
    </Switch>
  );
};

export default App;
