import { useState } from "react";
import { MovieContainer } from "./styles";
import { MovieCover } from "./MovieCover";
import { movieList } from "../../movieList";
import { Question } from "../Question";
import { Card } from "../Card";

function Movie() {
  const [question, setQuestion] = useState(1);
  const [movies, setMovies] = useState(movieList);
  const [imdbUrl, setImdbUrl] = useState("");

  
  const movieFinder = function (movieId) {
    return movies.find((movie) => movie.id === movieId);
  };

  const handleClick = (movieId) => {
    setQuestion(question + 1);
   
    const relatedMovies = movieFinder(movieId).relatedMovies;

    setMovies(relatedMovies);

    if (!relatedMovies) {
      const movieUrl = movieFinder(movieId).url;
      setImdbUrl(movieUrl);
    }
  };

  const movieCovers = movies?.map((movie) => (
    <MovieCover
      key={movie.id}
      movieId={movie.id}
      imageUrl={movie.image}
      onClick={()=> handleClick(movie.id)}
    />
  ));

  return (
    <>
      {question <= 3 && <Question questionNumber={question} />}
      {question <= 3 && <MovieContainer>{movieCovers}</MovieContainer>}
      {question > 3 && <Card href={imdbUrl} />}
    </>
  );
}

export { Movie };
