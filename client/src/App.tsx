import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import api from "./api";
import { Article, CreateArticle, Home, Login, Register } from "./pages";
import { fetchUserSuccess } from "./redux/ducks/user/actions";
import "./styles/components/App.scss";
import "./styles/normalize.scss";
import PrivateRoute from "./utils/helpers/PrivateRoute";

const App: React.FC = () => {
  //Auth when user join site, if he have token
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get("auth/login/withToken", { headers: { Token: token } })
      .then((response) => {
        const data = response.data;
        dispatch(
          fetchUserSuccess({
            _id: data._id,
            firstName: data.firstName,
            lastName: data.lastName,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, token]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/articles/:articleId" component={Article} />
      <PrivateRoute path="/create_article" component={CreateArticle} />
    </Switch>
  );
};

export default App;
