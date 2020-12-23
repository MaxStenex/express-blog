import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../styles/components/Articles/Paginator.scss";
import createPaginatorNumbers from "../../utils/functions/createPaginatorNumbers";

type PaginatorProps = {
  pagesCount: number;
};

const Paginator: React.FC<PaginatorProps> = ({ pagesCount }) => {
  const { pageNumber }: { pageNumber: string } = useParams();
  const paginatorNumbersArray = createPaginatorNumbers(+pageNumber, pagesCount, 5);

  return (
    <div className="paginator">
      <div className="paginator__main">
        <NavLink className="paginator__link" to="/articles/1">
          ⇦
        </NavLink>
        {paginatorNumbersArray!.map((number, index) => (
          <NavLink key={index} className="paginator__link" to={`/articles/${number}`}>
            {number}
          </NavLink>
        ))}
        <NavLink className="paginator__link" to={`/articles/${pagesCount}`}>
          ⇨
        </NavLink>
      </div>
    </div>
  );
};

export default Paginator;
