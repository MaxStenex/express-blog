import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import "./styles/components/App.scss";
import "./styles/normalize.scss";

const App: React.FC = () => {
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
