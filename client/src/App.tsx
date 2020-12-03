import React from "react";
import { Route, Switch } from "react-router-dom";
import { Register } from "./pages";
import "./styles/components/App.scss";
import "./styles/normalize.scss";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Register} />
    </Switch>
  );
};

export default App;
