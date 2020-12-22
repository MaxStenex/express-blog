import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestArticles } from "../../redux/ducks/latestArticles/actions";
import { RootStateType } from "../../redux/rootReducer";
import "../../styles/components/Home/LatestArticles.scss";
import { ArticlePreview } from "../shared";

const LatestArticles: React.FC = () => {
  const latestArticles = useSelector(
    (state: RootStateType) => state.latestArticles.latestArticles
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestArticles());
  }, [dispatch]);

  return (
    <section className="latest">
      <div className="container">
        <h2 className="latest__title">latest articles</h2>
        {latestArticles.length > 0 ? (
          <ul className="latest__articles">
            {latestArticles.map((article) => (
              <ArticlePreview
                key={article.imagePath}
                title={article.title}
                imagePath={article.imagePath}
                _id={article._id}
              />
            ))}
          </ul>
        ) : (
          <>
            <div className="latest__nothing-found">
              Nothing found <br />
              :(
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestArticles;
