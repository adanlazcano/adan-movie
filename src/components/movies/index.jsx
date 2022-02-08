import styles from "./styles.module.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import { get } from "API";
import Loading from "components/loading";
import Empty from "components/empty";
import InfiniteScroll from "react-infinite-scroll-component";

const Index = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(
    (_) => {
      const timeId = setTimeout((_) => {
        setLoading(true);
        const searchUrl = search
          ? `search/movie?query=${search}&page=${page}`
          : `discover/movie?page=${page}`;

        get(searchUrl).then((movies) => {
          setLoading(false);
          setMovies((prevMovies) => prevMovies.concat(movies.results));
          setHasMore(movies.page < movies.total_pages);
        });
      }, 1000);

      return (_) => {
        clearInterval(timeId);
      };
    },
    [search, page]
  );

  if (!loading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={(_) => setPage((prevPage) => prevPage + 1)}
      loader={<Loading />}
    >
      <ul className={styles["movies"]}>
        {movies.map((movie, i) => (
          <Card key={`movie-${movie?.id}-${i}`} {...movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default Index;
