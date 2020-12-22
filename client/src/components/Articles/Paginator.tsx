import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/Articles/Paginator.scss";

const Paginator: React.FC = () => {
  return (
    <div className="paginator">
      <div className="paginator__main">
        <NavLink className="paginator__link" to="/articles/1">
          1
        </NavLink>
        <NavLink className="paginator__link" to="/articles/2">
          2
        </NavLink>
        <NavLink className="paginator__link" to="/articles/3">
          3
        </NavLink>
        <NavLink className="paginator__link" to="/articles/4">
          4
        </NavLink>
        <NavLink className="paginator__link" to="/articles/5">
          5
        </NavLink>
        <NavLink className="paginator__link" to="/articles/6">
          6
        </NavLink>
        <NavLink className="paginator__link" to="/articles/7">
          7
        </NavLink>
        <NavLink className="paginator__link" to="/articles/8">
          8
        </NavLink>
      </div>
    </div>
  );
};

export default Paginator;
