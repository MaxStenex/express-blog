import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { setUser } from "./redux/ducks/user/actions";
import "./styles/components/App.scss";
import "./styles/normalize.scss";
import api from "./utils/api";

const App: React.FC = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get("auth/login/withToken", { headers: { Token: token } })
      .then((response) => {
        const data = response.data;
        dispatch(
          setUser({ _id: data._id, firstName: data.firstName, lastName: data.lastName })
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
    </Switch>
  );
};

export default App;
