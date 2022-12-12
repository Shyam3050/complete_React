import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(movies);

  const fetchMovieFromFirebase = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://fir-frontend-7cedc-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) throw new Error("Sometime Went Wrong");
      const data = await response.json();

      const loadedMovie = [];
      for (const key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovie);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieFromFirebase();
  }, [fetchMovieFromFirebase]);

  let content = <p>Page Not Found</p>;
  if (error) content = <p>{error}</p>;

  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={fetchMovieFromFirebase}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
