import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Register } from "./pages";
import "./styles/components/App.scss";
import "./styles/normalize.scss";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default App;
