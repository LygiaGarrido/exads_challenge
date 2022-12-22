import { createRoot } from "react-dom/client";
import { useState } from "react";

import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { Disclaimers } from "./components/Disclaimer";
import { MovieContainer , MovieCover} from "./components/Movie";
import { movieList } from "./utils/movieList";
import { Question } from "./components/Question";
import { Card } from "./components/Card";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);

function App() {


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
    <Background>
      <Logo text="Your Logo" />
      {question <= 3 && <Question questionNumber={question} />}
      {question <= 3 && <MovieContainer>{movieCovers}</MovieContainer>}
      {question > 3 && <Card href={imdbUrl} />}
      <Disclaimers textPrivacy={"Privacy Policy"} textTerms={"Terms of Use"} />
    </Background>
  );
}

root.render(<App />);
