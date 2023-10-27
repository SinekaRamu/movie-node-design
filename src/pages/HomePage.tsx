import { useEffect, useState } from "react";
import { IMovie } from "../type";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getMovies, deleteMovie } from "../services/api";
import Loading from "../components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([
    {
      id: 124,
      title: "gilli",
      year: 2002,
    },
  ]);

  useEffect(() => {
    async function getMoviesFromAPI() {
      setIsLoading(true);
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesFromAPI();
  }, [refresh]);

  return (
    <Layout title="home">
      <h1>Movie API</h1>
      <div className="home-bar">
        <Link to="/add" role="button">
          ➕
        </Link>
        <button
          className="refresh-btn"
          disabled={isLoading}
          onClick={() => setRefresh((prev) => !prev)}
        >
          🔃
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="gridBox">
          <article className="movie-card">
            <h3>Title: Avenger Endgame</h3>
            <h4>Year: 2020</h4>
            <div className="action">
              <Link to="/edit" role="button">
                📝
              </Link>
              <Link to="/EditPage" role="button">
                🚮
              </Link>
            </div>
          </article>
          {movies.map((m, i) => (
            <article className="movie-card" key={i}>
              <h3>{m.title}</h3>
              <h4>{m.year}</h4>
              <div className="action">
                <Link to={`/edit/${m.id}`} role="button">
                  📝
                </Link>
                <Link to="/EditPage" role="button">
                  🚮
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
